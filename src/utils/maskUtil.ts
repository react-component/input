import type {
  InputMaskDefinitions,
  InputMaskPattern,
  InputMaskState,
} from '../interface';

type MaskToken = string | RegExp;

const defaultDefinitions: Record<string, RegExp> = {
  '0': /[0-9]/,
  X: /[a-zA-Z]/,
  '*': /[a-zA-Z0-9]/,
};

function getRule(token: RegExp) {
  // Stateful expressions must not change between keystrokes or mutate the caller's regex.
  return token.global || token.sticky
    ? new RegExp(token.source, token.flags.replace(/[gy]/g, ''))
    : token;
}

export function parseMask(
  mask: InputMaskPattern,
  definitions?: InputMaskDefinitions,
): MaskToken[] {
  const tokens: MaskToken[] = [];

  if (typeof mask === 'string') {
    for (let index = 0; index < mask.length; index += 1) {
      const character = mask[index];
      if (character === '\\' && index + 1 < mask.length) {
        tokens.push(mask[++index]);
      } else {
        const definition = definitions?.[character];
        const token =
          definition === undefined ? defaultDefinitions[character] : definition;
        tokens.push(token ? getRule(token) : character);
      }
    }
  } else {
    mask.forEach((token) => {
      if (typeof token === 'string') {
        tokens.push(...token.split(''));
      } else {
        tokens.push(getRule(token));
      }
    });
  }

  return tokens;
}

function isSlot(token?: MaskToken): token is RegExp {
  return token !== undefined && typeof token !== 'string';
}

function getPlaceholder(placeholder: string | null, index: number) {
  return placeholder
    ? placeholder.length === 1
      ? placeholder
      : placeholder[index] || '_'
    : '';
}

export function hasPlaceholderConflict(
  tokens: MaskToken[],
  placeholder: string | null,
) {
  return (
    !!placeholder &&
    tokens.some(
      (token, index) =>
        isSlot(token) && token.test(getPlaceholder(placeholder, index)),
    )
  );
}

function matchesLiteral(tokens: MaskToken[], start: number, character: string) {
  for (let index = start; index < tokens.length; index += 1) {
    if (typeof tokens[index] === 'string' && tokens[index] === character) {
      return true;
    }
  }
  return false;
}

function matchesLaterSlot(
  tokens: MaskToken[],
  start: number,
  character: string,
) {
  for (let index = start; index < tokens.length; index += 1) {
    const token = tokens[index];
    if (typeof token !== 'string' && token.test(character)) {
      return true;
    }
  }
  return false;
}

function findLastMatch(value: string, token: RegExp) {
  for (let index = value.length - 1; index >= 0; index -= 1) {
    if (token.test(value[index])) {
      return index;
    }
  }
  return -1;
}

/**
 * Whether `value` from `offset` is consumed by the tokens from `index`,
 * leaving positions empty instead of discarding characters.
 */
function fitsRemainingTokens(
  value: string,
  offset: number,
  tokens: MaskToken[],
  index: number,
) {
  let current = offset;
  for (
    let tokenIndex = index;
    tokenIndex < tokens.length && current < value.length;
    tokenIndex += 1
  ) {
    const token = tokens[tokenIndex];
    if (typeof token === 'string') {
      let literal = token;
      while (typeof tokens[tokenIndex + 1] === 'string') {
        literal += tokens[++tokenIndex];
      }
      if (value.startsWith(literal, current)) {
        current += literal.length;
      }
    } else if (token.test(value[current])) {
      current += 1;
    }
  }
  return current === value.length;
}

/**
 * Whether a hidden position stays empty instead of discarding `text[offset]`:
 * the rest of the text fills the following positions, or the character belongs
 * to a later position and no later character fits this one.
 */
function leavesHiddenPosition(
  text: string,
  offset: number,
  tokens: MaskToken[],
  index: number,
  cache: { lastMatch?: number },
) {
  if (fitsRemainingTokens(text, offset, tokens, index + 1)) {
    return true;
  }
  if (!matchesLaterSlot(tokens, index + 1, text[offset])) {
    return false;
  }
  if (cache.lastMatch === undefined) {
    cache.lastMatch = findLastMatch(text, tokens[index] as RegExp);
  }
  return cache.lastMatch < offset;
}

