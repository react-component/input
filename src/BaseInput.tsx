import clsx from 'classnames';
import type { FC, ReactElement } from 'react';
import React, { cloneElement, useRef } from 'react';
import DefaultCopyIcon from './DefaultCopyIcon';
import type { BaseInputProps } from './interface';
import { hasAddon, hasPrefixSuffix } from './utils/commonUtils';

const copyText = (text?: string): void => {
  if (!text) {
    return;
  }
  const textarea = document.createElement('textarea');
  textarea.setAttribute('readonly', 'readonly');
  textarea.innerHTML = text;
  document.body.appendChild(textarea);
  textarea.select();
  if (document.execCommand('copy')) {
    document.execCommand('copy');
  }
  document.body.removeChild(textarea);
};

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
    allowCopy,
    copyCallback,
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
  };

  let element: ReactElement = cloneElement(inputElement, {
    value,
    hidden,
    className:
      clsx(
        inputElement.props?.className,
        !hasPrefixSuffix(props) && !hasAddon(props) && className,
      ) || null,
    style: {
      ...inputElement.props?.style,
      ...(!hasPrefixSuffix(props) && !hasAddon(props) && !allowCopy
        ? style
        : {}),
    },
  });

  // ================== Prefix & Suffix ================== //
  if (hasPrefixSuffix(props)) {
    const affixWrapperPrefixCls = `${prefixCls}-affix-wrapper`;
    const affixWrapperCls = clsx(
      affixWrapperPrefixCls,
      {
        [`${affixWrapperPrefixCls}-disabled`]: disabled,
        [`${affixWrapperPrefixCls}-focused`]: focused,
        [`${affixWrapperPrefixCls}-readonly`]: readOnly,
        [`${affixWrapperPrefixCls}-input-with-clear-btn`]:
          suffix && allowClear && value,
      },
      !hasAddon(props) && className,
      classes?.affixWrapper,
    );

    const suffixNode = (suffix || allowClear) && (
      <span
        className={clsx(`${prefixCls}-suffix`, classNames?.suffix)}
        style={styles?.suffix}
      >
        {getClearIcon()}
        {suffix}
      </span>
    );

    element = (
      <span
        className={affixWrapperCls}
        style={!hasAddon(props) ? style : undefined}
        hidden={!hasAddon(props) && hidden}
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
        {cloneElement(inputElement, {
          value,
          hidden: null,
        })}
        {suffixNode}
      </span>
    );
  }

  const CopyIcon = React.createElement(
    'span',
    {
      onClick: () => {
        if (typeof copyCallback === 'function') {
          copyCallback(value, inputElement);
        } else {
          copyText(value?.toString());
        }
      },
    },
    DefaultCopyIcon,
  );

  // ================== Addon ================== //
  if (hasAddon(props)) {
    const wrapperCls = `${prefixCls}-group`;
    const addonCls = `${wrapperCls}-addon`;

    const mergedWrapperClassName = clsx(
      `${prefixCls}-wrapper`,
      wrapperCls,
      classes?.wrapper,
    );

    const mergedGroupClassName = clsx(
      `${prefixCls}-group-wrapper`,
      className,
      classes?.group,
    );

    // Need another wrapper for changing display:table to display:inline-block
    // and put style prop in wrapper
    return (
      <span className={mergedGroupClassName} style={style} hidden={hidden}>
        <span className={mergedWrapperClassName}>
          {addonBefore && <span className={addonCls}>{addonBefore}</span>}
          {cloneElement(element, {
            hidden: null,
          })}
          {addonAfter && <span className={addonCls}>{addonAfter}</span>}
          {allowCopy ? CopyIcon : null}
        </span>
      </span>
    );
  }
  return (
    <>
      {CopyIcon ? (
        <div
          style={{ display: 'flex', alignItems: 'center', ...(style || {}) }}
        >
          {element}
          {allowCopy ? CopyIcon : null}
        </div>
      ) : (
        element
      )}
    </>
  );
};

export default BaseInput;
