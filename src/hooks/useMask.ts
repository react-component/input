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
import type { MaskEditState, MaskSelection } from '../utils/maskUtil';

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
  selection: MaskSelection;
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

// Masks only apply to input types with a text selection.
function getSelection(input: HTMLInputElement): MaskSelection {
  return { start: input.selectionStart!, end: input.selectionEnd! };
}

function clampSelection({ start, end }: MaskSelection, length: number) {
  return { start: Math.min(start, length), end: Math.min(end, length) };
}

function isFocused(input: HTMLInputElement) {
  // `document.activeElement` is the shadow host when the input is inside a shadow root.
  return (input.getRootNode() as Document | ShadowRoot).activeElement === input;
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
    state: MaskEditState;
    tokens: ReturnType<typeof parseMask>;
    /** Rendered pattern, and the state that selected it, kept by rejected edits. */
    pattern: InputMaskPattern;
    patternState: InputMaskState;
    /** The mask was enabled during a composition, which shows unformatted text. */
    unformatted: boolean;
    direction: string;
  }>(undefined);

  warning(
    !hasPlaceholderConflict(tokens, maskPlaceholder),
    '[rc-input] `maskPlaceholder` contains characters accepted by their mask positions. They are treated as empty positions and cannot be entered.',
  );

  useLayoutEffect(() => {
    const input = inputRef.current!;
    if (!mask) {
      snapshotRef.current = undefined;
      return;
    }
    const snapshot = snapshotRef.current;
    // During a composition, keep the state before it to compare with its
    // result, unless the mask was enabled during the composition.
    if (isComposing && snapshot) {
      return;
    }
    if (!isComposing && request && consumedRequest.current !== request) {
      consumedRequest.current = request;
      // Keep the previous selection when a controlled parent rejects the request.
      const selection =
        snapshot &&
        request.display !== displayValue &&
        snapshot.state.value === displayValue
          ? snapshot.state.selection
          : request.selection;
      if (isFocused(input)) {
        const { start, end } = clampSelection(selection, displayValue.length);
        input.setSelectionRange(start, end);
      }
    }
    snapshotRef.current = {
      state: { value: displayValue, selection: getSelection(input) },
      tokens,
      pattern: pattern!,
      patternState: currentRequest?.state ?? { value, selection: null },
      unformatted: isComposing,
      direction: '',
    };
  });

  const recordSelection = (direction?: string) => {
    const snapshot = snapshotRef.current;
    const input = inputRef.current;
    if (snapshot && input?.value === snapshot.state.value) {
      snapshot.state.selection = getSelection(input);
      if (direction !== undefined) {
        snapshot.direction = direction;
      }
    }
  };

  // Only called for masked inputs, from events of the rendered input, after the
  // first masked render has recorded a snapshot.
  const getMaskedValue = (
    nextValue: string,
    inputType = '',
    limitValue?: (value: string) => string,
  ) => {
    const currentMask = mask!;
    const state = {
      value: nextValue,
      selection: getSelection(inputRef.current!),
    };
    const nextPattern =
      typeof currentMask === 'function' ? currentMask(state) : currentMask;
    const nextTokens =
      typeof currentMask === 'function'
        ? getTokens(nextPattern, maskDefinitions, maxLength)
        : tokens;
    const previous = snapshotRef.current!;
    const previousMasked = previous.tokens.some(
      (token) => typeof token !== 'string',
    );
    const readsBack = (text: string) =>
      formatMask(text, nextTokens, maskPlaceholder, true).value === text;
    // A rejected edit restores the previous value if it reads back identically
    // with the previous pattern, e.g. not raw text shown while the mask was
    // enabled during a composition, and otherwise an empty value.
    const restorePrevious = () => {
      const { value: previousValue, selection } = previous.state;
      if (!previousMasked) {
        return {
          value: previousValue,
          filled: !previous.tokens.length && !!previousValue,
          selection,
          rejected: true,
        };
      }
      const kept = formatMask(
        previousValue,
        previous.tokens,
        maskPlaceholder,
        true,
        selection.end,
      );
      const restored =
        formatMask(kept.value, previous.tokens, maskPlaceholder, true).value ===
        kept.value
          ? kept
          : formatMask('', previous.tokens, maskPlaceholder, true);
      return {
        value: restored.value,
        filled: restored.filled,
        // Raw text shown while the mask was enabled during a composition has
        // different offsets once formatted; an empty value starts at its first
        // editable position.
        selection:
          previous.unformatted || restored !== kept
            ? { start: restored.caret, end: restored.caret }
            : selection,
        rejected: true,
      };
    };
    let result: {
      value: string;
      filled: boolean;
      selection: MaskSelection;
      rejected: boolean;
    };
    if (!nextTokens.length) {
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
    } else if (previousMasked && !previous.unformatted) {
      result = editMask(
        previous.state,
        nextValue,
        previous.tokens,
        nextTokens,
        maskPlaceholder,
        inputType.includes('Backward')
          ? 'backward'
          : inputType.includes('Forward')
            ? 'forward'
            : previous.direction,
        // Typed characters are validated one by one; other insertions are read as values.
        inputType !== 'insertText',
      );
    } else {
      // Nothing was masked before: a dynamic mask returned an empty pattern, or
      // the mask was enabled during a composition. Read the whole proposed value
      // and map its caret.
      const nextMask = formatMask(
        nextValue,
        nextTokens,
        maskPlaceholder,
        true,
        state.selection.end,
      );
      // As in `editMask`, ignore values that would be read back differently.
      result = readsBack(nextMask.value)
        ? {
            value: nextMask.value,
            filled: nextMask.filled,
            selection: { start: nextMask.caret, end: nextMask.caret },
            rejected: false,
          }
        : restorePrevious();
    }

    if (limitValue && result.filled && !result.rejected) {
      // `count.exceedFormatter` receives the formatted value; format its result again.
      const limited = limitValue(result.value);
      if (limited !== result.value) {
        const limitedMask = nextTokens.length
          ? formatMask(limited, nextTokens, maskPlaceholder, true)
          : { value: limited, filled: !!limited };
        result =
          !nextTokens.length || readsBack(limitedMask.value)
            ? {
                value: limitedMask.value,
                filled: limitedMask.filled,
                // Keep the previous caret when the formatter discards the edit.
                selection:
                  limitedMask.value === previous.state.value
                    ? previous.state.selection
                    : clampSelection(
                        result.selection,
                        limitedMask.value.length,
                      ),
                rejected: false,
              }
            : restorePrevious();
      }
    }

    const maskedValue = result.filled ? result.value : '';
    setRequest({
      value: maskedValue,
      display: result.value,
      // A rejected edit keeps the rendered pattern, including an empty one.
      pattern: result.rejected ? previous.pattern : nextPattern,
      mask: currentMask,
      placeholder: maskPlaceholder,
      state: result.rejected ? previous.patternState : state,
      selection: result.selection,
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