/** Length of the leading literal prefix found at the start of `text`. */
function getPrefixLength(text: string, tokens: MaskToken[]) {
  let prefix = '';
  for (let index = 0; typeof tokens[index] === 'string'; index += 1) {
    prefix += tokens[index];
  }
  if (text.startsWith(prefix)) {
    return prefix.length;
  }
  // Accept a partially written prefix, e.g. `+1 555` for `+1 (000)`, only when
  // its first character cannot be entered in the first editable position.
  const firstSlot = tokens[prefix.length];
  if (text[0] !== prefix[0] || (isSlot(firstSlot) && firstSlot.test(text[0]))) {
    return 0;
  }
  let length = 0;
  for (let index = 0; index < prefix.length; index += 1) {
    if (text[length] === prefix[index]) {
      length += 1;
    }
  }
  return length;
}

function renderMask(
  tokens: MaskToken[],
  characters: (string | null)[],
  placeholder: string | null,
  showEmpty: boolean,
) {
  let lastFilled = -1;
  characters.forEach((character, index) => {
    if (character !== null) {
      lastFilled = index;
    }
  });

  let end = tokens.length;
  if (lastFilled === -1 && !showEmpty) {
    end = 0;
  } else if (!placeholder) {
    end = lastFilled + 1;
    while (typeof tokens[end] === 'string') {
      end += 1;
    }
  }

  let value = '';
  const positions: number[] = [];
  tokens.forEach((token, index) => {
    positions.push(value.length);
    if (index < end) {
      value +=
        typeof token === 'string'
          ? token
          : (characters[index] ?? getPlaceholder(placeholder, index));
    }
  });
  positions.push(value.length);

  return { value, characters, positions, filled: lastFilled !== -1 };
}

export function formatMask(
  value: string,
  tokens: MaskToken[],
  placeholder: string | null,
  showEmpty = false,
) {
  const characters: (string | null)[] = tokens.map(() => null);
  let offset = 0;
  // A separator can only end a group of editable positions that received input.
  let groupHasInput = false;

  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];
    if (typeof token === 'string') {
      const literalStart = index;
      let literal = token;
      while (typeof tokens[index + 1] === 'string') {
        literal += tokens[++index];
      }
      if (literalStart === 0) {
        offset = getPrefixLength(value, tokens);
      } else if (value.slice(offset, offset + literal.length) === literal) {
        offset += literal.length;
      }
      groupHasInput = false;
    } else {
      const cache = {};
      while (offset < value.length) {
        const character = value[offset];
        if (character === getPlaceholder(placeholder, index)) {
          offset += 1;
          groupHasInput = true;
          break;
        }
        if (token.test(character)) {
          characters[index] = character;
          offset += 1;
          groupHasInput = true;
          break;
        }
        if (
          (groupHasInput && matchesLiteral(tokens, index + 1, character)) ||
          (!placeholder &&
            leavesHiddenPosition(value, offset, tokens, index, cache))
        ) {
          break;
        }
        offset += 1;
      }
    }
  }

  return renderMask(tokens, characters, placeholder, showEmpty);
}

function findChange(
  previous: InputMaskState,
  current: InputMaskState,
  direction: string,
) {
  const oldValue = previous.value;
  const value = current.value;
  let start = previous.selection?.start ?? 0;
  let end = previous.selection?.end ?? start;

  if (previous.selection) {
    const removed = oldValue.length - value.length;
    if (start === end && removed > 0) {
      if (direction === 'backward') {
        start = Math.max(0, start - removed);
      } else if (direction === 'forward') {
        end += removed;
      }
    }
    const insertedLength = value.length - oldValue.length + end - start;
    if (
      insertedLength >= 0 &&
      oldValue.slice(0, start) === value.slice(0, start) &&
      oldValue.slice(end) === value.slice(start + insertedLength)
    ) {
      return {
        start,
        end,
        inserted: value.slice(start, start + insertedLength),
        fromSelection: true,
      };
    }
  }

  start = 0;
  while (
    start < oldValue.length &&
    start < value.length &&
    oldValue[start] === value[start]
  ) {
    start += 1;
  }
  end = oldValue.length;
  let nextEnd = value.length;
  while (
    end > start &&
    nextEnd > start &&
    oldValue[end - 1] === value[nextEnd - 1]
  ) {
    end -= 1;
    nextEnd -= 1;
  }
  return {
    start,
    end,
    inserted: value.slice(start, nextEnd),
    fromSelection: false,
  };
}

