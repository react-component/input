import clsx from 'classnames';
import type { FC, ReactElement, ReactNode } from 'react';
import React, { cloneElement, useRef } from 'react';
import type { BaseInputProps } from './interface';
import { hasAddon, hasPrefixSuffix } from './utils/commonUtils';

const BaseInput: FC<BaseInputProps> = (props) => {
  const {
    inputElement: inputEl,
    children,
    prefixCls,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    className,
    style,
    disabled,
    readOnly,
    focused,
    triggerFocus,
    allowClear,
    value,
    handleReset,
    hidden,
    classes,
    classNames,
    dataAttrs,
    styles,
    components,
  } = props;

  const inputElement = children ?? inputEl;

  const AffixWrapperComponent = components?.affixWrapper || 'span';
  const GroupWrapperComponent = components?.groupWrapper || 'span';
  const WrapperComponent = components?.wrapper || 'span';
  const GroupAddonComponent = components?.groupAddon || 'span';

  const containerRef = useRef<HTMLDivElement>(null);

  const onInputClick: React.MouseEventHandler = (e) => {
    if (containerRef.current?.contains(e.target as Element)) {
      triggerFocus?.();
    }
  };

  let element: ReactElement = cloneElement(inputElement, {
    value,
  });

  // ================== Prefix & Suffix ================== //
  if (hasPrefixSuffix(props)) {
    // ================== Clear Icon ================== //
    let clearIcon: ReactNode = null;
    if (allowClear) {
      const needClear = !disabled && !readOnly && value;
      const clearIconCls = `${prefixCls}-clear-icon`;
      const iconNode =
        typeof allowClear === 'object' && allowClear?.clearIcon
          ? allowClear.clearIcon
          : '✖';

      clearIcon = (
        <span
          onClick={handleReset}
          // Do not trigger onBlur when clear input
          // https://github.com/ant-design/ant-design/issues/31200
          onMouseDown={(e) => e.preventDefault()}
          className={clsx(clearIconCls, {
            [`${clearIconCls}-hidden`]: !needClear,
            [`${clearIconCls}-has-suffix`]: !!suffix,
          })}
          role="button"
          tabIndex={-1}
        >
          {iconNode}
        </span>
      );
    }

    const affixWrapperPrefixCls = `${prefixCls}-affix-wrapper`;
    const affixWrapperCls = clsx(
      affixWrapperPrefixCls,
      {
        [`${prefixCls}-disabled`]: disabled,
        [`${affixWrapperPrefixCls}-disabled`]: disabled, // Not used, but keep it
        [`${affixWrapperPrefixCls}-focused`]: focused, // Not used, but keep it
        [`${affixWrapperPrefixCls}-readonly`]: readOnly,
        [`${affixWrapperPrefixCls}-input-with-clear-btn`]:
          suffix && allowClear && value,
      },
      classes?.affixWrapper,
      classNames?.affixWrapper,
    );

    const suffixNode = (suffix || allowClear) && (
      <span
        className={clsx(`${prefixCls}-suffix`, classNames?.suffix)}
        style={styles?.suffix}
      >
        {clearIcon}
        {suffix}
      </span>
    );

    element = (
      <AffixWrapperComponent
        className={affixWrapperCls}
        style={styles?.affixWrapper}
        onClick={onInputClick}
        {...dataAttrs?.affixWrapper}
        ref={containerRef}
      >
        {prefix && (
          <span
            className={clsx(`${prefixCls}-prefix`, classNames?.prefix)}
            style={styles?.prefix}
          >
            {prefix}
          </span>
        )}
        {element}
        {suffixNode}
      </AffixWrapperComponent>
    );
  }

  // ================== Addon ================== //
  if (hasAddon(props)) {
    const wrapperCls = `${prefixCls}-group`;
    const addonCls = `${wrapperCls}-addon`;

    const mergedWrapperClassName = clsx(
      `${prefixCls}-wrapper`,
      wrapperCls,
      classes?.wrapper,
      classNames?.wrapper,
    );

    const mergedGroupClassName = clsx(
      `${prefixCls}-group-wrapper`,
      classes?.group,
      classNames?.groupWrapper,
    );

    // Need another wrapper for changing display:table to display:inline-block
    // and put style prop in wrapper
    element = (
      <GroupWrapperComponent className={mergedGroupClassName}>
        <WrapperComponent className={mergedWrapperClassName}>
          {addonBefore && (
            <GroupAddonComponent className={addonCls}>
              {addonBefore}
            </GroupAddonComponent>
          )}
          {element}
          {addonAfter && (
            <GroupAddonComponent className={addonCls}>
              {addonAfter}
            </GroupAddonComponent>
          )}
        </WrapperComponent>
      </GroupWrapperComponent>
    );
  }

  // `className` and `style` are always on the root element
  return React.cloneElement(element, {
    className: clsx(element.props?.className, className) || null,
    style: {
      ...element.props?.style,
      ...style,
    },
    hidden,
  });
};

export default BaseInput;
