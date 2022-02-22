import type { FC, ReactElement } from 'react';
import React, { cloneElement } from 'react';
import classNames from 'classnames';
import getInputCls from './utils/getInputCls';
import type { BaseInputProps } from './interface';
import { hasAddon, hasPrefixSuffix } from './utils/commonUtils';

const BaseInput: FC<BaseInputProps> = (props) => {
  const {
    inputElement,
    prefixCls,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
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

  // ================== Clear Icon ================== //
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

  // ================== Prefix & Suffix ================== //
  let element: ReactElement;
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
      !hasAddon(props) && className,
    );

    const suffixNode = (suffix || allowClear) && (
      <span className={`${prefixCls}-suffix`}>
        {getClearIcon()}
        {suffix}
      </span>
    );

    element = (
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
  } else {
    element = cloneElement(inputElement, {
      value,
    });
  }

  // ================== Addon ================== //
  if (hasAddon(props)) {
    const wrapperClassName = `${prefixCls}-group`;
    const addonClassName = `${wrapperClassName}-addon`;

    const mergedWrapperClassName = classNames(
      `${prefixCls}-wrapper`,
      wrapperClassName,
      {
        [`${wrapperClassName}-rtl`]: direction === 'rtl',
      },
    );

    const mergedGroupClassName = classNames(
      `${prefixCls}-group-wrapper`,
      {
        [`${prefixCls}-group-wrapper-rtl`]: direction === 'rtl',
      },
      className,
    );

    // Need another wrapper for changing display:table to display:inline-block
    // and put style prop in wrapper
    return (
      <span className={mergedGroupClassName} style={style}>
        <span className={mergedWrapperClassName}>
          {addonBefore && <span className={addonClassName}>{addonBefore}</span>}
          {cloneElement(element, { style: null })}
          {addonAfter && <span className={addonClassName}>{addonAfter}</span>}
        </span>
      </span>
    );
  }
  return element;
};

export default BaseInput;
