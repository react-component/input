import { resetWarned } from '@rc-component/util';
import { act, fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Input from '../src';
import type {
  InputMask,
  InputMaskDefinitions,
  InputMaskState,
  InputProps,
  InputRef,
} from '../src';

function renderInput(props: InputProps & React.RefAttributes<InputRef> = {}) {
  const result = render(<Input mask="00-00" {...props} />);
  return { ...result, input: result.container.querySelector('input')! };
}

describe('Input.maskDefinitions', () => {
  it('adds custom tokens while preserving the defaults and the event contract', async () => {
    const maskDefinitions: InputMaskDefinitions = Object.freeze({
      a: /[a-zA-Z]/,
      '9': /[0-9]/,
      '#': /[a-zA-Z0-9]/,
    });
    const onChange = jest.fn();
    const { input } = renderInput({
      mask: 'aa-99-##-0X*',
      maskDefinitions,
      onChange,
    });
    await userEvent.type(input, 'AB12C34Dz');
    expect(input.value).toBe('AB-12-C3-4Dz');
    const event = onChange.mock.calls[onChange.mock.calls.length - 1][0];
    expect(event.target.value).toBe('AB-12-C3-4Dz');
    expect(event.currentTarget.value).toBe('AB-12-C3-4Dz');
    expect(input.hasAttribute('maskDefinitions')).toBe(false);
  });

  it('overrides the rules of default tokens', async () => {
    const { input } = renderInput({
      mask: 'XX-00',
      maskDefinitions: { X: /[A-F]/, '0': /[1-3]/ },
    });
    await userEvent.type(input, 'zAF912');
    expect(input.value).toBe('AF-12');
  });

  it('makes default tokens literal when their definition is null', async () => {
    const { input } = renderInput({
      mask: '0X*-99',
      maskDefinitions: { '0': null, X: null, '*': null, '9': /[0-9]/ },
    });
    await userEvent.type(input, '12');
    expect(input.value).toBe('0X*-12');
  });

  it('escapes custom tokens as literals', () => {
    const { input } = renderInput({
      mask: '\\H-HH',
      maskDefinitions: { H: /[0-9A-F]/ },
      defaultValue: 'A1',
    });
    expect(input.value).toBe('H-A1');
  });

  it('preserves regex flags and does not mutate stateful definitions', async () => {
    const digit = /[0-9]/gy;
    const letter = /[a-z]/iy;
    digit.lastIndex = 1;
    letter.lastIndex = 2;
    const { input } = renderInput({
      mask: 'dd-LL',
      maskDefinitions: { d: digit, L: letter },
    });
    await userEvent.type(input, '12aB');
    expect(input.value).toBe('12-aB');
    expect(digit.lastIndex).toBe(1);
    expect(letter.lastIndex).toBe(2);
    expect(digit.flags).toBe('gy');
    expect(letter.flags).toBe('iy');
  });

  it('keeps array strings literal and uses their explicit regular expressions', () => {
    const { input } = renderInput({
      mask: ['H0X*-', /[A-F0-9]/],
      maskDefinitions: { H: /[0-9]/, '0': null, X: /[0-9]/, '*': null },
      defaultValue: 'A',
    });
    expect(input.value).toBe('H0X*-A');
  });

  it('reformats controlled values when definitions change without emitting a change', () => {
    const onChange = jest.fn();
    const { input, rerender } = renderInput({
      mask: 'HH',
      maskDefinitions: { H: /[A-F0-9]/ },
      value: 'AB12',
      onChange,
    });
    expect(input.value).toBe('AB');
    rerender(
      <Input
        mask="HH"
        maskDefinitions={{ H: /[0-9]/ }}
        value="AB12"
        onChange={onChange}
      />,
    );
    expect(input.value).toBe('12');
    rerender(<Input mask="HH" value="AB12" onChange={onChange} />);
    expect(input.value).toBe('');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('uses updated definitions when editing an uncontrolled value', async () => {
    const { input, rerender } = renderInput({
      mask: 'HH',
      maskDefinitions: { H: /[0-9]/ },
    });
    await userEvent.type(input, '12');
    rerender(<Input mask="HH" maskDefinitions={{ H: /[A-Z0-9]/ }} />);
    expect(input.value).toBe('12');
    input.setSelectionRange(0, 2);
    await userEvent.keyboard('AB');
    expect(input.value).toBe('AB');
    expect(input.selectionStart).toBe(2);
  });

  it('uses custom tokens with dynamic masks and after clearing', async () => {
    const mask: InputMask = ({ value }) =>
      value.replace(/\D/g, '').length > 4 ? '999-999' : '99-99';
    const { input, container } = renderInput({
      mask,
      maskDefinitions: { '9': /[0-9]/ },
      maskPlaceholder: null,
      allowClear: true,
    });
    await userEvent.type(input, '12345');
    expect(input.value).toBe('123-45');
    expect(input.selectionStart).toBe(6);
    await userEvent.keyboard('{Backspace}');
    expect(input.value).toBe('12-34');
    await userEvent.click(container.querySelector('.rc-input-clear-icon')!);
    expect(input.value).toBe('');
    expect(input.selectionStart).toBe(0);
    await userEvent.keyboard('67');
    expect(input.value).toBe('67-');
  });

  it('uses custom tokens in dynamic masks based on selection', () => {
    const mask = jest.fn(({ selection }: InputMaskState) =>
      selection?.start === 1 ? 'Hd' : 'dd',
    );
    const { input } = renderInput({
      mask,
      maskDefinitions: { H: /[A-Z]/, d: /[0-9]/ },
    });
    fireEvent.change(input, {
      target: { value: 'A', selectionStart: 1, selectionEnd: 1 },
    });
    expect(mask).toHaveBeenCalledWith({
      value: 'A',
      selection: { start: 1, end: 1 },
    });
    expect(input.value).toBe('A');
  });

  it('retains the selected dynamic mask with inline definitions in controlled inputs', () => {
    const mask: InputMask = ({ selection }) =>
      selection?.start === 1 ? 'H-dd' : 'dd';
    const Demo = () => {
      const [value, setValue] = React.useState('');
      return (
        <Input
          mask={mask}
          maskDefinitions={{ H: /[A-Z]/, d: /[0-9]/ }}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      );
    };
    const { container } = render(<Demo />);
    const input = container.querySelector('input')!;
    fireEvent.change(input, {
      target: { value: 'A', selectionStart: 1, selectionEnd: 1 },
    });
    expect(input.value).toBe('A-');
  });

  it('retains the dynamic mask selected by an inline function in controlled inputs', () => {
    const onChange = jest.fn();
    const Demo = () => {
      const [value, setValue] = React.useState('');
      return (
        <Input
          mask={({ selection }) => (selection?.start === 1 ? 'H-dd' : 'dd')}
          maskDefinitions={{ H: /[A-Z]/, d: /[0-9]/ }}
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
            setValue(event.target.value);
          }}
        />
      );
    };
    const { container } = render(<Demo />);
    const input = container.querySelector('input')!;
    fireEvent.change(input, {
      target: { value: 'A', selectionStart: 1, selectionEnd: 1 },
    });
    expect(onChange).toHaveBeenCalledWith('A-');
    expect(input.value).toBe('A-');
  });

  it('ignores definitions without a mask and does not forward them to the DOM', () => {
    const { container } = render(
      <Input defaultValue="H12" maskDefinitions={{ H: /[0-9]/ }} />,
    );
    const input = container.querySelector('input')!;
    expect(input.value).toBe('H12');
    expect(input.hasAttribute('maskDefinitions')).toBe(false);
  });
});

describe('Input.mask', () => {
  it.each([
    ['00-00', '1234', '12-34'],
    ['XX-XX', 'AbCd', 'Ab-Cd'],
    ['**-**', 'a1B2', 'a1-B2'],
    ['XX-00', 'AB-12', 'AB-12'],
    ['\\X\\0-00', '42', 'X0-42'],
    ['9a-00', '42', '9a-42'],
    ['+39 0000', '1234', '+39 1234'],
  ])('formats the initial value with %s', (mask, defaultValue, expected) => {
    const { input } = renderInput({ mask, defaultValue });
    expect(input.value).toBe(expected);
  });

  it('supports array masks and does not mutate stateful regexes', async () => {
    const digit = /[0-9]/g;
    digit.lastIndex = 1;
    const { input } = renderInput({ mask: ['ID: ', /[A-Z]/, digit, digit] });
    await userEvent.type(input, 'A12');
    expect(input.value).toBe('ID: A12');
    expect(digit.lastIndex).toBe(1);
  });

  it('accepts digits, letters and alphanumeric input and skips invalid characters', async () => {
    const { input } = renderInput({ mask: '00-XX-**' });
    await userEvent.type(input, 'x12!Ab?C3');
    expect(input.value).toBe('12-Ab-C3');
  });

  it.each([
    [undefined, '12'],
    ['_', '12__'],
    [null, '12'],
  ])(
    'skips invalid initial characters with placeholder=%s',
    (maskPlaceholder, expected) => {
      const { input } = renderInput({
        mask: '00XX',
        defaultValue: 'x12',
        maskPlaceholder,
      });
      expect(input.value).toBe(expected);
    },
  );

  it.each([
    [undefined, '12-'],
    ['_', '12-__'],
    ['#', '12-##'],
    [null, '12-'],
    ['', '12-'],
  ])('supports maskPlaceholder=%s', (maskPlaceholder, expected) => {
    const { input } = renderInput({ defaultValue: '12', maskPlaceholder });
    expect(input.value).toBe(expected);
  });

  it('hides placeholders by default when focusing, typing and clearing', async () => {
    const { input, container } = renderInput({
      allowClear: true,
      placeholder: 'Digits',
    });
    await userEvent.click(input);
    expect(input.value).toBe('');
    expect(input.placeholder).toBe('Digits');
    await userEvent.keyboard('12');
    expect(input.value).toBe('12-');
    await userEvent.click(container.querySelector('.rc-input-clear-icon')!);
    expect(input.value).toBe('');
    expect(input.selectionStart).toBe(0);
  });

  it('hides placeholders when an explicit placeholder is removed', () => {
    const onChange = jest.fn();
    const { input, rerender } = renderInput({
      value: '12',
      maskPlaceholder: '_',
      onChange,
    });
    expect(input.value).toBe('12-__');
    rerender(
      <Input
        mask="00-00"
        value="12"
        maskPlaceholder={undefined}
        onChange={onChange}
      />,
    );
    expect(input.value).toBe('12-');
    rerender(<Input mask="00-00" value="12" onChange={onChange} />);
    expect(input.value).toBe('12-');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('supports a placeholder string aligned with the mask', () => {
    const { input } = renderInput({
      mask: '00/00/0000',
      defaultValue: '12',
      maskPlaceholder: 'dd/mm/yyyy',
    });
    expect(input.value).toBe('12/mm/yyyy');
  });

  it('shows an empty mask on focus and hides it on blur', async () => {
    const { input, container } = renderInput({
      allowClear: true,
      maskPlaceholder: '_',
    });
    expect(input.value).toBe('');
    await userEvent.click(input);
    expect(input.value).toBe('__-__');
    expect(container.querySelector('.rc-input-clear-icon-hidden')).toBeTruthy();
    await userEvent.tab();
    expect(input.value).toBe('');
  });

  it.each([
    { maskPlaceholder: undefined, values: ['1', '12-', '12-3', '12-34'] },
    { maskPlaceholder: '_', values: ['1_-__', '12-__', '12-3_', '12-34'] },
  ])(
    'emits formatted values in both event targets without mutating earlier events with placeholder=$maskPlaceholder',
    async ({ maskPlaceholder, values }) => {
      const onChange = jest.fn();
      const { input } = renderInput({ onChange, maskPlaceholder });
      await userEvent.type(input, '1234');
      const events = onChange.mock.calls.map(([event]) => event);
      expect(events.map((event) => event.target.value)).toEqual(values);
      expect(events[0].currentTarget.value).toBe(values[0]);
      expect(events[3].currentTarget.value).toBe('12-34');
    },
  );

  it('preserves controlled values while emitting the requested change', async () => {
    const onChange = jest.fn();
    const { input, rerender } = renderInput({
      value: '12',
      maskPlaceholder: '_',
      onChange,
    });
    await userEvent.click(input);
    input.setSelectionRange(3, 3);
    await userEvent.keyboard('3');
    expect(onChange.mock.calls[0][0].target.value).toBe('12-3_');
    expect(input.value).toBe('12-__');
    expect(input.selectionStart).toBe(3);
    rerender(
      <Input
        mask="00-00"
        maskPlaceholder="_"
        value="1234"
        onChange={onChange}
      />,
    );
    expect(input.value).toBe('12-34');
  });

  it('supports controlled updates through onChange', async () => {
    const Demo = () => {
      const [value, setValue] = React.useState('');
      return (
        <Input
          mask="00-00"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      );
    };
    const { container } = render(<Demo />);
    const input = container.querySelector('input')!;
    await userEvent.type(input, '1234');
    expect(input.value).toBe('12-34');
    expect(input.selectionStart).toBe(5);
  });

  it('shifts the suffix when inserting in the middle and restores the caret', async () => {
    const { input } = renderInput({ defaultValue: '1234' });
    await userEvent.click(input);
    input.setSelectionRange(1, 1);
    await userEvent.keyboard('5');
    expect(input.value).toBe('15-23');
    expect(input.selectionStart).toBe(3);
    expect(input.selectionEnd).toBe(3);
  });

  it('deletes the preceding digit when backspacing over a separator', async () => {
    const { input } = renderInput({
      defaultValue: '1234',
      maskPlaceholder: '_',
    });
    await userEvent.click(input);
    input.setSelectionRange(3, 3);
    await userEvent.keyboard('{Backspace}');
    expect(input.value).toBe('13-4_');
    expect(input.selectionStart).toBe(1);
  });

  it('deletes the next digit when deleting a separator', async () => {
    const { input } = renderInput({
      defaultValue: '1234',
      maskPlaceholder: '_',
    });
    await userEvent.click(input);
    input.setSelectionRange(2, 2);
    await userEvent.keyboard('{Delete}');
    expect(input.value).toBe('12-4_');
    expect(input.selectionStart).toBe(3);
  });

  it('preserves later groups with different character rules when deleting', async () => {
    const { input } = renderInput({
      mask: 'XX-00',
      defaultValue: 'AB-12',
      maskPlaceholder: '_',
    });
    await userEvent.click(input);
    input.setSelectionRange(0, 0);
    await userEvent.keyboard('{Delete}');
    expect(input.value).toBe('B_-12');
    expect(input.selectionStart).toBe(0);
  });

  it('preserves adjacent groups with different rules without placeholders', async () => {
    const { input } = renderInput({
      mask: 'X0',
      maskPlaceholder: null,
      defaultValue: 'A1',
    });
    await userEvent.click(input);
    input.setSelectionRange(0, 0);
    await userEvent.keyboard('{Delete}');
    expect(input.value).toBe('1');
    expect(input.selectionStart).toBe(0);
    await userEvent.keyboard('B');
    expect(input.value).toBe('B1');
  });

  it.each([
    ['X0X 0X0', 'A1B 2C3', '1B 2C3', 'Z1B 2C3'],
    ['0X0', '1A2', 'A2', '9A2'],
  ])(
    'emits the displayed value when deleting from %s without placeholders',
    async (mask, defaultValue, deleted, typed) => {
      const onChange = jest.fn();
      const { input } = renderInput({ mask, defaultValue, onChange });
      await userEvent.click(input);
      input.setSelectionRange(0, 0);
      await userEvent.keyboard('{Delete}');
      expect(input.value).toBe(deleted);
      expect(onChange.mock.calls[0][0].target.value).toBe(deleted);
      await userEvent.keyboard(typed[0]);
      expect(input.value).toBe(typed);
    },
  );

  it('emits the displayed value when deleting a range from mixed groups', async () => {
    const onChange = jest.fn();
    const { input } = renderInput({
      mask: '00X0',
      defaultValue: '12A3',
      onChange,
    });
    await userEvent.click(input);
    input.setSelectionRange(0, 2);
    await userEvent.keyboard('{Backspace}');
    expect(input.value).toBe('A3');
    expect(onChange.mock.calls[0][0].target.value).toBe('A3');
  });

  it('ignores edits that cannot be displayed without placeholders', async () => {
    const onChange = jest.fn();
    const { input } = renderInput({
      mask: '0X0 0',
      defaultValue: 'A 1',
      onChange,
    });
    await userEvent.click(input);
    input.setSelectionRange(2, 2);
    await userEvent.keyboard('{Backspace}');
    expect(input.value).toBe('A 1');
    expect(input.selectionStart).toBe(2);
    expect(onChange).not.toHaveBeenCalled();
  });

  it.each([
    ['00X0', '12A3', [0, 2], 'A3'],
    ['X0X 0X0', 'A1B 2C3', [0, 1], '1B 2C3'],
  ] as const)(
    'pastes a partial value of %s copied from another input without placeholders',
    async (mask, defaultValue, [start, end], partial) => {
      const user = userEvent.setup();
      const { input } = renderInput({ mask, defaultValue });
      await user.click(input);
      input.setSelectionRange(start, end);
      await user.keyboard('{Backspace}');
      expect(input.value).toBe(partial);

      const onChange = jest.fn();
      const { input: pastedInput } = renderInput({ mask, onChange });
      await user.click(pastedInput);
      await user.paste(input.value);
      expect(pastedInput.value).toBe(partial);
      expect(onChange.mock.calls[0][0].target.value).toBe(partial);
    },
  );

  it('discards typed characters that do not fit the next position', async () => {
    const { input } = renderInput({ mask: '00X0' });
    await userEvent.type(input, 'A3');
    expect(input.value).toBe('3');
  });

  it.each([
    ['0X0', '12A3', '1A3'],
    ['X0X', 'AB1C', 'A1C'],
  ])(
    'keeps valid characters when formatting %s with %s without placeholders',
    async (mask, text, expected) => {
      const { input } = renderInput({ mask, defaultValue: text });
      expect(input.value).toBe(expected);
      const { input: controlledInput } = renderInput({
        mask,
        value: text,
        onChange: () => {},
      });
      expect(controlledInput.value).toBe(expected);
      const user = userEvent.setup();
      const { input: pastedInput } = renderInput({ mask });
      await user.click(pastedInput);
      await user.paste(text);
      expect(pastedInput.value).toBe(expected);
    },
  );

  it('preserves explicitly pasted empty positions', async () => {
    const user = userEvent.setup();
    const { input } = renderInput({
      defaultValue: '1234',
      maskPlaceholder: '_',
    });
    await user.click(input);
    input.setSelectionRange(0, 1);
    await user.paste('_');
    expect(input.value).toBe('_2-34');
  });

  it('replaces a selection spanning a separator', async () => {
    const { input } = renderInput({
      mask: '00-0000',
      defaultValue: '123456',
      maskPlaceholder: '_',
    });
    await userEvent.click(input);
    input.setSelectionRange(1, 5);
    await userEvent.keyboard('9');
    expect(input.value).toBe('19-56__');
    expect(input.selectionStart).toBe(3);
  });

  it('handles repeated digits using the selection before the edit', async () => {
    const { input } = renderInput({
      mask: '0000',
      defaultValue: '1111',
      maskPlaceholder: '_',
    });
    await userEvent.click(input);
    input.setSelectionRange(1, 1);
    await userEvent.keyboard('{Backspace}');
    expect(input.value).toBe('111_');
    expect(input.selectionStart).toBe(0);
  });

  it.each(['1234', '12-34', '1x2-3!4'])('supports pasting %s', async (text) => {
    const user = userEvent.setup();
    const { input } = renderInput();
    await user.click(input);
    await user.paste(text);
    expect(input.value).toBe('12-34');
    expect(input.selectionStart).toBe(5);
  });

  it('supports editing without placeholders', async () => {
    const { input } = renderInput({ maskPlaceholder: null });
    await userEvent.type(input, '1234');
    input.setSelectionRange(3, 3);
    await userEvent.keyboard('{Backspace}');
    expect(input.value).toBe('13-4');
    expect(input.selectionStart).toBe(1);
  });

  it('continues a partially filled initial value when typing at the end', async () => {
    const { input } = renderInput({ defaultValue: '12' });
    await userEvent.type(input, '34');
    expect(input.value).toBe('12-34');
  });

  it('recognizes a pasted literal prefix containing digits', async () => {
    const user = userEvent.setup();
    const { input } = renderInput({ mask: ['+39 ', /\d/, /\d/, /\d/, /\d/] });
    await user.click(input);
    await user.paste('+39 1234');
    expect(input.value).toBe('+39 1234');
    expect(input.selectionStart).toBe(8);
  });

  it.each([
    ['555-123-4567', undefined, '(555) 123-4567'],
    ['555-123-4567', '_', '(555) 123-4567'],
    ['555 123 4567', undefined, '(555) 123-4567'],
    ['(555) 123-4567', undefined, '(555) 123-4567'],
  ])(
    'ignores separators %s before a group is started (placeholder=%s)',
    async (text, maskPlaceholder, expected) => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      const { input } = renderInput({
        mask: '(000) 000-0000',
        maskPlaceholder,
        onChange,
      });
      await user.click(input);
      await user.paste(text);
      expect(input.value).toBe(expected);
      expect(onChange.mock.calls[0][0].target.value).toBe(expected);

      const { input: initialInput } = renderInput({
        mask: '(000) 000-0000',
        maskPlaceholder,
        defaultValue: text,
      });
      expect(initialInput.value).toBe(expected);
    },
  );

  it('recognizes a partially written literal prefix', async () => {
    const user = userEvent.setup();
    const { input } = renderInput({ mask: '+1 (000) 000-0000' });
    await user.click(input);
    await user.paste('+1 555-123-4567');
    expect(input.value).toBe('+1 (555) 123-4567');
  });

  it('does not consume input matching a prefix that starts with an editable character', async () => {
    const { input } = renderInput({ mask: '39 000' });
    await userEvent.type(input, '3');
    expect(input.value).toBe('39 3');
  });

  it('handles replacing the value through autofill', () => {
    const { input } = renderInput({ defaultValue: '1234' });
    fireEvent.input(input, {
      inputType: 'insertReplacementText',
      target: { value: '9876', selectionStart: 4, selectionEnd: 4 },
    });
    expect(input.value).toBe('98-76');
  });

  it.each([
    ['00-00', '12-34', '1234'],
    ['(000) 000-0000', '(555) 123-4567', '(555) 1234567'],
  ])(
    'does not treat a programmatic replacement as separator deletion with %s',
    (mask, defaultValue, nextValue) => {
      const onChange = jest.fn();
      const { input } = renderInput({ mask, defaultValue, onChange });
      fireEvent.change(input, { target: { value: nextValue } });
      expect(input.value).toBe(defaultValue);
      expect(onChange).not.toHaveBeenCalled();
    },
  );

  it('handles deletion input events without a keyboard event', async () => {
    const { input } = renderInput({
      defaultValue: '1234',
      maskPlaceholder: '_',
    });
    await userEvent.click(input);
    input.setSelectionRange(3, 3);
    fireEvent.select(input);
    fireEvent.input(input, {
      inputType: 'deleteContentBackward',
      target: { value: '1234', selectionStart: 2, selectionEnd: 2 },
    });
    expect(input.value).toBe('13-4_');
    expect(input.selectionStart).toBe(1);
  });

  it('keeps a zero value editable and clearable', async () => {
    const { input, container } = renderInput({
      defaultValue: 0,
      allowClear: true,
      maskPlaceholder: '_',
    });
    expect(input.value).toBe('0_-__');
    expect(container.querySelector('.rc-input-clear-icon-hidden')).toBeFalsy();
    await userEvent.type(input, '123');
    expect(input.value).toBe('01-23');
  });

  it('does not emit changes for rejected input with a raw initial value', async () => {
    const onChange = jest.fn();
    const { input } = renderInput({ defaultValue: '1234', onChange });
    await userEvent.type(input, 'x');
    expect(input.value).toBe('12-34');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('does not emit changes for rejected input', async () => {
    const onChange = jest.fn();
    const { input } = renderInput({ onChange, maskPlaceholder: '_' });
    await userEvent.type(input, 'a');
    expect(input.value).toBe('__-__');
    expect(onChange).not.toHaveBeenCalled();
    expect(input.selectionStart).toBe(0);
  });

  it('treats placeholder characters as empty positions and warns about conflicts', async () => {
    resetWarned();
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const onChange = jest.fn();
    const { input } = renderInput({
      mask: '00:00',
      maskPlaceholder: '0',
      onChange,
    });
    expect(errorSpy).toHaveBeenCalledWith(
      expect.stringContaining('`maskPlaceholder` contains characters'),
    );
    await userEvent.type(input, '01');
    expect(input.value).toBe('01:00');
    expect(onChange.mock.calls.map(([event]) => event.target.value)).toEqual([
      '01:00',
    ]);

    const onWordChange = jest.fn();
    const { input: wordInput } = renderInput({
      mask: 'aa-aa',
      maskDefinitions: { a: /\w/ },
      maskPlaceholder: '_',
      onChange: onWordChange,
    });
    await userEvent.type(wordInput, '_');
    expect(wordInput.value).toBe('__-__');
    expect(onWordChange).not.toHaveBeenCalled();
    errorSpy.mockRestore();
  });

  it('resolves dynamic masks using the proposed value', async () => {
    const mask: InputMask = ({ value }) =>
      value.replace(/\D/g, '').length > 4 ? '000-000' : '00-00';
    const { input } = renderInput({ mask, maskPlaceholder: null });
    await userEvent.type(input, '12345');
    expect(input.value).toBe('123-45');
    expect(input.selectionStart).toBe(6);
    await userEvent.keyboard('{Backspace}');
    expect(input.value).toBe('12-34');
  });

  it('passes selection to dynamic masks and retains the selected mask after rendering', () => {
    const mask = jest.fn(({ selection }: InputMaskState) =>
      selection?.start === 1 ? 'X0' : '00',
    );
    const { input } = renderInput({ mask, maskPlaceholder: '_' });
    fireEvent.change(input, {
      target: { value: 'A', selectionStart: 1, selectionEnd: 1 },
    });
    expect(mask).toHaveBeenCalledWith({
      value: 'A',
      selection: { start: 1, end: 1 },
    });
    expect(input.value).toBe('A_');
  });

  it('supports changing the mask and placeholder through props', () => {
    const { input, rerender } = renderInput({ defaultValue: '1234' });
    rerender(<Input mask="0-000" defaultValue="1234" maskPlaceholder="#" />);
    expect(input.value).toBe('1-234');
    rerender(<Input defaultValue="1234" />);
    expect(input.value).toBe('1234');
  });

  it('clears the value and keeps focus at the first editable position', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    const onClear = jest.fn();
    const { input, container } = renderInput({
      mask: '+00',
      defaultValue: '12',
      maskPlaceholder: '_',
      allowClear: true,
      onChange,
      onClear,
    });
    await user.click(container.querySelector('.rc-input-clear-icon')!);
    expect(onChange.mock.calls[0][0].target.value).toBe('');
    expect(onClear).toHaveBeenCalledTimes(1);
    expect(document.activeElement).toBe(input);
    expect(input.value).toBe('+__');
    expect(input.selectionStart).toBe(1);
    expect(container.querySelector('.rc-input-clear-icon-hidden')).toBeTruthy();
  });

  it.each(['disabled', 'readOnly'] as const)(
    'preserves %s behavior',
    async (prop) => {
      const onChange = jest.fn();
      const { input } = renderInput({
        [prop]: true,
        defaultValue: '1234',
        onChange,
      });
      await userEvent.type(input, '5');
      expect(input.value).toBe('12-34');
      expect(onChange).not.toHaveBeenCalled();
    },
  );

  it('does not mask unsupported input types or forward mask props to the DOM', () => {
    const { input } = renderInput({
      type: 'email',
      defaultValue: 'test@example.com',
      maskDefinitions: { H: /[0-9A-F]/ },
    });
    expect(input.value).toBe('test@example.com');
    expect(input.hasAttribute('mask')).toBe(false);
    expect(input.hasAttribute('maskDefinitions')).toBe(false);
    expect(input.hasAttribute('maskPlaceholder')).toBe(false);
  });

  it('supports native text input types with selection', () => {
    const { input } = renderInput({ type: 'tel', defaultValue: '1234' });
    expect(input.value).toBe('12-34');
  });

  it('supports maxLength without preventing input into placeholders', async () => {
    const { input } = renderInput({ maxLength: 4, maskPlaceholder: '_' });
    await userEvent.type(input, '1234');
    expect(input.value).toBe('12-3');
  });

  it('supports maxLength=0', async () => {
    const onChange = jest.fn();
    const { input } = renderInput({ maxLength: 0, onChange });
    await userEvent.type(input, '12');
    expect(input.value).toBe('');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('applies maxLength when a dynamic mask returns an empty pattern', async () => {
    const { input } = renderInput({ mask: () => '', maxLength: 3 });
    await userEvent.type(input, '123456');
    expect(input.value).toBe('123');
  });

  it('applies count.exceedFormatter to the formatted value', async () => {
    const onChange = jest.fn();
    const { input } = renderInput({
      maskPlaceholder: '_',
      count: {
        max: 3,
        strategy: (value) => value.replace(/\D/g, '').length,
        exceedFormatter: (value, { max }) => {
          let digits = 0;
          return value.replace(/\d/g, (digit) =>
            (digits += 1) > max ? '' : digit,
          );
        },
      },
      onChange,
    });
    await userEvent.click(input);
    await userEvent.keyboard('12');
    expect(input.selectionStart).toBe(3);
    await userEvent.keyboard('34');
    expect(input.value).toBe('12-3_');
    expect(input.selectionStart).toBe(4);
    expect(onChange.mock.calls.map(([event]) => event.target.value)).toEqual([
      '1_-__',
      '12-__',
      '12-3_',
    ]);
  });

  it('preserves count and semantic styling', () => {
    const { input, container } = renderInput({
      defaultValue: '12',
      maskPlaceholder: '_',
      showCount: true,
      classNames: { input: 'masked-input' },
      styles: { input: { color: 'red' } },
    });
    expect(input.className).toContain('masked-input');
    expect(input.style.color).toBe('red');
    expect(
      container.querySelector('.rc-input-show-count-suffix')?.textContent,
    ).toBe('5');
  });

  it('preserves input refs and event callbacks', async () => {
    const ref = React.createRef<InputRef>();
    const onSelect = jest.fn();
    const onBeforeInput = jest.fn();
    const { input } = renderInput({
      ref,
      onSelect,
      onBeforeInput,
      maskPlaceholder: '_',
    });
    expect(ref.current?.input).toBe(input);
    await userEvent.click(input);
    await userEvent.keyboard('{ArrowRight}');
    expect(onSelect).toHaveBeenCalled();
    fireEvent.keyPress(input, { key: '1', charCode: 49, which: 49 });
    expect(onBeforeInput).toHaveBeenCalled();
  });

  it('defers masking during composition and normalizes once at composition end', () => {
    const onChange = jest.fn();
    const onCompositionStart = jest.fn();
    const onCompositionEnd = jest.fn();
    const { input } = renderInput({
      mask: [/[\u4e00-\u9fff]/, /[\u4e00-\u9fff]/, '-', /\d/, /\d/],
      maskPlaceholder: '_',
      onChange,
      onCompositionStart,
      onCompositionEnd,
    });
    fireEvent.compositionStart(input);
    fireEvent.change(input, {
      target: { value: '你', selectionStart: 1, selectionEnd: 1 },
    });
    expect(input.value).toBe('你');
    fireEvent.compositionEnd(input, {
      target: { value: '你', selectionStart: 1, selectionEnd: 1 },
    });
    expect(input.value).toBe('你_-__');
    fireEvent.input(input, { target: { value: '你_-__' } });
    expect(onChange.mock.calls.map(([event]) => event.target.value)).toEqual([
      '你',
      '你_-__',
    ]);
    expect(onCompositionStart).toHaveBeenCalledTimes(1);
    expect(onCompositionEnd).toHaveBeenCalledTimes(1);
  });

  it('does not restore the old selection on unrelated rerenders', async () => {
    const { input, rerender } = renderInput();
    await userEvent.type(input, '12');
    input.setSelectionRange(0, 1);
    rerender(<Input mask="00-00" className="updated" />);
    expect(input.selectionStart).toBe(0);
    expect(input.selectionEnd).toBe(1);
  });

  it('restores the caret inside a shadow root', () => {
    const host = document.createElement('div');
    document.body.appendChild(host);
    const container = host
      .attachShadow({ mode: 'open' })
      .appendChild(document.createElement('div'));
    const { unmount } = render(<Input mask="00-00" defaultValue="1234" />, {
      container,
    });
    const input = container.querySelector('input')!;
    act(() => input.focus());
    input.setSelectionRange(1, 1);
    fireEvent.keyDown(input, { key: '5' });
    fireEvent.change(input, {
      target: { value: '152-34', selectionStart: 2, selectionEnd: 2 },
    });
    expect(input.value).toBe('15-23');
    expect(input.selectionStart).toBe(3);
    unmount();
    host.remove();
  });

  it('formats long raw values in linear time', () => {
    const letter = /[a-z]/;
    const test = jest.spyOn(letter, 'test');
    const { input } = renderInput({
      mask: 'X-0',
      maskDefinitions: { X: letter },
      value: `${'1'.repeat(2000)}a`,
      onChange: () => {},
    });
    expect(input.value).toBe('a-');
    expect(test.mock.calls.length).toBeLessThan(20000);
  });
});
