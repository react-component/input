import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Input, { TextArea } from '../src';

describe.each([
  ['Input', Input],
  ['TextArea', TextArea],
] as const)('%s allowClear tabIndex', (_, Component) => {
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
