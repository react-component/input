import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Input from '../src';

it('enter', () => {
  const onFocus = jest.fn();
  const onBlur = jest.fn();
  const { container, getByText } = render(
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('111');
      }}
    >
      <Input onFocus={onFocus} onBlur={onBlur} />
      <button type="submit">Submit</button>
    </form>,
  );
  const inputEl = container.querySelector('input')!;
  fireEvent.focus(inputEl);
  fireEvent.keyDown(inputEl, { key: 'Enter' });
  fireEvent.keyDown(inputEl, { key: 'Enter' });

  // fireEvent.submit(inputEl);
  // fireEvent.submit(inputEl);

  // fireEvent.click(getByText('Submit'));
});
