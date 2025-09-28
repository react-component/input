import { clsx } from 'clsx';
import useControlledState from '@rc-component/util/lib/hooks/useControlledState';
import omit from '@rc-component/util/lib/omit';
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
import type { ChangeEventInfo, InputProps, InputRef } from './interface';
import type { InputFocusOptions } from './utils/commonUtils';
import { resolveOnChange, triggerFocus } from './utils/commonUtils';

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
    ...rest
  } = props;

  const [focused, setFocused] = useState<boolean>(false);
  const compositionRef = useRef(false);
  const keyLockRef = useRef(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const holderRef = useRef<HolderRef>(null);

  const focus = (option?: InputFocusOptions) => {
    if (inputRef.current) {
      triggerFocus(inputRef.current, option);
    }
  };

  // ====================== Value =======================
  const [value, setValue] = useControlledState(props.defaultValue, props.value);
  const formatValue =
    value === undefined || value === null ? '' : String(value);

  // =================== Select Range ===================
  const [selection, setSelection] = useState<
    [start: number, end: number] | null
  >(null);

  // ====================== Count =======================
  const countConfig = useCount(count, showCount);
  const mergedMax = countConfig.max || maxLength;
  const valueLength = countConfig.strategy(formatValue);

  const isOutOfRange = !!mergedMax && valueLength > mergedMax;

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
    let cutValue = currentValue;

    if (
      !compositionRef.current &&
      countConfig.exceedFormatter &&
      countConfig.max &&
      countConfig.strategy(currentValue) > countConfig.max
    ) {
      cutValue = countConfig.exceedFormatter(currentValue, {
        max: countConfig.max,
      });

      if (currentValue !== cutValue) {
        setSelection([
          inputRef.current?.selectionStart || 0,
          inputRef.current?.selectionEnd || 0,
        ]);
      }
    } else if (info.source === 'compositionEnd') {
      // Avoid triggering twice
      // https://github.com/ant-design/ant-design/issues/46587
      return;
    }
    setValue(cutValue);

    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, onChange, cutValue);
    }
  };

  useEffect(() => {
    if (selection) {
      inputRef.current?.setSelectionRange(...selection);
    }
  }, [selection]);

  const onInternalChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    triggerChange(e, e.target.value, {
      source: 'change',
    });
  };

  const onInternalCompositionEnd = (
    e: React.CompositionEvent<HTMLInputElement>,
  ) => {
    compositionRef.current = false;
    triggerChange(e, e.currentTarget.value, {
      source: 'compositionEnd',
    });
    onCompositionEnd?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
        onCompositionStart={(e) => {
          compositionRef.current = true;
          onCompositionStart?.(e);
        }}
        onCompositionEnd={onInternalCompositionEnd}
      />
    );
  };

  const getSuffix = () => {
    // Max length value
    const hasMaxLength = Number(mergedMax) > 0;

    if (suffix || countConfig.show) {
      const dataCount = countConfig.showFormatter
        ? countConfig.showFormatter({
            value: formatValue,
            count: valueLength,
            maxLength: mergedMax,
          })
        : `${valueLength}${hasMaxLength ? ` / ${mergedMax}` : ''}`;

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
      value={formatValue}
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
