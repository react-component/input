import { fireEvent, render } from '@testing-library/react';
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

  it('exceed style', () => {
    const { container } = render(
      <Input count={{ show: true, max: 5 }} value="👨‍👩‍👧‍👦" />,
    );
    expect(container.querySelector('.rc-input-out-of-range')).toBeTruthy();
  });

  it('show formatter', () => {
    const { container } = render(
      <Input
        count={{
          show: ({ value, count, maxLength }) =>
            `${value}_${count}_${maxLength}`,
        }}
        value="👨‍👩‍👧‍👦"
        maxLength={5}
      />,
    );
    expect(
      container.querySelector('.rc-input-show-count-suffix')?.textContent,
    ).toEqual('👨‍👩‍👧‍👦_11_5');
  });

  it('exceedFormatter', () => {
    const { container } = render(
      <Input
        count={{
          show: true,
          max: 3,
          exceedFormatter: (val, { max }) =>
            getSegments(val)
              .filter((seg) => seg.index + seg.segment.length <= max)
              .map((seg) => seg.segment)
              .join(''),
        }}
      />,
    );

    // Allow input
    fireEvent.compositionStart(container.querySelector('input')!);
    fireEvent.change(container.querySelector('input')!, {
      target: {
        value: '🔥🔥🔥🔥🔥',
      },
    });
    expect(container.querySelector('input')?.value).toEqual('🔥🔥🔥🔥🔥');

    // Fallback
    fireEvent.compositionEnd(container.querySelector('input')!);
    expect(container.querySelector('input')?.value).toEqual('🔥');
  });
});
