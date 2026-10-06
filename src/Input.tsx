import { clsx } from 'clsx';
import { omit, triggerFocus, type InputFocusOptions } from '@rc-component/util';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import type { HolderRef } from './BaseInput';
import BaseInput from './BaseInput';
import useCount from './hooks/useCount';
import useCountDisplay from './hooks/useCountDisplay';
import useCountExceed from './hooks/useCountExceed';
import useMergedValue from './hooks/useMergedValue';
import useMask from './hooks/useMask';
import type { ChangeEventInfo, InputProps, InputRef } from './interface';
import { resolveOnChange } from './utils/commonUtils';

const maskInputTypes = ['text', 'search', 'tel', 'url', 'password'];

const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const {
    autoComplete,
    onChange,
    onFocus,
    onBlur,
    onPressEnter,
    onKeyDown,
    onKeyUp,
    prefixCls = 'rc-input',
    disabled,
    htmlSize,
    className,
    maxLength,
    suffix,
    showCount,
    count,
    type = 'text',
    classes,
    classNames,
    styles,
    onCompositionStart,
    onCompositionEnd,
    onBeforeInput,
    onSelect,
    mask,
    maskDefinitions,
    maskPlaceholder,
    ...rest
  } = props;

  const [focused, setFocused] = useState<boolean>(false);
  const compositionRef = useRef(false);
  const keyLockRef = useRef(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const holderRef = useRef<HolderRef>(null);
  const compositionEndValueRef = useRef<string>(undefined);

  const focus = (option?: InputFocusOptions) => {
    if (inputRef.current) {
      triggerFocus(inputRef.current, option);
    }
  };

  // ====================== Value =======================
  const { setValue, formatValue } = useMergedValue(
    props.defaultValue,
    props.value,
  );

  const maskConfig = useMask({
    mask: maskInputTypes.includes(type) ? mask : undefined,
    maskDefinitions,
    maskPlaceholder,
    value: formatValue,
    focused: focused && !disabled && !props.readOnly,
    isComposing: compositionRef.current,
    inputRef,
    maxLength,
  });

  const countConfig = useCount(count, showCount);
  const { isOutOfRange, dataCount } = useCountDisplay({
    countConfig,
    value: maskConfig.hasMask ? maskConfig.displayValue : formatValue,
    maxLength,
  });
  const getExceedValue = useCountExceed({
    countConfig,
    getTarget: () => inputRef.current,
  });

  // ======================= Ref ========================
  useImperativeHandle(ref, () => ({
    focus,
    blur: () => {
      inputRef.current?.blur();
    },
    setSelectionRange: (
      start: number,
      end: number,
      direction?: 'forward' | 'backward' | 'none',
    ) => {
      inputRef.current?.setSelectionRange(start, end, direction);
    },
    select: () => {
      inputRef.current?.select();
    },
    input: inputRef.current,
    nativeElement: holderRef.current?.nativeElement || inputRef.current,
  }));

  useEffect(() => {
    if (keyLockRef.current) {
      keyLockRef.current = false;
    }
    setFocused((prev) => (prev && disabled ? false : prev));
  }, [disabled]);

  const triggerChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.CompositionEvent<HTMLInputElement>,
    currentValue: string,
    info: ChangeEventInfo,
  ) => {
    const nextValue =
      maskConfig.hasMask && !compositionRef.current
        ? maskConfig.getMaskedValue(
            currentValue,
            (e.nativeEvent as InputEvent).inputType,
            // Apply `count.exceedFormatter` to the formatted value, keeping the mask caret.
            (value) => getExceedValue(value, false, false),
          )
        : getExceedValue(currentValue, compositionRef.current);

    if (info.source === 'compositionEnd' && currentValue === nextValue) {
      // Avoid triggering twice
      // https://github.com/ant-design/ant-design/issues/46587
      return nextValue;
    }
    if (
      maskConfig.hasMask &&
      !compositionRef.current &&
      nextValue === (maskConfig.hasInput ? maskConfig.displayValue : '')
    ) {
      return nextValue;
    }
    setValue(nextValue);

    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, onChange, nextValue);
    }
    return nextValue;
  };

  const onInternalChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (
      maskConfig.hasMask &&
      compositionEndValueRef.current === e.target.value
    ) {
      compositionEndValueRef.current = undefined;
      return;
    }
    compositionEndValueRef.current = undefined;
    triggerChange(e, e.target.value, {
      source: 'change',
    });
  };

  const onInternalCompositionEnd = (
    e: React.CompositionEvent<HTMLInputElement>,
  ) => {
    compositionRef.current = false;
    const nextValue = triggerChange(e, e.currentTarget.value, {
      source: 'compositionEnd',
    });
    if (maskConfig.hasMask) {
      compositionEndValueRef.current = nextValue;
    }
    onCompositionEnd?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    compositionEndValueRef.current = undefined;
    if (maskConfig.hasMask) {
      maskConfig.recordSelection(
        e.key === 'Backspace'
          ? 'backward'
          : e.key === 'Delete'
            ? 'forward'
            : '',
      );
    }
    if (
      onPressEnter &&
      e.key === 'Enter' &&
      !keyLockRef.current &&
      !e.nativeEvent.isComposing
    ) {
      keyLockRef.current = true;
      onPressEnter(e);
    }
    onKeyDown?.(e);
  };
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      keyLockRef.current = false;
    }
    onKeyUp?.(e);
  };

  const handleFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (maskConfig.hasMask && !maskConfig.hasInput) {
      maskConfig.reset();
    }
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (keyLockRef.current) {
      keyLockRef.current = false;
    }
    setFocused(false);
    onBlur?.(e);
  };

  const handleReset = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    compositionEndValueRef.current = undefined;
    maskConfig.reset();
    setValue('');
    focus();
    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, onChange);
    }
  };

  // ====================== Input =======================
  const outOfRangeCls = isOutOfRange && `${prefixCls}-out-of-range`;

  const getInputElement = () => {
    // Fix https://fb.me/react-unknown-prop
    const otherProps = omit(
      props as Omit<InputProps, 'value'> & {
        value?: React.InputHTMLAttributes<HTMLInputElement>['value'];
      },
      [
        'prefixCls',
        'onPressEnter',
        'addonBefore',
        'addonAfter',
        'prefix',
        'suffix',
        'allowClear',
        // Input elements must be either controlled or uncontrolled,
        // specify either the value prop, or the defaultValue prop, but not both.
        'defaultValue',
        'showCount',
        'count',
        'classes',
        'htmlSize',
        'styles',
        'classNames',
        'onClear',
        'mask',
        'maskDefinitions',
        'maskPlaceholder',
      ],
    );
    return (
      <input
        autoComplete={autoComplete}
        {...otherProps}
        onChange={onInternalChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onBeforeInput={(e) => {
          maskConfig.recordSelection();
          onBeforeInput?.(e);
        }}
        onSelect={(e) => {
          maskConfig.recordSelection();
          onSelect?.(e);
        }}
        className={clsx(
          prefixCls,
          {
            [`${prefixCls}-disabled`]: disabled,
          },
          classNames?.input,
        )}
        style={styles?.input}
        ref={inputRef}
        size={htmlSize}
        type={type}
        maxLength={maskConfig.hasMask ? undefined : maxLength}
        onCompositionStart={(e) => {
          maskConfig.recordSelection();
          compositionRef.current = true;
          onCompositionStart?.(e);
        }}
        onCompositionEnd={onInternalCompositionEnd}
      />
    );
  };

  const getSuffix = () => {
    // Max length value
    if (suffix || countConfig.show) {
      return (
        <>
          {countConfig.show && (
            <span
              className={clsx(
                `${prefixCls}-show-count-suffix`,
                {
                  [`${prefixCls}-show-count-has-suffix`]: !!suffix,
                },
                classNames?.count,
              )}
              style={{
                ...styles?.count,
              }}
            >
              {dataCount}
            </span>
          )}
          {suffix}
        </>
      );
    }
    return null;
  };

  // ====================== Render ======================
  return (
    <BaseInput
      {...rest}
      prefixCls={prefixCls}
      className={clsx(className, outOfRangeCls)}
      handleReset={handleReset}
      value={maskConfig.displayValue}
      allowClear={
        maskConfig.hasMask && !maskConfig.hasInput && rest.allowClear
          ? {
              ...(typeof rest.allowClear === 'object' ? rest.allowClear : {}),
              disabled: true,
            }
          : rest.allowClear
      }
      focused={focused}
      triggerFocus={focus}
      suffix={getSuffix()}
      disabled={disabled}
      classes={classes}
      classNames={classNames}
      styles={styles}
      ref={holderRef}
    >
      {getInputElement()}
    </BaseInput>
  );
});

export default Input;
