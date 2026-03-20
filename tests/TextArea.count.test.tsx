import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { TextArea } from '../src';

const getSegments = (val: string) => [...new Intl.Segmenter().segment(val)];

describe('TextArea.Count', () => {
  it('basic emoji take length', () => {
    const { container } = render(
      <TextArea count={{ show: true }} value="👨‍👩‍👧‍👦" />,
    );
    expect(container.querySelector('.rc-textarea-suffix')?.textContent).toEqual(
      '11',
    );
  });

  it('strategy', () => {
    const { container } = render(
      <TextArea
        count={{ show: true, strategy: (val) => getSegments(val).length }}
        value="👨‍👩‍👧‍👦"
      />,
    );
    expect(container.querySelector('.rc-textarea-suffix')?.textContent).toEqual(
      '1',
    );
  });

  it('exceed style', () => {
    const { container } = render(
      <TextArea count={{ show: true, max: 5 }} value="👨‍👩‍👧‍👦" />,
    );
    expect(container.querySelector('.rc-textarea-out-of-range')).toBeTruthy();
  });

  it('show formatter', () => {
    const { container } = render(
      <TextArea
        count={{
          show: ({ value, count, maxLength }) =>
            `${value}_${count}_${maxLength}`,
        }}
        value="👨‍👩‍👧‍👦"
        maxLength={5}
      />,
    );
    expect(container.querySelector('.rc-textarea-suffix')?.textContent).toEqual(
      '👨‍👩‍👧‍👦_11_5',
    );
  });

  it('exceedFormatter', () => {
    const onCompositionStart = jest.fn();
    const onCompositionEnd = jest.fn();

    const { container } = render(
      <TextArea
        count={{
          show: true,
          max: 3,
          exceedFormatter: (val, { max }) =>
            getSegments(val)
              .filter((seg) => seg.index + seg.segment.length <= max)
              .map((seg) => seg.segment)
              .join(''),
        }}
        onCompositionStart={onCompositionStart}
        onCompositionEnd={onCompositionEnd}
      />,
    );

    // Allow input
    fireEvent.compositionStart(container.querySelector('textarea')!);
    fireEvent.change(container.querySelector('textarea')!, {
      target: {
        value: '🔥🔥🔥🔥🔥',
      },
    });
    expect(container.querySelector('textarea')?.value).toEqual('🔥🔥🔥🔥🔥');
    expect(onCompositionStart).toHaveBeenCalled();

    // Fallback
    fireEvent.compositionEnd(container.querySelector('textarea')!);
    expect(container.querySelector('textarea')?.value).toEqual('🔥');
    expect(onCompositionEnd).toHaveBeenCalled();
  });

  it('exceedFormatter selection', () => {
    const { container } = render(
      <TextArea
        count={{
          show: true,
          max: 3,
          exceedFormatter: (val, { max }) => val.slice(0, max),
        }}
        defaultValue={'123'}
      />,
    );

    const input = container.querySelector('textarea')!;
    const setSelectionRange = jest.spyOn(input, 'setSelectionRange');

    fireEvent.change(input, {
      target: {
        selectionStart: 2,
        selectionEnd: 2,
        value: '1a23',
      },
    });

    expect(setSelectionRange).toHaveBeenCalledWith(2, 2);
  });

  it('count.max should take priority over maxLength', () => {
    const { container } = render(
      <TextArea
        maxLength={20}
        count={{
          show: true,
          max: 5,
        }}
        value="123456"
      />,
    );

    expect(container.querySelector('.rc-textarea-suffix')?.textContent).toEqual(
      '6 / 5',
    );
    expect(container.querySelector('.rc-textarea-out-of-range')).toBeTruthy();
  });

  describe('cls', () => {
    it('raw', () => {
      const { container } = render(
        <TextArea
          count={{
            max: 3,
          }}
          defaultValue="bamboo"
        />,
      );

      expect(container.querySelector('.rc-textarea-out-of-range')).toBeTruthy();
    });

    it('wrapper', () => {
      const { container } = render(
        <TextArea
          count={{
            max: 3,
            show: true,
          }}
          defaultValue="bamboo"
        />,
      );

      expect(container.querySelector('.rc-textarea-out-of-range')).toBeTruthy();
    });
  });

  it('native maxLength', () => {
    const { container } = render(<TextArea maxLength={33} />);

    expect(
      container.querySelector('textarea')?.getAttribute('maxlength'),
    ).toEqual('33');
  });
});
