import { useLayoutEffect, warning } from '@rc-component/util';
import { useMemo, useRef, useState } from 'react';
import type { RefObject } from 'react';
import type {
  InputMask,
  InputMaskDefinitions,
  InputMaskPattern,
  InputMaskState,
} from '../interface';
import {
  editMask,
  formatMask,
  hasPlaceholderConflict,
  parseMask,
} from '../utils/maskUtil';

interface MaskRequest {
  /** Value emitted for this request. */
  value: string;
  /** Text rendered for this request, including visible placeholders. */
  display: string;
  pattern: InputMaskPattern;
  mask: InputMask;
  placeholder: string | null;
  /** State passed to a dynamic mask to select `pattern`. */
  state: InputMaskState;
  selection: InputMaskState['selection'];
}

function getTokens(
  pattern: InputMaskPattern,
  definitions?: InputMaskDefinitions,
  maxLength?: number,
) {
  const tokens = parseMask(pattern, definitions);
  return maxLength !== undefined && maxLength >= 0
    ? tokens.slice(0, maxLength)
    : tokens;
}

function isFocused(input: HTMLInputElement) {
  // `document.activeElement` is the shadow host when the input is inside a shadow root.
  const root = (input.getRootNode?.() ?? input.ownerDocument) as
    Document | ShadowRoot;
  return root.activeElement === input;
}

