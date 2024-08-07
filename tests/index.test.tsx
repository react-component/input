import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { spyElementPrototypes } from 'rc-util/lib/test/domHook';
import React from 'react';
import Input from '../src';
import type { InputRef } from '../src/interface';
import { resolveOnChange } from '../src/utils/commonUtils';

describe('Input', () => {
  it('should support maxLength', () => {
    const { container } = render(<Input prefixCls="rc-input" maxLength={3} />);
    expect(container).toMatchSnapshot();
  });

  it('not crash when value is number', () => {
    const { container } = render(<Input suffix="Bamboo" value={1} />);
    expect(container).toBeTruthy();
  });

  it('should trigger onFocus and onBlur', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const { container } = render(<Input onFocus={onFocus} onBlur={onBlur} />);
    const inputEl = container.querySelector('input')!;
    fireEvent.focus(inputEl);
    expect(onFocus).toHaveBeenCalled();
    fireEvent.blur(inputEl);
    expect(onBlur).toHaveBeenCalled();
  });

  it('should trigger onKeydown and onPressEnter', () => {
    const onKeyDown = jest.fn();
    const onPressEnter = jest.fn();
    const { container } = render(
      <Input onKeyDown={onKeyDown} onPressEnter={onPressEnter} />,
    );
    const inputEl = container.querySelector('input')!;
    fireEvent.keyDown(inputEl, { key: 'Enter' });
    expect(onKeyDown).toHaveBeenCalled();
    expect(onPressEnter).toHaveBeenCalled();
  });

  it('should prevent long press of enter', () => {
    const onKeyDown = jest.fn();
    const onPressEnter = jest.fn();
    const onKeyUp = jest.fn();
    const { container } = render(
      <Input
        onKeyDown={onKeyDown}
        onPressEnter={onPressEnter}
        onKeyUp={onKeyUp}
      />,
    );
    const inputEl = container.querySelector('input')!;
    fireEvent.keyDown(inputEl, { key: 'Enter' });
    fireEvent.keyDown(inputEl, { key: 'Enter' });
    fireEvent.keyUp(inputEl, { key: 'Enter' });
    expect(onKeyDown).toBeCalledTimes(2);
    expect(onPressEnter).toBeCalledTimes(1);
    expect(onKeyUp).toBeCalledTimes(1);
  });

  it('should trigger onChange', () => {
    const onChange = jest.fn();
    const { container } = render(<Input onChange={onChange} />);
    const inputEl = container.querySelector('input')!;
    fireEvent.change(inputEl, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalled();
    expect(inputEl.value).toBe('test');
  });

  it('not block input when `value` is undefined', () => {
    const { container, rerender } = render(<Input value={undefined} />);
    const inputEl = container.querySelector('input')!;
    fireEvent.change(inputEl, { target: { value: 'Bamboo' } });
    expect(inputEl.value).toEqual('Bamboo');

    // Controlled
    rerender(<Input value="Light" />);
    fireEvent.change(inputEl, { target: { value: 'Bamboo' } });
    expect(inputEl.value).toEqual('Light');

    // Uncontrolled
    rerender(<Input value={undefined} />);
    expect(inputEl.value).toEqual('');
    fireEvent.change(inputEl, { target: { value: 'Bamboo' } });
    expect(inputEl.value).toEqual('Bamboo');
  });

  it('should focus input after clear', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Input prefixCls="rc-input" allowClear defaultValue="111" />,
    );
    await user.click(container.querySelector('.rc-input-clear-icon')!);
    expect(document.activeElement).toBe(container.querySelector('input'));
  });

  it('support bigint type', () => {
    expect(<Input value={BigInt('2222')} />).toBeTruthy();
  });

  it('should be compatible with type="file"', () => {
    const onChange = jest.fn();
    const { container } = render(<Input type="file" onChange={onChange} />);
    const inputEl = container.querySelector('input')!;
    const file = new File(['(⌐□_□)'], 'file.xml', { type: 'application/xml' });
    // upload the file by updating the value attribute of the input
    // I assume : <input type="file" data-testid="fileInput" />
    fireEvent.change(inputEl, {
      target: { files: [file] },
    });

    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0][0].target.files[0]).toBe(file);
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

  it('count formatter', () => {
    const { container } = render(
      <Input
        prefixCls="rc-input"
        maxLength={5}
        showCount={{
          formatter: ({ value, count, maxLength }) =>
            `${value}, ${count}, ${maxLength}`,
        }}
        value="12345"
      />,
    );
    expect(container.querySelector('input')?.value).toBe('12345');
    expect(
      container.querySelector('.rc-input-show-count-suffix')?.innerHTML,
    ).toBe('12345, 5, 5');
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

  it('classNames and styles should work', () => {
    const { container } = render(
      <>
        <Input
          value="123"
          showCount
          prefixCls="rc-input"
          prefix="prefix"
          suffix="suffix"
          className="custom-class"
          style={{ backgroundColor: 'red' }}
          classNames={{
            input: 'custom-input',
            prefix: 'custom-prefix',
            suffix: 'custom-suffix',
            count: 'custom-count',
          }}
          styles={{
            input: { color: 'red' },
            prefix: { color: 'blue' },
            suffix: { color: 'yellow' },
            count: { color: 'green' },
          }}
        />
        <Input
          value="123"
          addonAfter="addon"
          showCount
          prefixCls="rc-input"
          prefix="prefix"
          suffix="suffix"
          className="custom-class"
          style={{ backgroundColor: 'red' }}
          classNames={{
            input: 'custom-input',
            prefix: 'custom-prefix',
            suffix: 'custom-suffix',
            count: 'custom-count',
          }}
          styles={{
            input: { color: 'red' },
            prefix: { color: 'blue' },
            suffix: { color: 'yellow' },
            count: { color: 'green' },
          }}
        />
        <Input
          value="123"
          prefixCls="rc-input"
          className="custom-class"
          style={{ backgroundColor: 'red' }}
          classNames={{
            input: 'custom-input',
          }}
          styles={{
            input: { color: 'red' },
          }}
        />
        <Input
          value="123"
          prefixCls="rc-input"
          className="custom-class"
          addonAfter="addon"
          style={{ backgroundColor: 'red' }}
          classNames={{
            input: 'custom-input',
          }}
          styles={{
            input: { color: 'red' },
          }}
        />
      </>,
    );
    expect(container).toMatchSnapshot();
  });
});

