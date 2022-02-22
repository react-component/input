import type {
  CSSProperties,
  ReactElement,
  ReactNode,
  MouseEventHandler,
  KeyboardEventHandler,
  InputHTMLAttributes,
} from 'react';
import type { LiteralUnion } from './utils/types';

export interface CommonInputProps {
  prefix?: ReactNode;
  suffix?: ReactNode;
  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
  affixWrapperClassName?: string;
  groupWrapperClassName?: string;
  allowClear?: boolean;
  clearIcon?: ReactNode;
}

export interface BaseInputProps extends CommonInputProps {
  value?: InputHTMLAttributes<HTMLInputElement>['value'];
  inputElement: ReactElement;
  prefixCls?: string;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  focused?: boolean;
  triggerFocus?: () => void;
  readOnly?: boolean;
  handleReset?: MouseEventHandler;
  hidden?: boolean;
}

export interface ShowCountProps {
  formatter: (args: { count: number; maxLength?: number }) => ReactNode;
}

export interface InputProps
  extends CommonInputProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'type'> {
  prefixCls?: string;
  // ref: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#%3Cinput%3E_types
  type?: LiteralUnion<
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week',
    string
  >;
  onPressEnter?: KeyboardEventHandler<HTMLInputElement>;
  showCount?: boolean | ShowCountProps;
  autoComplete?: string;
  htmlSize?: number;
}
