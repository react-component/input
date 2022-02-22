import type { FC } from 'react';
import React, { useRef, useState } from 'react';
import type { BaseInputProps, InputProps } from './interface';
import BaseInput from './BaseInput';
import omit from 'rc-util/lib/omit';
import type { InputFocusOptions } from './utils/commonUtils';
import {
  fixControlledValue,
  resolveOnChange,
  triggerFocus,
} from './utils/commonUtils';
import classNames from 'classnames';
import useMergedState from 'rc-util/lib/hooks/useMergedState';

const Input: FC<InputProps> = (props) => {
  const {
    autoComplete,
    onChange,
    onFocus,
    onBlur,
    onPressEnter,
    onKeyDown,
    prefixCls,
    disabled,
    htmlSize,
    className,
    maxLength,
    suffix,
    showCount,
    ...rest
  } = props;

  const [value, setValue] = useMergedState(props.defaultValue, {
    value: props.value,
  });
  const [focused, setFocused] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, onChange);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onPressEnter && e.code === 'Enter') {
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

  const focus = (option?: InputFocusOptions) => {
    if (inputRef.current) {
      triggerFocus(inputRef.current, option);
    }
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
    const otherProps = omit(props as InputProps & { inputType: any }, [
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
      'inputType',
      'showCount',
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
          {
            [`${prefixCls}-disabled`]: disabled,
          },
          className,
        )}
        ref={inputRef}
        size={htmlSize}
      />
    );
  };

  const getSuffix = () => {
    // Max length value
    const hasMaxLength = Number(maxLength) > 0;

    if (suffix || showCount) {
      const valueLength = [...fixControlledValue(value)].length;
      const dataCount =
        typeof showCount === 'object'
          ? showCount?.formatter({ count: valueLength, maxLength })
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
      suffix={getSuffix()}
    />
  );
};

export default Input;
