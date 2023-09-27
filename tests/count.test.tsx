import { render } from '@testing-library/react';
import React from 'react';
import Input from '../src';

const getSegments = (val: string) => [
  ...new (Intl as any).Segmenter().segment(val),
];

describe('Input.Count', () => {
  it('basic emoji take length', () => {
    const { container } = render(<Input count={{ show: true }} value="👨‍👩‍👧‍👦" />);
    expect(
      container.querySelector('.rc-input-show-count-suffix')?.textContent,
    ).toEqual('11');
  });

  it('strategy', () => {
    const { container } = render(
      <Input
        count={{ show: true, strategy: (val) => getSegments(val).length }}
        value="👨‍👩‍👧‍👦"
      />,
    );
    expect(
      container.querySelector('.rc-input-show-count-suffix')?.textContent,
    ).toEqual('1');
  });
});
