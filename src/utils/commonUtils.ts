import type React from 'react';
import type { BaseInputProps, InputProps } from '../interface';

export function hasAddon(props: BaseInputProps | InputProps) {
  return !!(props.addonBefore || props.addonAfter);
}

export function hasPrefixSuffix(props: BaseInputProps | InputProps) {
  return !!(props.prefix || props.suffix || props.allowClear);
}

// Create a normalized event that points target/currentTarget at the real mounted
// element instead of a detached cloneNode. This keeps document.contains(e.target)
// returning true, which third-party wrappers like react-number-format rely on.
function createNormalizedEvent<
  EventType extends React.SyntheticEvent<any, any>,
  Element extends HTMLInputElement | HTMLTextAreaElement,
>(event: EventType, target: Element, value: any): EventType {
  target.value = value;

  return Object.create(event, {
    target: { value: target, enumerable: true, configurable: true },
    currentTarget: { value: target, enumerable: true, configurable: true },
  }) as EventType;
}

export function resolveOnChange<
  E extends HTMLInputElement | HTMLTextAreaElement,
>(
  target: E,
  e:
    | React.ChangeEvent<E>
    | React.MouseEvent<HTMLElement, MouseEvent>
    | React.CompositionEvent<HTMLElement>,
  onChange: undefined | ((event: React.ChangeEvent<E>) => void),
  targetValue?: string,
) {
  if (!onChange) {
    return;
  }

  if (e.type === 'click') {
    // When clearing, the click event's native target is the clear icon, not the
    // input. We set target.value = '' so that e.target.value reads as the
    // cleared value, then redirect target/currentTarget back to the real input.
    onChange(createNormalizedEvent(e, target, '') as React.ChangeEvent<E>);
    return;
  }

  // Trigger by composition event or exceedFormatter, this means we need force
  // change the event target value
  // https://github.com/ant-design/ant-design/issues/45737
  // https://github.com/ant-design/ant-design/issues/46598
  if (target.type !== 'file' && targetValue !== undefined) {
    onChange(
      createNormalizedEvent(e, target, targetValue) as React.ChangeEvent<E>,
    );
    return;
  }

  onChange(e as React.ChangeEvent<E>);
}
