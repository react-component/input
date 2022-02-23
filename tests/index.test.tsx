import { fireEvent, render } from '@testing-library/react';
import Input from 'rc-input';
import React from 'react';

describe('Input', () => {
  it('should support maxLength', () => {
    const { container } = render(<Input prefixCls="rc-input" maxLength={3} />);
    expect(container).toMatchSnapshot();
  });

  it('not crash when value is number', () => {
    const { container } = render(<Input suffix="Bamboo" value={1} />);
    expect(container).toBeTruthy();
  });
});

describe('should support showCount', () => {
  it('maxLength', () => {
    const { container } = render(
      <Input prefixCls="rc-input" maxLength={5} showCount value="12345" />,
    );
    expect(container.querySelector('input')?.value).toBe('12345');
    expect(
      container.querySelector('.rc-input-show-count-suffix')?.innerHTML,
    ).toBe('5 / 5');
  });

  it('control exceed maxLength', () => {
    const { container } = render(
      <Input prefixCls="rc-input" maxLength={5} showCount value="12345678" />,
    );
    expect(container.querySelector('input')?.value).toBe('12345678');
    expect(
      container.querySelector('.rc-input-show-count-suffix')?.innerHTML,
    ).toBe('8 / 5');
  });

  describe('emoji', () => {
    it('should minimize value between emoji length and maxLength', () => {
      const { container } = render(
        <Input prefixCls="rc-input" maxLength={1} showCount value="👀" />,
      );
      expect(container.querySelector('input')?.value).toBe('👀');
      expect(
        container.querySelector('.rc-input-show-count-suffix')?.innerHTML,
      ).toBe('1 / 1');

      const { container: container1 } = render(
        <Input prefixCls="rc-input" maxLength={2} showCount value="👀" />,
      );
      expect(
        container1.querySelector('.rc-input-show-count-suffix')?.innerHTML,
      ).toBe('1 / 2');
    });

    it('slice emoji', () => {
      const { container } = render(
        <Input prefixCls="rc-input" maxLength={5} showCount value="1234😂" />,
      );
      expect(container.querySelector('input')?.value).toBe('1234😂');
      expect(
        container.querySelector('.rc-input-show-count-suffix')?.innerHTML,
      ).toBe('5 / 5');
    });
  });

  it('count formatter', () => {
    const { container } = render(
      <Input
        prefixCls="rc-input"
        maxLength={5}
        showCount={{
          formatter: ({ count, maxLength }) => `${count}, ${maxLength}`,
        }}
        value="12345"
      />,
    );
    expect(container.querySelector('input')?.value).toBe('12345');
    expect(
      container.querySelector('.rc-input-show-count-suffix')?.innerHTML,
    ).toBe('5, 5');
  });
});

describe('Input allowClear', () => {
  it('should change type when click', () => {
    const { container } = render(<Input prefixCls="rc-input" allowClear />);
    const inputEl = container.querySelector('input')!;
    fireEvent.change(inputEl, { target: { value: '111' } });
    expect(inputEl.value).toEqual('111');
    expect(container).toMatchSnapshot();
    fireEvent.click(container.querySelector('.rc-input-clear-icon')!);
    expect(container).toMatchSnapshot();
    expect(inputEl.value).toEqual('');
  });

  it('should not show icon if value is undefined or empty string', () => {
    const containers = [undefined, ''].map(
      (val) =>
        render(<Input prefixCls="rc-input" allowClear value={val} />).container,
    );
    containers.forEach((container) => {
      expect(container.querySelector('input')?.value).toEqual('');
      expect(
        container.querySelector('.rc-input-clear-icon-hidden'),
      ).toBeTruthy();
      expect(container).toMatchSnapshot();
    });
  });

  it('should not show icon if defaultValue is undefined or empty string', () => {
    const containers = [undefined, ''].map(
      (val) =>
        render(<Input prefixCls="rc-input" allowClear defaultValue={val} />)
          .container,
    );
    containers.forEach((container) => {
      expect(container.querySelector('input')?.value).toEqual('');
      expect(
        container.querySelector('.rc-input-clear-icon-hidden'),
      ).toBeTruthy();
      expect(container).toMatchSnapshot();
    });
  });

  it('should trigger event correctly', () => {
    let argumentEventObject;
    let argumentEventObjectValue;
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      argumentEventObject = e;
      argumentEventObjectValue = e.target.value;
    };
    const { container } = render(
      <Input
        prefixCls="rc-input"
        allowClear
        defaultValue="111"
        onChange={onChange}
      />,
    );
    fireEvent.click(container.querySelector('.rc-input-clear-icon')!);
    expect(argumentEventObject).toHaveProperty('type', 'click');
    expect(argumentEventObjectValue).toBe('');
    expect(container.querySelector('input')?.value).toBe('');
  });

  it('should trigger event correctly on controlled mode', () => {
    let argumentEventObject;
    let argumentEventObjectValue;
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      argumentEventObject = e;
      argumentEventObjectValue = e.target.value;
    };
    const { container } = render(
      <Input prefixCls="rc-input" allowClear value="111" onChange={onChange} />,
    );
    fireEvent.click(container.querySelector('.rc-input-clear-icon')!);
    expect(argumentEventObject).toHaveProperty('type', 'click');
    expect(argumentEventObjectValue).toBe('');
    expect(container.querySelector('input')?.value).toBe('111');
  });

  ['disabled', 'readOnly'].forEach((prop) => {
    it(`should not support allowClear when it is ${prop}`, () => {
      const { container } = render(
        <Input
          prefixCls="rc-input"
          allowClear
          defaultValue="111"
          {...{ [prop]: true }}
        />,
      );
      expect(
        container.querySelector('.rc-input-clear-icon-hidden'),
      ).toBeTruthy();
    });
  });
});
