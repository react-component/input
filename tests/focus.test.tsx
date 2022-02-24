import React from 'react';
import { spyElementPrototypes } from 'rc-util/lib/test/domHook';
import Input from 'rc-input';
import { fireEvent, render } from '@testing-library/react';

const getInputRef = () => {
  const ref = React.createRef<any>();
  render(<Input ref={ref} defaultValue="light" />);
  return ref;
};

describe('Input.Focus', () => {
  let inputSpy: ReturnType<typeof spyElementPrototypes>;
  let focus: ReturnType<typeof jest.fn>;
  let setSelectionRange: ReturnType<typeof jest.fn>;

  beforeEach(() => {
    focus = jest.fn();
    setSelectionRange = jest.fn();
    inputSpy = spyElementPrototypes(HTMLInputElement, {
      focus,
      setSelectionRange,
    });
  });

  afterEach(() => {
    inputSpy.mockRestore();
  });

  it('start', () => {
    const input = getInputRef();
    input.current?.focus({ cursor: 'start' });

    expect(focus).toHaveBeenCalled();
    expect(setSelectionRange).toHaveBeenCalledWith(expect.anything(), 0, 0);
  });

  it('end', () => {
    const input = getInputRef();
    input.current?.focus({ cursor: 'end' });

    expect(focus).toHaveBeenCalled();
    expect(setSelectionRange).toHaveBeenCalledWith(expect.anything(), 5, 5);
  });

  it('all', () => {
    const input = getInputRef();
    input.current?.focus({ cursor: 'all' });

    expect(focus).toHaveBeenCalled();
    expect(setSelectionRange).toHaveBeenCalledWith(expect.anything(), 0, 5);
  });

  it('disabled should reset focus', () => {
    const { container, rerender } = render(
      <Input prefixCls="rc-input" allowClear />,
    );
    fireEvent.focus(container.querySelector('input')!);
    expect(
      container.querySelector('.rc-input-affix-wrapper-focused'),
    ).toBeTruthy();

    rerender(<Input prefixCls="rc-input" allowClear disabled />);
    expect(
      container.querySelector('.rc-input-affix-wrapper-focused'),
    ).toBeFalsy();
  });
});
