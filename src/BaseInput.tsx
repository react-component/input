import { clsx } from 'clsx';
import type { ReactElement, ReactNode } from 'react';
import React, { cloneElement, useRef } from 'react';
import type { BaseInputProps } from './interface';
import { hasAddon, hasPrefixSuffix } from './utils/commonUtils';

export interface HolderRef {
  /** Provider holder ref. Will return `null` if not wrap anything */
  nativeElement: HTMLElement | null;
}

const BaseInput = React.forwardRef<HolderRef, BaseInputProps>((props, ref) => {
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
    onClear,
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

  const hasAffix = hasPrefixSuffix(props);

  let element: ReactElement = cloneElement(inputElement as ReactElement<any>, {
    value,
    className:
      clsx(
        (inputElement as ReactElement<any>).props?.className,
        !hasAffix && classNames?.variant,
      ) || null,
  });

  // ======================== Ref ======================== //
  const groupRef = useRef<HTMLDivElement>(null);

  React.useImperativeHandle(ref, () => ({
    nativeElement: groupRef.current || containerRef.current,
  }));

  // ================== Prefix & Suffix ================== //
  if (hasAffix) {
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
        <button
          type="button"
          tabIndex={-1}
          onClick={(event) => {
            handleReset?.(event);
            onClear?.();
          }}
          // Do not trigger onBlur when clear input
          // https://github.com/ant-design/ant-design/issues/31200
          onMouseDown={(e) => e.preventDefault()}
          className={clsx(clearIconCls, {
            [`${clearIconCls}-hidden`]: !needClear,
            [`${clearIconCls}-has-suffix`]: !!suffix,
          })}
        >
          {iconNode}
        </button>
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
      classNames?.variant,
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
    const groupWrapperCls = `${wrapperCls}-wrapper`;

    const mergedWrapperClassName = clsx(
      `${prefixCls}-wrapper`,
      wrapperCls,
      classes?.wrapper,
      classNames?.wrapper,
    );

    const mergedGroupClassName = clsx(
      groupWrapperCls,
      {
        [`${groupWrapperCls}-disabled`]: disabled,
      },
      classes?.group,
      classNames?.groupWrapper,
    );

    // Need another wrapper for changing display:table to display:inline-block
    // and put style prop in wrapper
    element = (
      <GroupWrapperComponent className={mergedGroupClassName} ref={groupRef}>
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
  return React.cloneElement(element as ReactElement<any>, {
    className:
      clsx((element as ReactElement<any>).props?.className, className) || null,
    style: {
      ...(element as ReactElement<any>).props?.style,
      ...style,
    },
    hidden,
  });
});

export default BaseInput;
