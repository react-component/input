/* eslint-disable no-console */
import { TextArea, type TextAreaProps } from '@rc-component/input';
import React, { useState, type ChangeEvent, type KeyboardEvent } from 'react';

export default function App() {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value: currentValue },
    } = e;
    console.log(e.target.value);
    setValue(currentValue);
  };

  const onResize: TextAreaProps['onResize'] = ({ width, height }) => {
    console.log(`size is changed, width:${width} height:${height}`);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onPressEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    console.log(`enter key is pressed`);
  };

  return (
    <div>
      <TextArea
        prefixCls="custom-textarea"
        onPressEnter={onPressEnter}
        onResize={onResize}
        value={value}
        onChange={onChange}
        autoFocus
        onFocus={() => console.log('focus')}
      />
    </div>
  );
}
