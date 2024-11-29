import { fireEvent, render } from '@testing-library/react';
import type { ChangeEvent, FC } from 'react';
import React, { useState } from 'react';
import BaseInput, { type HolderRef } from '../src/BaseInput';

describe('BaseInput', () => {
  it('should render perfectly', () => {
    const { container } = render(
      <BaseInput prefixCls="rc-input">
        <input />
      </BaseInput>,
    );
    expect(container).toMatchSnapshot();
  });

  it('prefix and suffix should render properly', () => {
    const { container } = render(
      <div>
        <BaseInput prefixCls="rc-input" prefix="prefix">
          <input />
        </BaseInput>
        <br />
        <br />
        <BaseInput prefixCls="rc-input" suffix="suffix">
          <input />
        </BaseInput>
      </div>,
    );
    expect(container).toMatchSnapshot();
  });

  it('addon should render properly', () => {
    const { container } = render(
      <div>
        <BaseInput prefixCls="rc-input" addonBefore="addonBefore">
          <input />
        </BaseInput>
        <br />
        <br />
        <BaseInput prefixCls="rc-input" addonAfter="addonAfter">
          <input />
        </BaseInput>
      </div>,
    );
    expect(container).toMatchSnapshot();
  });

  it('allowClear should work', () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const onFocus = jest.fn();

    const Demo: FC = () => {
      const [value, setValue] = useState<string>('');

      const handleReset = () => {
        setValue('');
      };

      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange();
        setValue(e.target.value);
      };

      return (
        <BaseInput
          prefixCls="rc-input"
          allowClear={{ clearIcon: '✖' }}
          value={value}
          handleReset={handleReset}
        >
          <input onChange={handleChange} onBlur={onBlur} onFocus={onFocus} />
        </BaseInput>
      );
    };

    const { container } = render(<Demo />);

    const inputEl = container.querySelector('input');
    fireEvent.focus(inputEl!);
    expect(onFocus).toHaveBeenCalledTimes(1);

    fireEvent.change(inputEl!, { target: { value: 'some text' } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(inputEl!.value).toBe('some text');

    const clearIcon = container.querySelector('.rc-input-clear-icon');
    fireEvent.mouseDown(clearIcon!);
    fireEvent.click(clearIcon!);
    fireEvent.mouseUp(clearIcon!);
    expect(onBlur).not.toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(inputEl!.value).toBe('');
  });

  it('should display clearIcon correctly', () => {
    const { container, rerender } = render(
      <BaseInput prefixCls="rc-input" allowClear>
        <input />
      </BaseInput>,
    );
    const clearIcon = container.querySelector('.rc-input-clear-icon');
    expect(clearIcon?.innerHTML).toBe('✖');
    rerender(
      <BaseInput prefixCls="rc-input" allowClear={{ clearIcon: 'clear' }}>
        <input />
      </BaseInput>,
    );
    expect(clearIcon?.innerHTML).toBe('clear');
  });

  it('should focus input when click prefix', () => {
    const inputRef = React.createRef<HTMLInputElement>();
    const { container } = render(
      <BaseInput
        prefixCls="rc-input"
        triggerFocus={() => inputRef.current?.focus()}
        prefix="$"
      >
        <input ref={inputRef} />
      </BaseInput>,
    );
    fireEvent.click(container.querySelector('.rc-input-affix-wrapper')!);
    expect(document.activeElement).toBe(container.querySelector('input'));
  });

  it('should support data-*', () => {
    const { container } = render(
      <BaseInput
        prefixCls="rc-input"
        prefix="prefix"
        dataAttrs={{
          affixWrapper: {
            'data-test': 'test',
          },
        }}
      >
        <input />
      </BaseInput>,
    );
    expect(
      container
        .querySelector('.rc-input-affix-wrapper')
        ?.getAttribute('data-test'),
    ).toBe('test');
  });

  it('should apply className to inputElement', () => {
    const { container } = render(
      <BaseInput prefixCls="rc-input" className="test-base">
        <input className="test" />
      </BaseInput>,
    );
    expect(container.querySelector('.test-base')).toBeTruthy();
    expect(container.querySelector('.test')).toBeTruthy();
  });

  it('should not pass className to inputElement when has addon', () => {
    const { container } = render(
      <BaseInput prefixCls="rc-input" className="test-base" addonBefore="addon">
        <input className="test" />
      </BaseInput>,
    );
    expect(
      container.querySelector('input')?.classList.contains('test'),
    ).toBeTruthy();
    expect(
      container.querySelector('input')?.classList.contains('test-base'),
    ).toBeFalsy();
  });

  it('should correct render with prefix and addon', () => {
    const { container } = render(
      <BaseInput prefixCls="rc-input" prefix="prefix" addonBefore="addon">
        <input />
      </BaseInput>,
    );
    expect(container).toMatchSnapshot();
  });

  it('support use div as basic element', () => {
    const { container } = render(
      <BaseInput
        prefixCls="rc-input"
        prefix="prefix"
        addonBefore="addon"
        components={{
          affixWrapper: 'div',
          groupWrapper: 'div',
          wrapper: 'div',
          groupAddon: 'div',
        }}
      >
        <input />
      </BaseInput>,
    );
    expect(container).toMatchSnapshot();
  });

  it('styles should work', () => {
    const container = render(
      <BaseInput
        prefixCls="rc-input"
        prefix="prefix"
        addonBefore="addon"
        styles={{
          affixWrapper: {
            color: 'red',
          },
          prefix: {
            color: 'blue',
          },
        }}
      >
        <input />
      </BaseInput>,
    );

    expect(
      container.container.querySelector<HTMLSpanElement>(
        '.rc-input-affix-wrapper',
      )?.style.color,
    ).toBe('red');
    expect(
      container.container.querySelector<HTMLSpanElement>('.rc-input-prefix')
        ?.style.color,
    ).toBe('blue');
  });

  it('with addon and disabled', () => {
    const { container } = render(
      <BaseInput prefixCls="rc-input" addonBefore="addon" disabled>
        <input />
      </BaseInput>,
    );

    expect(container.firstChild).toHaveClass('rc-input-group-wrapper-disabled');
  });

  it('variant cls', () => {
    const { container, rerender } = render(
      <BaseInput
        prefixCls="rc-input"
        prefix="$"
        classNames={{ variant: 'test-variant' }}
        disabled
      >
        <input />
      </BaseInput>,
    );

    expect(container.querySelector('.rc-input-affix-wrapper')).toHaveClass(
      'test-variant',
    );
    expect(container.querySelector('input')).not.toHaveClass('test-variant');

    rerender(
      <BaseInput
        prefixCls="rc-input"
        classNames={{ variant: 'test-variant' }}
        disabled
      >
        <input />
      </BaseInput>,
    );

    expect(container.querySelector('.rc-input-affix-wrapper')).toBeFalsy();
    expect(container.querySelector('input')).toHaveClass('test-variant');
  });

  describe('ref', () => {
    it('prefix', () => {
      const holderRef = React.createRef<HolderRef>();
      const { container } = render(
        <BaseInput prefixCls="rc-input" prefix="prefix" ref={holderRef}>
          <input />
        </BaseInput>,
      );
      expect(holderRef.current?.nativeElement).toBe(
        container.querySelector('.rc-input-affix-wrapper'),
      );
    });

    it('addon', () => {
      const holderRef = React.createRef<HolderRef>();
      const { container } = render(
        <BaseInput prefixCls="rc-input" addonAfter="after" ref={holderRef}>
          <input />
        </BaseInput>,
      );

      expect(holderRef.current?.nativeElement).toBe(
        container.querySelector('.rc-input-group-wrapper'),
      );
    });

    it('mix', () => {
      const holderRef = React.createRef<HolderRef>();
      const { container } = render(
        <BaseInput
          prefixCls="rc-input"
          suffix="suffix"
          addonAfter="after"
          ref={holderRef}
        >
          <input />
        </BaseInput>,
      );

      expect(holderRef.current?.nativeElement).toBe(
        container.querySelector('.rc-input-group-wrapper'),
      );
    });

    it('support onClear', () => {
      const onClear = jest.fn();
      const { container } = render(
        <BaseInput prefixCls="rc-input" onClear={onClear} allowClear>
          <input defaultValue="test" />
        </BaseInput>,
      );
      fireEvent.click(
        container.querySelector<HTMLSpanElement>('.rc-input-clear-icon')!,
      );
      expect(onClear).toHaveBeenCalled();
    });
  });
});
