import type { ChangeEvent, FC } from 'react';
import React, { useState } from 'react';
import BaseInput from 'rc-input';
import { fireEvent, render } from '@testing-library/react';

describe('BaseInput', () => {
  it('should render perfectly', () => {
    const { container } = render(
      <BaseInput prefixCls="rc-input" inputElement={<input />} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('prefix and suffix should render properly', () => {
    const { container } = render(
      <div>
        <BaseInput
          prefixCls="rc-input"
          inputElement={<input />}
          prefix="prefix"
        />
        <br />
        <br />
        <BaseInput
          prefixCls="rc-input"
          inputElement={<input />}
          suffix="suffix"
        />
      </div>,
    );
    expect(container).toMatchSnapshot();
  });

  it('addon should render properly', () => {
    const { container } = render(
      <div>
        <BaseInput
          prefixCls="rc-input"
          inputElement={<input />}
          addonBefore="addonBefore"
        />
        <br />
        <br />
        <BaseInput
          prefixCls="rc-input"
          inputElement={<input />}
          addonAfter="addonAfter"
        />
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
          allowClear
          clearIcon="✖"
          inputElement={
            <input onChange={handleChange} onBlur={onBlur} onFocus={onFocus} />
          }
          value={value}
          handleReset={handleReset}
        />
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
});
