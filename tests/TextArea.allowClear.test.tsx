import { fireEvent, render } from '@testing-library/react';
import type { ChangeEventHandler, TextareaHTMLAttributes } from 'react';
import React from 'react';
import { TextArea } from '../src';

describe('should support allowClear', () => {
  it('should change type when click', () => {
    const { container } = render(<TextArea allowClear />);
    fireEvent.change(container.querySelector('textarea')!, {
      target: { value: '111' },
    });
    const clearIcon = container.querySelector('.rc-textarea-clear-icon');

    expect(container.querySelector('textarea')?.value).toEqual('111');
    expect(clearIcon).toBeTruthy();
    expect(clearIcon).not.toHaveClass('rc-textarea-clear-icon-hidden');
    fireEvent.click(clearIcon!);
    expect(
      container.querySelector('.rc-textarea-clear-icon-hidden'),
    ).toBeTruthy();
    expect(container.querySelector('textarea')?.value).toEqual('');
  });

  it('should not show icon if value is undefined, null or empty string', () => {
    const wrappers = [null, undefined, ''].map((val) =>
      render(
        <TextArea
          allowClear
          value={val as TextareaHTMLAttributes<HTMLTextAreaElement>['value']}
        />,
      ),
    );
    wrappers.forEach(({ asFragment, container }) => {
      expect(container.querySelector('textarea')?.value).toEqual('');
      expect(
        container.querySelector('.rc-textarea-clear-icon-hidden'),
      ).toBeTruthy();
      expect(asFragment().firstChild).toMatchSnapshot();
    });
  });

  it('should not show icon if defaultValue is undefined, null or empty string', () => {
    const wrappers = [null, undefined, ''].map((val) =>
      render(
        <TextArea
          allowClear
          defaultValue={
            val as TextareaHTMLAttributes<HTMLTextAreaElement>['value']
          }
        />,
      ),
    );
    wrappers.forEach(({ asFragment, container }) => {
      expect(container.querySelector('textarea')?.value).toEqual('');
      expect(
        container.querySelector('.rc-textarea-clear-icon-hidden'),
      ).toBeTruthy();
      expect(asFragment().firstChild).toMatchSnapshot();
    });
  });

  it('should trigger event correctly', () => {
    let argumentEventObjectType;
    let argumentEventObjectValue;
    const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      argumentEventObjectType = e.type;
      argumentEventObjectValue = e.target.value;
    };
    const { container } = render(
      <TextArea allowClear defaultValue="111" onChange={onChange} />,
    );
    fireEvent.click(container.querySelector('.rc-textarea-clear-icon')!);
    expect(argumentEventObjectType).toBe('click');
    expect(argumentEventObjectValue).toBe('');
    expect(container.querySelector('textarea')?.value).toBe('');
  });

  it('should trigger event correctly on controlled mode', () => {
    let argumentEventObjectType;
    let argumentEventObjectValue;
    const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      argumentEventObjectType = e.type;
      argumentEventObjectValue = e.target.value;
    };
    const { container } = render(
      <TextArea allowClear value="111" onChange={onChange} />,
    );
    fireEvent.click(container.querySelector('.rc-textarea-clear-icon')!);
    expect(argumentEventObjectType).toBe('click');
    expect(argumentEventObjectValue).toBe('');
    expect(container.querySelector('textarea')?.value).toBe('111');
  });

  it('should focus textarea after clear', () => {
    const { container } = render(<TextArea allowClear defaultValue="111" />);
    fireEvent.click(container.querySelector('.rc-textarea-clear-icon')!);
    expect(document.activeElement).toBe(container.querySelector('textarea'));
  });

  it('should not support allowClear when it is disabled', () => {
    const { container } = render(
      <TextArea allowClear defaultValue="111" disabled />,
    );
    expect(
      container.querySelector('.rc-textarea-clear-icon-hidden'),
    ).toBeTruthy();
  });

  it('should not support allowClear when it is readOnly', () => {
    const { container } = render(
      <TextArea allowClear defaultValue="111" readOnly />,
    );
    expect(
      container.querySelector('.rc-textarea-clear-icon-hidden'),
    ).toBeTruthy();
  });
});

it('should show clear className', () => {
  const { container } = render(<TextArea allowClear />);
  expect(
    container.querySelector('.rc-textarea-textarea-allow-clear'),
  ).toBeTruthy();
});

it('should not textarea clear className', () => {
  const { container } = render(<TextArea />);
  expect(
    container.querySelector('.rc-textarea-textarea-allow-clear'),
  ).toBeFalsy();
});

it('support onClear', () => {
  const onClear = jest.fn();
  const { container } = render(
    <TextArea onClear={onClear} defaultValue="test" allowClear />,
  );
  fireEvent.click(
    container.querySelector<HTMLSpanElement>('.rc-textarea-clear-icon')!,
  );
  expect(onClear).toHaveBeenCalled();
});
