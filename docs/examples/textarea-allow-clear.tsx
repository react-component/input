/* eslint-disable no-console */
import { TextArea } from '@rc-component/input';
import React, { useState, type ChangeEvent } from 'react';

export default function App() {
  const [value, setValue] = useState('hello\nworld');

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value: currentValue },
    } = e;
    setValue(currentValue);
  };

  return (
    <div>
      <p>Uncontrolled</p>
      <TextArea autoSize allowClear />
      <p>controlled</p>
      <TextArea value={value} onChange={onChange} allowClear />
    </div>
  );
}
