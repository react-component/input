import type {
  CSSProperties,
  ReactElement,
  ReactNode,
  MouseEventHandler,
} from 'react';

export interface BaseInputProps {
  value?: string;

  inputElement: ReactElement;
  prefix?: ReactNode;
  suffix?: ReactNode;
  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
  prefixCls?: string;
  className?: string;
  style?: CSSProperties;
  affixWrapperClassName?: string;
  direction?: 'ltr' | 'rtl';
  disabled?: boolean;
  focused?: boolean;
  readOnly?: boolean;
  allowClear?: boolean;
  handleReset?: MouseEventHandler;
  clearIcon?: ReactNode;

  // Events
}
