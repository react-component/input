import { render } from '@testing-library/react';
import React from 'react';
import { TextArea } from '../src';

describe('should support showCount', () => {
  it('maxLength', () => {
    const { container } = render(
      <TextArea maxLength={5} showCount value="12345" />,
    );
    expect(container.querySelector('textarea')?.value).toBe('12345');
    expect(
      container
        .querySelector('.rc-textarea-show-count')
        ?.getAttribute('data-count'),
    ).toBe('5 / 5');
    expect(container.querySelector('.rc-textarea-data-count')?.innerHTML).toBe(
      '5 / 5',
    );
  });

  it('control exceed maxLength', () => {
    const { container } = render(
      <TextArea maxLength={5} showCount value="12345678" />,
    );
    expect(container.querySelector('textarea')?.value).toBe('12345678');
    expect(
      container
        .querySelector('.rc-textarea-show-count')
        ?.getAttribute('data-count'),
    ).toBe('8 / 5');
    expect(container.querySelector('.rc-textarea-data-count')?.innerHTML).toBe(
      '8 / 5',
    );
  });

  it('should support object', () => {
    const { container } = render(
      <TextArea
        maxLength={5}
        showCount={{
          formatter: ({ value, count, maxLength }) =>
            `${value}, ${count}, ${maxLength}`,
        }}
        value="12345"
      />,
    );
    expect(container.querySelector('textarea')?.value).toBe('12345');
    expect(
      container
        .querySelector('.rc-textarea-show-count')
        ?.getAttribute('data-count'),
    ).toBe('12345, 5, 5');
    expect(container.querySelector('.rc-textarea-data-count')?.innerHTML).toBe(
      '12345, 5, 5',
    );
  });

  it('className & style patch to outer', () => {
    const { container } = render(
      <TextArea className="bamboo" style={{ background: 'red' }} showCount />,
    );

    // Outer
    expect(
      container.querySelector('span')?.classList.contains('bamboo'),
    ).toBeTruthy();
    expect(container.querySelector('span')?.style.background).toEqual('red');

    // Inner
    expect(
      container.querySelector('.rc-textarea')?.classList.contains('bamboo'),
    ).toBeFalsy();
    expect(
      container.querySelector<HTMLDivElement>('.rc-textarea')?.style.background,
    ).toBeFalsy();
  });
});
