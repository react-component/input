import React from 'react';
import { render } from '@testing-library/react';
import Input from '../src';

describe('suffix renderability', () => {
  it('renders zero and applies the count suffix class', () => {
    const { container, rerender } = render(<Input suffix={0} />);
    expect(container.querySelector('.rc-input-suffix')).toHaveTextContent('0');
    rerender(<Input suffix={0} showCount />);
    expect(
      container.querySelector('.rc-input-show-count-has-suffix'),
    ).toBeTruthy();
  });

  it.each([null, undefined, false, ''])(
    'does not wrap an empty suffix %s',
    (suffix) => {
      const { container } = render(<Input suffix={suffix} />);
      expect(container.querySelector('.rc-input-suffix')).toBeNull();
    },
  );
});
