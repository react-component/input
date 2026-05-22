import BaseInput from './BaseInput';
import Input from './Input';
import TextArea from './TextArea';
import type { HolderRef } from './BaseInput';

export type {
  AutoSizeType,
  BaseInputProps,
  InputProps,
  InputRef,
  ResizableTextAreaRef,
  TextAreaProps,
  TextAreaRef,
} from './interface';
export type { HolderRef };

export { default as ResizableTextArea } from './ResizableTextArea';

export { BaseInput, TextArea };

export default Input;
