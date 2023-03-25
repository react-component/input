import classNames from 'classnames';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import omit from 'rc-util/lib/omit';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import BaseInput from './BaseInput';
import type { InputProps, InputRef } from './interface';
import type { InputFocusOptions } from './utils/commonUtils';
import {
  fixControlledValue,
  resolveOnChange,
  triggerFocus,
} from './utils/commonUtils';

const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const {
    autoComplete,
    onChange,
    onFocus,
    onBlur,
    onPressEnter,
    onKeyDown,
    prefixCls = 'rc-input',
    disabled,
    htmlSize,
    className,
    maxLength,
    suffix,
    showCount,
    type = 'text',
    inputClassName,
    classes,
    ...rest
  } = props;

  const [value, setValue] = useMergedState(props.defaultValue, {
    value: props.value,
  });
  const [focused, setFocused] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const focus = (option?: InputFocusOptions) => {
    if (inputRef.current) {
      triggerFocus(inputRef.current, option);
    }
  };

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
  }));

  useEffect(() => {
    setFocused((prev) => (prev && disabled ? false : prev));
  }, [disabled]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.value === undefined) {
      setValue(e.target.value);
    }
    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, onChange);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onPressEnter && e.key === 'Enter') {
      onPressEnter(e);
    }
    onKeyDown?.(e);
  };

  const handleFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
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

  const getInputElement = () => {
    // Fix https://fb.me/react-unknown-prop
    const otherProps = omit(props as InputProps, [
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
      'affixWrapperClassName',
      'groupClassName',
      'inputClassName',
      'classes',
      'wrapperClassName',
      'htmlSize',
    ]);
    return (
      <input
        autoComplete={autoComplete}
        {...otherProps}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={classNames(
          prefixCls,
          {
            [`${prefixCls}-disabled`]: disabled,
          },
          inputClassName,
          classes?.input,
        )}
        ref={inputRef}
        size={htmlSize}
        type={type}
      />
    );
  };

  const getSuffix = () => {
    // Max length value
    const hasMaxLength = Number(maxLength) > 0;

    if (suffix || showCount) {
      const val = fixControlledValue(value);
      const valueLength = [...val].length;
      const dataCount =
        typeof showCount === 'object'
          ? showCount.formatter({ value: val, count: valueLength, maxLength })
          : `${valueLength}${hasMaxLength ? ` / ${maxLength}` : ''}`;

      return (
        <>
          {!!showCount && (
            <span
              className={classNames(`${prefixCls}-show-count-suffix`, {
                [`${prefixCls}-show-count-has-suffix`]: !!suffix,
              })}
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

  return (
    <BaseInput
      {...rest}
      prefixCls={prefixCls}
      className={className}
      inputElement={getInputElement()}
      handleReset={handleReset}
      value={fixControlledValue(value)}
      focused={focused}
      triggerFocus={focus}
      suffix={getSuffix()}
      disabled={disabled}
      classes={classes}
    />
  );
});

export default Input;