export function editMask(
  previous: InputMaskState,
  current: InputMaskState,
  previousTokens: MaskToken[],
  tokens: MaskToken[],
  placeholder: string | null,
  direction = '',
  /**
   * Read inserted text like a value, as for paste, drop or autofill, instead of
   * discarding characters that do not fit the next position, as when typing.
   */
  parse = false,
) {
  const oldMask = formatMask(previous.value, previousTokens, placeholder, true);
  const change = findChange(previous, current, direction);
  const oldSlots = previousTokens.flatMap((token, index) =>
    typeof token === 'string' ? [] : [index],
  );
  const slots = tokens.flatMap((token, index) =>
    typeof token === 'string' ? [] : [index],
  );
  let start = oldSlots.findIndex(
    (index) => oldMask.positions[index] >= change.start,
  );
  if (start === -1) {
    start = oldSlots.length;
  }
  if (change.inserted && start === oldSlots.length) {
    const firstEmpty = oldSlots.findIndex(
      (index) => oldMask.characters[index] === null,
    );
    if (firstEmpty !== -1) {
      start = firstEmpty;
    }
  }
  const removed = new Set(
    oldSlots.flatMap((index, slot) =>
      oldMask.positions[index] >= change.start &&
      oldMask.positions[index] < change.end &&
      (oldMask.characters[index] !== null || !!placeholder)
        ? [slot]
        : [],
    ),
  );

  // Deleting a separator should delete the adjacent editable character instead of reinserting it.
  // Only edits at the recorded caret qualify, not programmatic replacements.
  if (
    change.fromSelection &&
    !change.inserted &&
    change.end > change.start &&
    removed.size === 0 &&
    previous.selection?.start === previous.selection?.end
  ) {
    const slot = direction === 'forward' ? start : start - 1;
    if (slot >= 0 && slot < oldSlots.length) {
      removed.add(slot);
      start = slot;
    }
  }

  const characters: (string | null)[] = tokens.map(() => null);
  const tail: string[] = [];
  oldSlots.forEach((index, slot) => {
    const character = oldMask.characters[index];
    if (character !== null && !removed.has(slot)) {
      if (slot < start && slots[slot] !== undefined) {
        const token = tokens[slots[slot]] as RegExp;
        if (token.test(character)) {
          characters[slots[slot]] = character;
        }
      } else {
        tail.push(character);
      }
    }
  });

  let insertedOffset =
    start === 0 ? getPrefixLength(change.inserted, tokens) : 0;
  let tailOffset = 0;
  let caret = slots[start] ?? tokens.length;
  let groupHasInput = false;
  for (let index = caret - 1; isSlot(tokens[index]); index -= 1) {
    if (characters[index] !== null) {
      groupHasInput = true;
    }
  }

  for (let index = caret; index < tokens.length; index += 1) {
    const token = tokens[index];
    if (typeof token === 'string') {
      if (change.inserted[insertedOffset] === token) {
        insertedOffset += 1;
        caret = index + 1;
      }
      groupHasInput = false;
      continue;
    }

    let inserted = false;
    const cache = {};
    while (insertedOffset < change.inserted.length) {
      const character = change.inserted[insertedOffset];
      // Placeholder characters are reserved for empty positions, as in `formatMask`.
      if (character === getPlaceholder(placeholder, index)) {
        insertedOffset += 1;
        caret = index + 1;
        inserted = true;
        break;
      }
      if (token.test(character)) {
        characters[index] = character;
        insertedOffset += 1;
        caret = index + 1;
        inserted = true;
        break;
      }
      if (
        (groupHasInput && matchesLiteral(tokens, index + 1, character)) ||
        (parse &&
          !placeholder &&
          leavesHiddenPosition(
            change.inserted,
            insertedOffset,
            tokens,
            index,
            cache,
          ))
      ) {
        break;
      }
      insertedOffset += 1;
    }
    if (inserted) {
      groupHasInput = true;
    }

    if (
      !inserted &&
      characters[index] === null &&
      insertedOffset === change.inserted.length
    ) {
      if (tailOffset < tail.length && token.test(tail[tailOffset])) {
        characters[index] = tail[tailOffset++];
      }
    }
  }

  while (typeof tokens[caret] === 'string') {
    caret += 1;
  }
  const result = renderMask(tokens, characters, placeholder, true);
  // Reject results that would be read back differently, e.g. hidden empty
  // positions followed by characters that also fit them.
  if (
    formatMask(result.value, tokens, placeholder, true).value !== result.value
  ) {
    return {
      value: previous.value,
      filled: oldMask.filled,
      selection: previous.selection,
      rejected: true,
    };
  }
  const position = result.positions[caret];
  return {
    value: result.value,
    filled: result.filled,
    selection: { start: position, end: position },
    rejected: false,
  };
}
