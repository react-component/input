import type { FC } from 'react';
import React, { cloneElement } from 'react';
import classNames from 'classnames';
import getInputCls from './utils/getInputCls';
import type { BaseInputProps } from './interface';
import { hasPrefixSuffix } from './utils/commonUtils';

const BaseInput: FC<BaseInputProps> = (props) => {
  const {
    inputElement,
    prefixCls,
    prefix,
    suffix,
    className,
    style,
    affixWrapperClassName,
    direction,
    disabled,
    readOnly,
    focused,
    allowClear,
    clearIcon,
    value,
    handleReset,
  } = props;

  // Clear Icon
  const getClearIcon = () => {
    if (!allowClear) {
      return null;
    }
    const needClear = !disabled && !readOnly && value;
    const clearIconCls = `${prefixCls}-clear-icon`;
    return (
      <span
        onClick={handleReset}
        // Do not trigger onBlur when clear input
        // https://github.com/ant-design/ant-design/issues/31200
        onMouseDown={(e) => e.preventDefault()}
        className={classNames(clearIconCls, {
          [`${clearIconCls}-hidden`]: !needClear,
          [`${clearIconCls}-has-suffix`]: !!suffix,
        })}
        role="button"
      >
        {clearIcon}
      </span>
    );
  };

  if (hasPrefixSuffix(props)) {
    const affixWrapperPrefixCls = `${prefixCls}-affix-wrapper`;
    const affixWrapperCls = classNames(
      affixWrapperPrefixCls,
      {
        [`${affixWrapperPrefixCls}-disabled`]: disabled,
        [`${affixWrapperPrefixCls}-focused`]: focused,
        [`${affixWrapperPrefixCls}-readonly`]: readOnly,
        [`${affixWrapperPrefixCls}-rtl`]: direction === 'rtl',
        [`${affixWrapperPrefixCls}-input-with-clear-btn`]:
          suffix && allowClear && value,
      },
      affixWrapperClassName,
      className,
    );

    const suffixNode = (suffix || allowClear) && (
      <span className={`${prefixCls}-suffix`}>
        {getClearIcon()}
        {suffix}
      </span>
    );

    return (
      <span className={affixWrapperCls} style={style}>
        {prefix && <span className={`${prefixCls}-prefix`}>{prefix}</span>}
        {cloneElement(inputElement, {
          style: null,
          value,
          className: getInputCls(prefixCls, disabled),
        })}
        {suffixNode}
      </span>
    );
  }

  return cloneElement(inputElement, {
    value,
  });
};

export default BaseInput;
