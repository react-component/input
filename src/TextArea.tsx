import { clsx } from 'clsx';
import React, { useEffect, useImperativeHandle, useRef } from 'react';
import type { HolderRef } from './BaseInput';
import BaseInput from './BaseInput';
import useCount from './hooks/useCount';
import useCountDisplay from './hooks/useCountDisplay';
import useCountExceed from './hooks/useCountExceed';
import useMergedValue from './hooks/useMergedValue';
import type {
  ResizableTextAreaRef,
  TextAreaProps,
  TextAreaRef,
} from './interface';
import ResizableTextArea from './ResizableTextArea';
import { resolveOnChange } from './utils/commonUtils';

const TextArea = React.forwardRef<TextAreaRef, TextAreaProps>(
  (
    {
      defaultValue,
      value: customValue,
      onFocus,
      onBlur,
      onChange,
      allowClear,
      maxLength,
      onCompositionStart,
      onCompositionEnd,
      suffix,
      prefixCls = 'rc-textarea',
      showCount,
      count,
      className,
      style,
      disabled,
      hidden,
      classNames,
      styles,
      onResize,
      onClear,
      onPressEnter,
      readOnly,
      autoSize,
      onKeyDown,
      ...rest
    },
    ref,
  ) => {
    const [focused, setFocused] = React.useState<boolean>(false);

    const compositionRef = React.useRef(false);

    const [textareaResized, setTextareaResized] = React.useState<
      boolean | null
    >(null);

    // =============================== Ref ================================
    const holderRef = useRef<HolderRef>(null);
    const resizableTextAreaRef = useRef<ResizableTextAreaRef>(null);
    const getTextArea = () => resizableTextAreaRef.current?.textArea!;

    const { setValue, formatValue } = useMergedValue(defaultValue, customValue);
    const countConfig = useCount(count, showCount);
    const { mergedMax, isOutOfRange, dataCount } = useCountDisplay({
      countConfig,
      value: formatValue,
      maxLength,
    });
    const getExceedValue = useCountExceed({
      countConfig,
      getTarget: () => resizableTextAreaRef.current?.textArea || null,
    });

    const focus = () => {
      getTextArea().focus();
    };

    useImperativeHandle(ref, () => ({
      resizableTextArea: resizableTextAreaRef.current!,
      focus,
      blur: () => {
        getTextArea().blur();
      },
      nativeElement: holderRef.current?.nativeElement || getTextArea(),
    }));

    useEffect(() => {
      setFocused((prev) => !disabled && prev);
    }, [disabled]);

    // ============================== Count ===============================
    // ============================== Change ==============================
    const triggerChange = (
      e:
        | React.ChangeEvent<HTMLTextAreaElement>
        | React.CompositionEvent<HTMLTextAreaElement>,
      currentValue: string,
    ) => {
      const cutValue = getExceedValue(currentValue, compositionRef.current);
      setValue(cutValue);

      resolveOnChange(e.currentTarget, e, onChange, cutValue);
    };

    // =========================== Value Update ===========================
    const onInternalCompositionStart: React.CompositionEventHandler<
      HTMLTextAreaElement
    > = (e) => {
      compositionRef.current = true;
      onCompositionStart?.(e);
    };

    const onInternalCompositionEnd: React.CompositionEventHandler<
      HTMLTextAreaElement
    > = (e) => {
      compositionRef.current = false;
      triggerChange(e, e.currentTarget.value);
      onCompositionEnd?.(e);
    };

    const onInternalChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      triggerChange(e, e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && onPressEnter && !e.nativeEvent.isComposing) {
        onPressEnter(e);
      }
      onKeyDown?.(e);
    };

    const handleFocus: React.FocusEventHandler<HTMLTextAreaElement> = (e) => {
      setFocused(true);
      onFocus?.(e);
    };

    const handleBlur: React.FocusEventHandler<HTMLTextAreaElement> = (e) => {
      setFocused(false);
      onBlur?.(e);
    };

    // ============================== Reset ===============================
    const handleReset = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      setValue('');
      focus();
      resolveOnChange(getTextArea(), e, onChange);
    };

    let suffixNode = suffix;
    if (countConfig.show) {
      suffixNode = (
        <>
          {suffixNode}
          <span
            className={clsx(`${prefixCls}-data-count`, classNames?.count)}
            style={styles?.count}
          >
            {dataCount}
          </span>
        </>
      );
    }

    const handleResize: TextAreaProps['onResize'] = (size) => {
      onResize?.(size);
      if (getTextArea()?.style.height) {
        setTextareaResized(true);
      }
    };

    const isPureTextArea = !autoSize && !showCount && !allowClear;

    return (
      <BaseInput
        ref={holderRef}
        value={formatValue}
        allowClear={allowClear}
        handleReset={handleReset}
        suffix={suffixNode}
        prefixCls={prefixCls}
        classNames={{
          ...classNames,
          affixWrapper: clsx(classNames?.affixWrapper, {
            [`${prefixCls}-show-count`]: showCount,
            [`${prefixCls}-textarea-allow-clear`]: allowClear,
          }),
        }}
        disabled={disabled}
        focused={focused}
        className={clsx(className, isOutOfRange && `${prefixCls}-out-of-range`)}
        style={{
          ...style,
          ...(textareaResized && !isPureTextArea ? { height: 'auto' } : {}),
        }}
        dataAttrs={
          typeof dataCount === 'string'
            ? {
                affixWrapper: {
                  'data-count': dataCount,
                },
              }
            : undefined
        }
        styles={styles}
        hidden={hidden}
        readOnly={readOnly}
        onClear={onClear}
      >
        <ResizableTextArea
          {...rest}
          autoSize={autoSize}
          maxLength={maxLength}
          onKeyDown={handleKeyDown}
          onChange={onInternalChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onCompositionStart={onInternalCompositionStart}
          onCompositionEnd={onInternalCompositionEnd}
          className={clsx(classNames?.textarea)}
          style={{ resize: style?.resize, ...styles?.textarea }}
          disabled={disabled}
          prefixCls={prefixCls}
          onResize={handleResize}
          ref={resizableTextAreaRef}
          readOnly={readOnly}
        />
      </BaseInput>
    );
  },
);

export default TextArea;