describe('Input ref', () => {
  it('focus and blur should work', () => {
    const ref = React.createRef<InputRef>();
    const { container } = render(
      <Input ref={ref} defaultValue="light" prefixCls="rc-input" />,
    );
    const inputEl = container.querySelector('input')!;
    ref.current?.focus();
    expect(document.activeElement).toBe(inputEl);
    ref.current?.blur();
    expect(document.activeElement).not.toBe(inputEl);
  });

  it('select should work', () => {
    const select = jest.fn();
    const inputSpy = spyElementPrototypes(HTMLInputElement, {
      select,
    });
    const ref = React.createRef<InputRef>();
    render(<Input ref={ref} defaultValue="light" prefixCls="rc-input" />);
    ref.current?.select();
    expect(select).toHaveBeenCalled();
    inputSpy.mockRestore();
  });

  describe('selection', () => {
    it('setSelectionRange should work', () => {
      const setSelectionRange = jest.fn();
      const inputSpy = spyElementPrototypes(HTMLInputElement, {
        setSelectionRange,
      });
      const ref = React.createRef<InputRef>();
      render(<Input ref={ref} defaultValue="light" prefixCls="rc-input" />);
      ref.current?.setSelectionRange(0, 0);
      expect(setSelectionRange).toHaveBeenCalledWith(
        expect.anything(),
        0,
        0,
        undefined,
      );
      inputSpy.mockRestore();
    });

    it('selectionXXX should pass', () => {
      const onChange = jest.fn();
      const { container } = render(<Input onChange={onChange} />);
      const spySetSelectionRange = jest.spyOn(
        container.querySelector('input')!,
        'setSelectionRange',
      );

      const inputEl = container.querySelector('input')!;
      fireEvent.change(inputEl, { target: { value: 'test' } });

      expect(onChange).toHaveBeenCalled();
      const event = onChange.mock.calls[0][0];
      expect(event.target.selectionStart).toBe(4);
      expect(event.target.selectionEnd).toBe(4);

      // Call `setSelectionRange`
      event.target.setSelectionRange(1, 2);
      expect(spySetSelectionRange).toHaveBeenCalledWith(1, 2);
    });

    it('email type not support selection', () => {
      const onChange = jest.fn();
      const { container } = render(<Input type="email" onChange={onChange} />);

      fireEvent.change(container.querySelector('input')!, {
        target: { value: 'test' },
      });
      expect(onChange).toHaveBeenCalled();
      const event = onChange.mock.calls[0][0];
      expect(event.target.selectionStart).toBeNull();
      expect(event.target.selectionEnd).toBeNull();
    });
  });

  it('input should work', () => {
    const ref = React.createRef<InputRef>();
    const { container } = render(<Input ref={ref} defaultValue="light" />);
    const inputEl = container.querySelector('input')!;
    expect(ref.current?.input).toBe(inputEl);
    expect(ref.current?.nativeElement).toBe(inputEl);
  });

  it('support onClear', () => {
    const onClear = jest.fn();
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { container } = render(
      <Input onClear={onClear} defaultValue="test" allowClear />,
    );
    fireEvent.click(
      container.querySelector<HTMLSpanElement>('.rc-input-clear-icon')!,
    );
    expect(onClear).toHaveBeenCalled();
    expect(errorSpy).not.toHaveBeenCalled();
    errorSpy.mockRestore();
  });
});

describe('resolveChange should work', () => {
  const onChange = jest.fn();
  const { container } = render(
    <textarea
      onCompositionEnd={(e) =>
        resolveOnChange(e.currentTarget, e, onChange, 'triggerValue')
      }
    />,
  );
  fireEvent.compositionEnd(container.querySelector('textarea')!);
  expect(onChange).toHaveBeenCalled();
});
