import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Input, { TextArea } from '../src';

describe.each([
  ['Input', Input],
  ['TextArea', TextArea],
] as const)('%s allowClear', (_, Component) => {
  it.each([undefined, 'suffix'])(
    'removes the clear entry without changing other suffixes: %s',
    async (suffix) => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      const onClear = jest.fn();
      const config = Object.freeze({
        clearIcon: 'custom',
        tabIndex: -1,
        label: 'Erase',
      });
      const props = {
        prefixCls: 'rc-input',
        defaultValue: 'test',
        suffix,
        onChange,
        onClear,
      };
      const { container, getByRole, queryByRole, rerender } = render(
        <Component {...props} allowClear={false} />,
      );
      const disabledMarkup = container.innerHTML;
      rerender(
        <Component {...props} allowClear={{ ...config, disabled: true }} />,
      );
      expect(container.innerHTML).toBe(disabledMarkup);
      expect(queryByRole('button')).toBeNull();
      expect(getByRole('textbox')).toHaveValue('test');
      expect(onChange).not.toHaveBeenCalled();
      expect(onClear).not.toHaveBeenCalled();

      rerender(<Component {...props} allowClear={config} />);
      const clearButton = getByRole('button', { name: 'Erase' });
      expect(clearButton).toHaveTextContent('custom');
      expect(clearButton.tabIndex).toBe(-1);
      await user.click(clearButton);
      expect(getByRole('textbox')).toHaveValue('');
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onClear).toHaveBeenCalledTimes(1);
      expect(config).toEqual({
        clearIcon: 'custom',
        tabIndex: -1,
        label: 'Erase',
      });
    },
  );

  it('preserves focus and selection when a suffix keeps the wrapper mounted', async () => {
    const user = userEvent.setup();
    const { getByRole, rerender } = render(
      <Component suffix="suffix" defaultValue="test" allowClear />,
    );
    const input = getByRole('textbox') as HTMLInputElement;
    await user.click(input);
    input.setSelectionRange(1, 3);
    rerender(
      <Component
        suffix="suffix"
        defaultValue="test"
        allowClear={{ disabled: true }}
      />,
    );
    expect(getByRole('textbox')).toBe(input);
    expect(input).toHaveFocus();
    expect(input.selectionStart).toBe(1);
    expect(input.selectionEnd).toBe(3);
  });

  it('uses the default accessible name and supports Space activation', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<Component defaultValue="test" allowClear />);
    await user.tab();
    await user.tab();
    expect(getByRole('button', { name: 'Clear' })).toHaveFocus();
    await user.keyboard('[Space]');
    expect(getByRole('textbox')).toHaveValue('');
  });

  it.each([true, {}, { tabIndex: 0 }])(
    'keeps the clear button keyboard accessible with %j',
    async (allowClear) => {
      const user = userEvent.setup();
      const { getByRole } = render(
        <Component defaultValue="test" allowClear={allowClear} />,
      );

      await user.tab();
      expect(getByRole('textbox')).toHaveFocus();
      await user.tab();
      expect(getByRole('button')).toHaveFocus();
      await user.keyboard('[Enter]');
      expect(getByRole('textbox')).toHaveValue('');
      expect(getByRole('textbox')).toHaveFocus();
    },
  );

  it('skips the clear button in both tab directions while allowing click to clear', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    const onClear = jest.fn();
    const { getAllByRole, getByRole } = render(
      <>
        <Component
          defaultValue="test"
          allowClear={{ tabIndex: -1 }}
          onChange={onChange}
          onClear={onClear}
        />
        <Component />
      </>,
    );
    const [first, second] = getAllByRole('textbox');

    await user.tab();
    expect(first).toHaveFocus();
    await user.tab();
    expect(second).toHaveFocus();
    await user.tab({ shift: true });
    expect(first).toHaveFocus();

    await user.click(getByRole('button'));
    expect(first).toHaveValue('');
    expect(first).toHaveFocus();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it('updates the clear button tabIndex independently of the input', () => {
    const { getByRole, rerender } = render(
      <Component
        defaultValue="test"
        tabIndex={3}
        allowClear={{ tabIndex: 2 }}
      />,
    );
    expect(getByRole('button').tabIndex).toBe(2);
    expect(getByRole('textbox').tabIndex).toBe(3);

    rerender(<Component defaultValue="test" tabIndex={3} allowClear />);
    expect(getByRole('button').tabIndex).toBe(0);
    expect(getByRole('textbox').tabIndex).toBe(3);
  });
});
