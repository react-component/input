import type { FC, ReactElement } from 'react';
import React, { cloneElement, useRef } from 'react';
import classNames from 'classnames';
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
    groupClassName,
    wrapperClassName,
    disabled,
    readOnly,
    focused,
    triggerFocus,
    allowClear,
    value,
    handleReset,
    hidden,
    inputStyle,
    classes,
    dataAttrs,
  } = props;

  const containerRef = useRef<HTMLSpanElement>(null);

  const onInputClick: React.MouseEventHandler = (e) => {
    if (containerRef.current?.contains(e.target as Element)) {
      triggerFocus?.();
    }
  };

  // ================== Clear Icon ================== //
  const getClearIcon = () => {
    if (!allowClear) {
      return null;
    }
    const needClear = !disabled && !readOnly && value;
    const clearIconCls = `${prefixCls}-clear-icon`;
    const iconNode =
      typeof allowClear === 'object' && allowClear?.clearIcon
        ? allowClear.clearIcon
        : '✖';

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
        tabIndex={-1}
      >
        {iconNode}
      </span>
    );
  };

  let element: ReactElement = cloneElement(inputElement, {
    value,
    hidden,
    style: {
      ...inputElement.props?.style,
      ...inputStyle,
    },
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
        [`${affixWrapperPrefixCls}-input-with-clear-btn`]:
          suffix && allowClear && value,
      },
      !hasAddon(props) && className,
      affixWrapperClassName,
      classes?.affixWrapper,
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
        onClick={onInputClick}
        {...dataAttrs?.affixWrapper}
        ref={containerRef}
      >
        {prefix && <span className={`${prefixCls}-prefix`}>{prefix}</span>}
        {cloneElement(inputElement, {
          style: inputStyle ?? null,
          value,
          hidden: null,
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
      wrapperClassName,
      classes?.wrapper,
    );

    const mergedGroupClassName = classNames(
      `${prefixCls}-group-wrapper`,
      className,
      groupClassName,
      classes?.group,
    );

    // Need another wrapper for changing display:table to display:inline-block
    // and put style prop in wrapper
    return (
      <span className={mergedGroupClassName} style={style} hidden={hidden}>
        <span className={mergedWrapperClassName}>
          {addonBefore && <span className={addonCls}>{addonBefore}</span>}
          {cloneElement(element, { style: inputStyle ?? null, hidden: null })}
          {addonAfter && <span className={addonCls}>{addonAfter}</span>}
        </span>
      </span>
    );
  }
  return element;
};

export default BaseInput;
