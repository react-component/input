import type {
  CSSProperties,
  InputHTMLAttributes,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from 'react';
import type { LiteralUnion } from './utils/types';
import type { InputFocusOptions } from './utils/commonUtils';

export interface CommonInputProps {
  prefix?: ReactNode;
  suffix?: ReactNode;
  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
  classes?: {
    affixWrapper?: string;
    group?: string;
    wrapper?: string;
  };
  /** @deprecated Use classes instead */
  affixWrapperClassName?: string;
  /** @deprecated Use classes instead */
  groupClassName?: string;
  /** @deprecated Use classes instead */
  wrapperClassName?: string;
  allowClear?: boolean | { clearIcon?: ReactNode };
}

type DataAttr = Record<`data-${string}`, string>;

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
  inputStyle?: CSSProperties;
  dataAttrs?: {
    affixWrapper?: DataAttr;
  };
}

export interface ShowCountProps {
  formatter: (args: {
    value: string;
    count: number;
    maxLength?: number;
  }) => ReactNode;
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
  /** @deprecated Use classes instead */
  inputClassName?: string;
  classes?: CommonInputProps['classes'] & {
    input?: string;
  };
}

export interface InputRef {
  focus: (options?: InputFocusOptions) => void;
  blur: () => void;
  setSelectionRange: (
    start: number,
    end: number,
    direction?: 'forward' | 'backward' | 'none',
  ) => void;
  select: () => void;
  input: HTMLInputElement | null;
}
