import { render } from '@testing-library/react';
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
