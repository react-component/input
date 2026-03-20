// @ts-nocheck
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { TextArea } from '../src';
import type { TextAreaProps, TextAreaRef } from '../src';
import calculateAutoSizeStyle, {
  calculateNodeStyling,
} from '../src/calculateNodeHeight';
import { triggerResize, wait } from './utils';

describe('TextArea', () => {
  const originalGetComputedStyle = window.getComputedStyle;
  beforeAll(() => {
    Object.defineProperty(window, 'getComputedStyle', {
      value: (node) => ({
        getPropertyValue: (prop) => {
          if (prop === 'box-sizing') {
            return originalGetComputedStyle(node)[prop] || 'border-box';
          }
          return originalGetComputedStyle(node)[prop];
        },
      }),
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'getComputedStyle', {
      value: originalGetComputedStyle,
    });
  });

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('paste text should change cursor position', async () => {
    const { container } = render(
      <TextArea autoSize={{ minRows: 2, maxRows: 6 }} />,
    );
    const textArea = container.querySelector('textarea') as HTMLTextAreaElement;
    // 监听事件绑定和移除
    const pasteData = 'pasted text\n'.repeat(10);
    const clipboardData = {
      getData: jest.fn().mockReturnValue(pasteData),
    };

    const pasteEvent = async () => {
      fireEvent.focus(textArea);

      fireEvent.paste(textArea, {
        clipboardData,
        types: ['text/plain'],
        items: [],
      });

      fireEvent.change(textArea, { target: { value: pasteData } });
      textArea.setSelectionRange(pasteData.length, pasteData.length);

      await wait();
      expect(textArea.selectionStart).toBe(pasteData.length);
      expect(textArea.selectionEnd).toBe(pasteData.length);
      fireEvent.change(textArea, { target: { value: '' } });
      await wait();
      expect(textArea.selectionStart).toBe(0);
      expect(textArea.selectionEnd).toBe(0);
    };

    await pasteEvent();
    await pasteEvent();
  });

  it('should work correctly on controlled mode', () => {
    const Demo = () => {
      const [value, setValue] = React.useState('111');
      return (
        <TextArea
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      );
    };
    const { container } = render(<Demo />);
    const textarea = container.querySelector('textarea');
    expect(textarea.value).toBe('111');
    fireEvent.change(textarea, {
      target: {
        value: '222',
      },
    });
    expect(textarea.value).toBe('222');
  });

  it('should auto calculate height according to content length and autoSize property', async () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const onInternalAutoSize = jest.fn();

    const renderDemo = (
      value = '',
      autoSize: TextAreaProps['autoSize'] = { minRows: 2, maxRows: 6 },
    ) => (
      <TextArea
        value={value}
        readOnly
        autoSize={autoSize}
        wrap="off"
        // @ts-ignore
        onInternalAutoSize={onInternalAutoSize}
      />
    );

    const { container, rerender } = render(renderDemo());

    await wait();
    onInternalAutoSize.mockRestore();

    rerender(renderDemo('1111\n2222\n3333'));
    await wait();
    expect(onInternalAutoSize).toHaveBeenCalledTimes(1);

    rerender(renderDemo('1111'));
    await wait();
    expect(onInternalAutoSize).toHaveBeenCalledTimes(2);

    rerender(renderDemo('1111', { minRows: 1, maxRows: 6 }));
    await wait();
    expect(onInternalAutoSize).toHaveBeenCalledTimes(3);

    rerender(renderDemo('1111', { minRows: 1, maxRows: 6 }));
    await wait();
    expect(onInternalAutoSize).toHaveBeenCalledTimes(3);

    rerender(renderDemo('1111', { minRows: 1, maxRows: 12 }));
    await wait();
    expect(onInternalAutoSize).toHaveBeenCalledTimes(4);

    rerender(renderDemo('1111', true));
    await wait();
    expect(onInternalAutoSize).toHaveBeenCalledTimes(5);

    rerender(renderDemo('1111', false));
    await wait();
    expect(onInternalAutoSize).toHaveBeenCalledTimes(5);

    expect(container.querySelector('textarea')).not.toHaveStyle({
      overflowY: 'hidden',
    });

    expect(errorSpy).not.toHaveBeenCalled();
  });

  it('should support onPressEnter and onKeyDown', () => {
    const fakeHandleKeyDown = jest.fn();
    const fakeHandlePressEnter = jest.fn();
    const { container } = render(
      <TextArea
        onKeyDown={fakeHandleKeyDown}
        onPressEnter={fakeHandlePressEnter}
      />,
    );
    const textarea = container.querySelector('textarea');
    /** keyCode 65 is A */
    fireEvent.keyDown(textarea, { keyCode: 65 });
    expect(fakeHandleKeyDown).toHaveBeenCalledTimes(1);
    expect(fakeHandlePressEnter).toHaveBeenCalledTimes(0);

    /** keyCode 13 is Enter */
    fireEvent.keyDown(textarea, { keyCode: 13 });
    expect(fakeHandleKeyDown).toHaveBeenCalledTimes(2);
    expect(fakeHandlePressEnter).toHaveBeenCalledTimes(1);
  });

  it('should support disabled', () => {
    const { container } = render(<TextArea disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support maxLength', () => {
    const { container } = render(<TextArea maxLength={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('calculateNodeStyling works correctly', () => {
    const wrapper = document.createElement('textarea');
    wrapper.id = 'test';
    wrapper.wrap = 'wrap';
    calculateNodeStyling(wrapper, true);
    const value = calculateNodeStyling(wrapper, true);
    expect(value).toEqual({
      borderSize: 2,
      boxSizing: 'border-box',
      paddingSize: 4,
      sizingStyle:
        'letter-spacing:normal;line-height:normal;padding-top:2px;padding-bottom:2px;font-family:-webkit-small-control;font-weight:;font-size:;font-variant:;text-rendering:auto;text-transform:none;width:;text-indent:0;padding-left:2px;padding-right:2px;border-width:1px;box-sizing:border-box;word-break:;white-space:pre-wrap',
    });
  });

  it('boxSizing === "border-box"', () => {
    const wrapper = document.createElement('textarea');
    wrapper.style.boxSizing = 'border-box';
    const { height } = calculateAutoSizeStyle(wrapper);
    expect(height).toBe(2);
  });

  it('boxSizing === "content-box"', () => {
    const wrapper = document.createElement('textarea');
    wrapper.style.boxSizing = 'content-box';
    const { height } = calculateAutoSizeStyle(wrapper);
    expect(height).toBe(-4);
  });

  it('minRows or maxRows is not null', () => {
    const wrapper = document.createElement('textarea');
    expect(calculateAutoSizeStyle(wrapper, false, 1, 1)).toEqual(
      expect.objectContaining({
        height: 2,
        minHeight: 2,
        overflowY: 'hidden',
        resize: 'none',
      }),
    );
    wrapper.style.boxSizing = 'content-box';
    expect(calculateAutoSizeStyle(wrapper, false, 1, 1)).toEqual(
      expect.objectContaining({
        height: -4,
        minHeight: -4,
        overflowY: 'hidden',
        resize: 'none',
      }),
    );
  });

  it('handleKeyDown', () => {
    const onPressEnter = jest.fn();
    const onKeyDown = jest.fn();
    const { container } = render(
      <TextArea
        onPressEnter={onPressEnter}
        onKeyDown={onKeyDown}
        aria-label="textarea"
      />,
    );
    fireEvent.keyDown(container.querySelector('textarea'), { keyCode: 13 });
    expect(onPressEnter).toHaveBeenCalled();
    expect(onKeyDown).toHaveBeenCalled();
  });

  it('should trigger onResize', async () => {
    const onResize = jest.fn();
    const { container } = render(<TextArea onResize={onResize} autoSize />);
    await wait();

    triggerResize(container.querySelector('textarea'));
    await wait();

    expect(onResize).toHaveBeenCalledWith(
      expect.objectContaining({
        width: expect.any(Number),
        height: expect.any(Number),
      }),
    );
  });

  it('scroll to bottom when autoSize', async () => {
    const { container, unmount } = render(<TextArea autoSize />);
    container.querySelector('textarea').focus();
    expect(document.activeElement).toBe(container.querySelector('textarea'));

    // https://github.com/ant-design/ant-design/issues/54444
    // Other browsers may have cursor position issues when calling setSelectionRange, so we do not call it here.
    // const setSelectionRangeFn = jest.spyOn(
    //   container.querySelector('textarea'),
    //   'setSelectionRange',
    // );

    fireEvent.change(container.querySelector('textarea'), {
      target: { value: '\n1' },
    });

    await wait();

    // expect(setSelectionRangeFn).toHaveBeenCalled();
    expect(container.querySelector('textarea').scrollTop).toBe(
      container.querySelector('textarea').scrollHeight,
    );
    unmount();
  });

  it('should support onPressEnter and onKeyDown', () => {
    const fakeHandleKeyDown = jest.fn();
    const fakeHandlePressEnter = jest.fn();
    const { container } = render(
      <TextArea
        onKeyDown={fakeHandleKeyDown}
        onPressEnter={fakeHandlePressEnter}
      />,
    );
    /** KeyCode 65 is A */
    fireEvent.keyDown(container.querySelector('textarea')!, { key: 'A' });
    expect(fakeHandleKeyDown).toHaveBeenCalledTimes(1);
    expect(fakeHandlePressEnter).toHaveBeenCalledTimes(0);

    /** KeyCode 13 is Enter */
    fireEvent.keyDown(container.querySelector('textarea')!, { key: 'Enter' });
    expect(fakeHandleKeyDown).toHaveBeenCalledTimes(2);
    expect(fakeHandlePressEnter).toHaveBeenCalledTimes(1);
  });

  it('classNames and styles should work', () => {
    const { container } = render(
      <>
        <TextArea
          value="123"
          showCount
          suffix="suffix"
          allowClear
          className="custom-class"
          style={{ background: 'red' }}
          classNames={{
            textarea: 'custom-textarea',
            suffix: 'custom-suffix',
            clear: 'custom-clear',
            count: 'custom-count',
          }}
          styles={{
            textarea: {
              color: 'red',
            },
            suffix: {
              color: 'yellow',
            },
            clear: {
              color: 'orange',
            },
            count: {
              color: 'blue',
            },
          }}
        />
        <TextArea
          showCount
          className="custom-class"
          style={{ background: 'red' }}
          classNames={{
            textarea: 'custom-textarea',
            count: 'custom-count',
          }}
          styles={{
            textarea: {
              color: 'red',
            },
            count: {
              color: 'blue',
            },
          }}
        />
      </>,
    );
    expect(container.querySelector('.rc-textarea-clear-icon')).toHaveClass(
      'custom-clear',
    );
    expect(container.querySelector('.rc-textarea-clear-icon')).toHaveStyle({
      color: 'orange',
    });
    expect(container).toMatchSnapshot();
  });

  it('should be resized with textarea', async () => {
    const onResize = jest.fn();
    const { container } = render(
      <TextArea onResize={onResize} showCount style={{ height: 200 }} />,
    );
    await wait();
    expect(
      (container.querySelector('.rc-textarea-affix-wrapper') as HTMLDivElement)
        .style.height,
    ).toBe('200px');

    triggerResize(container.querySelector('textarea'), { height: 1000 });
    await wait();
    expect(onResize).toHaveBeenCalledTimes(1);
    expect(
      (container.querySelector('.rc-textarea-affix-wrapper') as HTMLDivElement)
        .style.height,
    ).toBe('auto');
  });

  it('pass style height should work', async () => {
    const onResize = jest.fn();

    const { container } = render(
      <TextArea onResize={onResize} style={{ height: 93 }} />,
    );

    triggerResize(container.querySelector('textarea'));
    await wait();

    expect(onResize).toHaveBeenCalled();

    expect(container.querySelector('textarea')).toHaveStyle({
      height: '903px',
    });
  });

  it('support bigint type', () => {
    const { container } = render(<TextArea value={BigInt('903')} autoSize />);
    expect(container.querySelector('textarea').value).toBe('903');
  });

  describe('ref.nativeElement', () => {
    it('textarea', () => {
      const ref = React.createRef<TextAreaRef>();
      const { container } = render(
        <div>
          <TextArea ref={ref} />
        </div>,
      );

      expect(ref.current.nativeElement).toEqual(
        container.querySelector('textarea'),
      );
    });

    it('holder', () => {
      const ref = React.createRef<TextAreaRef>();
      const { container } = render(
        <div>
          <TextArea ref={ref} allowClear />
        </div>,
      );

      expect(ref.current.nativeElement).toEqual(
        container.querySelector('.rc-textarea-affix-wrapper'),
      );
    });
  });
});

describe('TextArea IME behavior', () => {
  it('should ignore Enter during composition', () => {
    const onPressEnter = jest.fn();
    const { container } = render(<TextArea onPressEnter={onPressEnter} />);
    const textarea = container.querySelector('textarea')!;

    fireEvent.compositionStart(textarea);

    fireEvent.keyDown(textarea, {
      key: 'Enter',
      keyCode: 229,
      isComposing: true,
      nativeEvent: { isComposing: true },
    });

    fireEvent.compositionUpdate(textarea, { data: '开始' });

    expect(onPressEnter).not.toHaveBeenCalled();

    fireEvent.compositionEnd(textarea);
    fireEvent.keyDown(textarea, {
      key: 'Enter',
      nativeEvent: { isComposing: false },
    });
    expect(onPressEnter).toHaveBeenCalledTimes(1);
  });

  it('should trigger Enter for non-composition (normal) input', () => {
    const onPressEnter = jest.fn();
    const { container } = render(<TextArea onPressEnter={onPressEnter} />);
    const textarea = container.querySelector('textarea')!;

    fireEvent.change(textarea, { target: { value: 'test' } });

    fireEvent.keyDown(textarea, {
      key: 'Enter',
    });
    expect(onPressEnter).toHaveBeenCalledTimes(1);
    expect(textarea.value).toBe('test');
  });
});
