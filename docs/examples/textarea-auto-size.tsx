/* eslint-disable no-console */
import Input, { type TextAreaProps } from '@rc-component/input';
import React, { useState, type ChangeEvent } from 'react';

const TextArea = Input.TextArea;

export default function App() {
  const [value, setValue] = useState('hello\nworld');

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value: currentValue },
    } = e;
    setValue(currentValue);
  };

  const onResize: TextAreaProps['onResize'] = ({ width, height }) => {
    console.log(`size is changed, width:${width} height:${height}`);
  };

  return (
    <div>
      <p>when set to true</p>
      <TextArea
        autoSize
        onResize={onResize}
        value={value}
        onChange={onChange}
      />
      <p>when set to object of minRows and maxRows</p>
      <TextArea
        autoSize={{ minRows: 5, maxRows: 15 }}
        onResize={onResize}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
