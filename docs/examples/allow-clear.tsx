import type { ChangeEvent, FC } from 'react';
import React, { useRef, useState } from 'react';
import '../../assets/index.less';
import type { InputRef } from 'rc-input';
import Input from 'rc-input';

const Demo: FC = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const ref = useRef<InputRef>(null);

  return (
    <div>
      <Input
        prefixCls="rc-input"
        allowClear
        clearIcon="✖"
        placeholder="uncontrolled"
        ref={ref}
      />
      <br />
      <br />
      <Input
        prefixCls="rc-input"
        allowClear
        clearIcon="✖"
        onChange={handleChange}
        value={value}
        placeholder="controlled"
      />
    </div>
  );
};

export default Demo;
