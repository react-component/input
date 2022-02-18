import type { BaseInputProps } from '../interface';

export function hasAddon(props: BaseInputProps) {
  return !!(props.addonBefore || props.addonAfter);
}

export function hasPrefixSuffix(props: BaseInputProps) {
  return !!(props.prefix || props.suffix || props.allowClear);
}
