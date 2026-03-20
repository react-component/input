// @ts-nocheck
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { TextArea } from '../src';
import type { TextAreaRef } from '../src';

describe('focus and blur', () => {
  let focused = false;
  let blurred = false;
  const mockFocus = jest.spyOn(HTMLElement.prototype, 'focus');
  const mockBlur = jest.spyOn(HTMLElement.prototype, 'blur');

  beforeAll(() => {
    mockFocus.mockImplementation(() => {
      focused = true;
    });
    mockBlur.mockImplementation(() => {
      blurred = true;
    });
  });

  afterEach(() => {
    focused = false;
    blurred = false;
  });

  it('focus() and onFocus', () => {
    const handleFocus = jest.fn();
    const { container } = render(<TextArea onFocus={handleFocus} />);
    fireEvent.focus(container.firstChild);
    expect(handleFocus).toHaveBeenCalled();
  });

  it('blur() and onBlur', async () => {
    jest.useRealTimers();
    const handleBlur = jest.fn();
    const { container } = render(<TextArea onBlur={handleBlur} />);
    fireEvent.focus(container.firstChild);
    fireEvent.blur(container.firstChild);
    expect(handleBlur).toHaveBeenCalled();
  });

  it('Ref: focus() and onFocus', () => {
    const onFocus = jest.fn();
    const ref = React.createRef<TextAreaRef>();
    const { container } = render(
      <div>
        <TextArea onFocus={onFocus} ref={ref} />
      </div>,
    );
    ref.current.focus();
    expect(focused).toBeTruthy();

    fireEvent.focus(container.querySelector('textarea'));
    expect(onFocus).toHaveBeenCalled();
  });

  it('Ref: blur() and onBlur', async () => {
    jest.useRealTimers();
    const onBlur = jest.fn();
    const ref = React.createRef<TextAreaRef>();
    const { container } = render(
      <div>
        <TextArea onBlur={onBlur} ref={ref} />
      </div>,
    );

    ref.current.blur();
    expect(blurred).toBeTruthy();

    fireEvent.blur(container.querySelector('textarea'));
    expect(onBlur).toHaveBeenCalled();
  });

  it('autoFocus', () => {
    const handleFocus = jest.fn();
    render(<TextArea autoFocus onFocus={handleFocus} />);
    expect(focused).toBeTruthy();
  });

  it('check className when onFocus and onBlur', () => {
    const { container } = render(<TextArea allowClear />);

    fireEvent.focus(container.querySelector('textarea'));
    expect(
      document.querySelector('.rc-textarea-affix-wrapper-focused'),
    ).toBeTruthy();

    fireEvent.blur(container.querySelector('textarea'));
    expect(
      container.querySelector('.rc-textarea-affix-wrapper-focused'),
    ).toBeFalsy();
  });
});