export default function useMask({
  mask,
  maskDefinitions,
  maskPlaceholder = null,
  value,
  focused,
  isComposing,
  inputRef,
  maxLength,
}: {
  mask?: InputMask;
  maskDefinitions?: InputMaskDefinitions;
  maskPlaceholder?: string | null;
  value: string;
  focused: boolean;
  isComposing: boolean;
  inputRef: RefObject<HTMLInputElement | null>;
  maxLength?: number;
}) {
  const [request, setRequest] = useState<MaskRequest>();
  const consumedRequest = useRef<MaskRequest>(undefined);
  const currentRequest =
    request &&
    request.value === value &&
    request.placeholder === maskPlaceholder
      ? request
      : undefined;
  const pattern = useMemo(() => {
    if (typeof mask !== 'function') {
      return mask;
    }
    if (currentRequest) {
      // Inline functions change on every parent render: re-evaluate the state
      // that selected the pattern instead of the formatted value.
      return currentRequest.mask === mask
        ? currentRequest.pattern
        : mask(currentRequest.state);
    }
    return mask({ value, selection: null });
  }, [mask, value, currentRequest]);
  // Recompile rules separately so inline definitions do not reselect a dynamic mask.
  const tokens = useMemo(
    () => (pattern ? getTokens(pattern, maskDefinitions, maxLength) : []),
    [pattern, maskDefinitions, maxLength],
  );
  const formatted = useMemo(
    () =>
      tokens.length
        ? formatMask(value, tokens, maskPlaceholder, focused)
        : undefined,
    [value, tokens, maskPlaceholder, focused],
  );
  const displayValue = formatted && !isComposing ? formatted.value : value;
  const snapshotRef = useRef<{
    state: InputMaskState;
    tokens: ReturnType<typeof parseMask>;
    direction: string;
  }>(undefined);

  if (process.env.NODE_ENV !== 'production') {
    warning(
      !hasPlaceholderConflict(tokens, maskPlaceholder),
      '[rc-input] `maskPlaceholder` contains characters accepted by their mask positions. They are treated as empty positions and cannot be entered.',
    );
  }

  const getSelection = (): InputMaskState['selection'] => {
    const input = inputRef.current;
    return input && input.selectionStart !== null && input.selectionEnd !== null
      ? { start: input.selectionStart, end: input.selectionEnd }
      : null;
  };

  useLayoutEffect(() => {
    const input = inputRef.current;
    if (!mask || isComposing || !input) {
      return;
    }
    const snapshot = snapshotRef.current;
    if (request && consumedRequest.current !== request) {
      consumedRequest.current = request;
      // Keep the previous selection when a controlled parent rejects the request.
      const selection =
        snapshot &&
        request.display !== displayValue &&
        snapshot.state.value === displayValue
          ? snapshot.state.selection
          : request.selection;
      if (selection && isFocused(input)) {
        input.setSelectionRange(
          Math.min(selection.start, displayValue.length),
          Math.min(selection.end, displayValue.length),
        );
      }
    }
    snapshotRef.current = {
      state: { value: displayValue, selection: getSelection() },
      tokens,
      direction: '',
    };
  });

  const recordSelection = (direction?: string) => {
    const snapshot = snapshotRef.current;
    if (snapshot && inputRef.current?.value === snapshot.state.value) {
      snapshot.state.selection = getSelection();
      if (direction !== undefined) {
        snapshot.direction = direction;
      }
    }
  };

  const getMaskedValue = (
    nextValue: string,
    inputType = '',
    limitValue?: (value: string) => string,
  ) => {
    if (!mask) {
      return nextValue;
    }
    const state = { value: nextValue, selection: getSelection() };
    const nextPattern = typeof mask === 'function' ? mask(state) : mask;
    const nextTokens =
      typeof mask === 'function'
        ? getTokens(nextPattern, maskDefinitions, maxLength)
        : tokens;
    const previous = snapshotRef.current;
    const direction = inputType.includes('Backward')
      ? 'backward'
      : inputType.includes('Forward')
        ? 'forward'
        : previous?.direction;
    let result: {
      value: string;
      filled: boolean;
      selection: InputMaskState['selection'];
      rejected: boolean;
    };
    if (nextTokens.length) {
      result = editMask(
        previous?.state ?? { value: displayValue, selection: null },
        state,
        previous?.tokens ?? tokens,
        nextTokens,
        maskPlaceholder,
        direction,
        // Typed characters are validated one by one; other insertions are read as values.
        inputType !== 'insertText',
      );
    } else {
      // An empty pattern disables formatting, but `maxLength` still applies.
      const limited =
        maxLength !== undefined && maxLength >= 0
          ? nextValue.slice(0, maxLength)
          : nextValue;
      result = {
        value: limited,
        filled: !!limited,
        selection: state.selection,
        rejected: false,
      };
    }

    let display = result.value;
    let maskedValue = result.filled ? display : '';
    let { selection } = result;
    if (limitValue && maskedValue && !result.rejected) {
      // `count.exceedFormatter` receives the formatted value; format its result again.
      const limited = limitValue(maskedValue);
      if (limited !== maskedValue) {
        const limitedMask = nextTokens.length
          ? formatMask(limited, nextTokens, maskPlaceholder, true)
          : { value: limited, filled: !!limited };
        display = limitedMask.value;
        maskedValue = limitedMask.filled ? display : '';
        // Keep the previous caret when the formatter discards the edit.
        selection =
          previous && display === previous.state.value
            ? previous.state.selection
            : selection && {
                start: Math.min(selection.start, display.length),
                end: Math.min(selection.end, display.length),
              };
      }
    }

    setRequest({
      value: maskedValue,
      display,
      // A rejected edit keeps the pattern of the rendered value.
      pattern: result.rejected && pattern ? pattern : nextPattern,
      mask,
      placeholder: maskPlaceholder,
      state: result.rejected
        ? (currentRequest?.state ?? { value, selection: null })
        : state,
      selection,
    });
    return maskedValue;
  };

  const reset = () => {
    if (mask) {
      const state = { value: '', selection: { start: 0, end: 0 } };
      const nextPattern = typeof mask === 'function' ? mask(state) : mask;
      const nextTokens = getTokens(nextPattern, maskDefinitions, maxLength);
      const result = formatMask('', nextTokens, maskPlaceholder, true);
      const firstSlot = nextTokens.findIndex(
        (token) => typeof token !== 'string',
      );
      const position = result.positions[Math.max(firstSlot, 0)];
      setRequest({
        value: '',
        display: result.value,
        pattern: nextPattern,
        mask,
        placeholder: maskPlaceholder,
        state,
        selection: { start: position, end: position },
      });
    }
  };

  return {
    displayValue,
    hasMask: !!mask,
    hasInput: !formatted || isComposing ? !!value : formatted.filled,
    recordSelection,
    getMaskedValue,
    reset,
  };
}
