import BaseInput from './BaseInput';
import Input from './Input';
import TextArea from './TextArea';

export { BaseInput };
export { default as ResizableTextArea } from './ResizableTextArea';

export type {
  AutoSizeType,
  InputProps,
  InputRef,
  ResizableTextAreaRef,
  TextAreaProps,
  TextAreaRef,
} from './interface';

type CompoundedInput = typeof Input & {
  TextArea: typeof TextArea;
};

const TypedInput = Input as CompoundedInput;

TypedInput.TextArea = TextArea;

export { TextArea };

export default TypedInput;
