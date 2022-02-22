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
    groupWrapperClassName,
    direction,
    disabled,
    readOnly,
    focused,
    allowClear,
    clearIcon,
    value,
    handleReset,
    hidden,
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

  let element: ReactElement = cloneElement(inputElement, {
    value,
    hidden,
  });

  // ================== Prefix & Suffix ================== //
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
      <span
        className={affixWrapperCls}
        style={style}
        hidden={!hasAddon(props) && hidden}
      >
        {prefix && <span className={`${prefixCls}-prefix`}>{prefix}</span>}
        {cloneElement(inputElement, {
          style: null,
          value,
          hidden: null,
          className: getInputCls(prefixCls, disabled),
        })}
        {suffixNode}
      </span>
    );
  }

  // ================== Addon ================== //
  if (hasAddon(props)) {
    const wrapperCls = `${prefixCls}-group`;
    const addonCls = `${wrapperCls}-addon`;

    const mergedWrapperClassName = classNames(
      `${prefixCls}-wrapper`,
      wrapperCls,
      {
        [`${wrapperCls}-rtl`]: direction === 'rtl',
      },
    );

    const mergedGroupClassName = classNames(
      `${prefixCls}-group-wrapper`,
      {
        [`${prefixCls}-group-wrapper-rtl`]: direction === 'rtl',
      },
      groupWrapperClassName,
      className,
    );

    // Need another wrapper for changing display:table to display:inline-block
    // and put style prop in wrapper
    return (
      <span className={mergedGroupClassName} style={style} hidden={hidden}>
        <span className={mergedWrapperClassName}>
          {addonBefore && <span className={addonCls}>{addonBefore}</span>}
          {cloneElement(element, { style: null, hidden: null })}
          {addonAfter && <span className={addonCls}>{addonAfter}</span>}
        </span>
      </span>
    );
  }
  return element;
};

export default BaseInput;
