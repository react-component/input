import ResizeObserver from '@rc-component/resize-observer';
import useControlledState from '@rc-component/util/lib/hooks/useControlledState';
import useLayoutEffect from '@rc-component/util/lib/hooks/useLayoutEffect';
import raf from '@rc-component/util/lib/raf';
import { clsx } from 'clsx';
import * as React from 'react';
import type { ResizableTextAreaRef, TextAreaProps } from './interface';
import calculateAutoSizeStyle from './calculateNodeHeight';

const RESIZE_START = 0 as const;
const RESIZE_MEASURING = 1 as const;
const RESIZE_STABLE = 2 as const;

type ResizeState =
  | typeof RESIZE_START
  | typeof RESIZE_MEASURING
  | typeof RESIZE_STABLE;

const ResizableTextArea = React.forwardRef<ResizableTextAreaRef, TextAreaProps>(
  (props, ref) => {
    const {
      prefixCls,
      defaultValue,
      value,
      autoSize,
      onResize,
      className,
      style,
      disabled,
      onChange,
      // Test only
      onInternalAutoSize,
      ...restProps
    } = props as TextAreaProps & {
      onInternalAutoSize?: VoidFunction;
    };

    // =============================== Value ================================
    const [internalValue, setMergedValue] = useControlledState(
      defaultValue,
      value,
    );
    const mergedValue = internalValue ?? '';

    const onInternalChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
      event,
    ) => {
      setMergedValue(event.target.value);
      onChange?.(event);
    };

    // ================================ Ref =================================
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    React.useImperativeHandle(ref, () => ({
      textArea: textareaRef.current!,
    }));

    // ============================== AutoSize ==============================
    const [minRows, maxRows] = React.useMemo(() => {
      if (autoSize && typeof autoSize === 'object') {
        return [autoSize.minRows, autoSize.maxRows];
      }

      return [];
    }, [autoSize]);

    const needAutoSize = !!autoSize;

    // =============================== Resize ===============================
    const [resizeState, setResizeState] =
      React.useState<ResizeState>(RESIZE_STABLE);
    const [autoSizeStyle, setAutoSizeStyle] =
      React.useState<React.CSSProperties>();

    const startResize = () => {
      setResizeState(RESIZE_START);
      if (process.env.NODE_ENV === 'test') {
        onInternalAutoSize?.();
      }
    };

    // Change to trigger resize measure
    useLayoutEffect(() => {
      if (needAutoSize) {
        startResize();
      }
    }, [value, minRows, maxRows, needAutoSize]);

    useLayoutEffect(() => {
      if (resizeState === RESIZE_START) {
        setResizeState(RESIZE_MEASURING);
      } else if (resizeState === RESIZE_MEASURING) {
        const textareaStyles = calculateAutoSizeStyle(
          textareaRef.current!,
          false,
          minRows,
          maxRows,
        );

        setResizeState(RESIZE_STABLE);
        setAutoSizeStyle(textareaStyles);
      } else {
        // https://github.com/react-component/textarea/pull/23
        // Firefox has blink issue before but fixed in latest version.
      }
    }, [resizeState]);

    // We lock resize trigger by raf to avoid Safari warning
    const resizeRafRef = React.useRef<number | undefined>(undefined);
    const cleanRaf = () => {
      if (resizeRafRef.current !== undefined) {
        raf.cancel(resizeRafRef.current);
      }
    };

    const onInternalResize = (size: { width: number; height: number }) => {
      if (resizeState === RESIZE_STABLE) {
        onResize?.(size);

        if (autoSize) {
          cleanRaf();
          resizeRafRef.current = raf(() => {
            startResize();
          });
        }
      }
    };

    React.useEffect(() => cleanRaf, []);

    // =============================== Render ===============================
    const mergedAutoSizeStyle = needAutoSize ? autoSizeStyle : null;

    const mergedStyle: React.CSSProperties = {
      ...style,
      ...mergedAutoSizeStyle,
    };

    if (resizeState === RESIZE_START || resizeState === RESIZE_MEASURING) {
      mergedStyle.overflowY = 'hidden';
      mergedStyle.overflowX = 'hidden';
    }

    return (
      <ResizeObserver
        onResize={onInternalResize}
        disabled={!(autoSize || onResize)}
      >
        <textarea
          {...restProps}
          ref={textareaRef}
          style={mergedStyle}
          className={clsx(prefixCls, className, {
            [`${prefixCls}-disabled`]: disabled,
          })}
          disabled={disabled}
          value={mergedValue as string}
          onChange={onInternalChange}
        />
      </ResizeObserver>
    );
  },
);

export default ResizableTextArea;
