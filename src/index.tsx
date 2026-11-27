import BaseInput from './BaseInput';
import Input from './Input';
import TextArea from './TextArea';

export type {
  AutoSizeType,
  BaseInputProps,
  CommonInputProps,
  InputProps,
  InputRef,
  ResizableTextAreaRef,
  TextAreaProps,
  TextAreaRef,
} from './interface';
export type { HolderRef } from './BaseInput';

export { default as ResizableTextArea } from './ResizableTextArea';
export { default as useCount } from './hooks/useCount';
export { resolveOnChange } from './utils/commonUtils';

export { BaseInput, TextArea };

export default Input;
