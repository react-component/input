import type { ChangeEvent, FC } from 'react';
import React, { useState } from 'react';
import BaseInput from 'rc-input';
import { fireEvent, render, screen } from '@testing-library/react';

describe('BaseInput', () => {
  it('prefix and suffix should work', () => {
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

  it('allowClear should work', () => {
    const onChange = jest.fn();

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
          inputElement={<input onChange={handleChange} />}
          value={value}
          handleReset={handleReset}
        />
      );
    };

    const { container } = render(<Demo />);

    const inputEl = container.querySelector('input');
    fireEvent.change(inputEl!, { target: { value: 'some text' } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(inputEl!.value).toBe('some text');

    const clearIcon = container.querySelector('.rc-input-clear-icon');
    fireEvent.click(clearIcon!);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(inputEl!.value).toBe('');
  });
});
