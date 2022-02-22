import type { ChangeEvent, FC } from 'react';
import React, { useState } from 'react';
import '../../assets/index.less';
import Input from 'rc-input';

const Demo: FC = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Input
      prefixCls="rc-input"
      allowClear
      clearIcon="✖"
      onChange={handleChange}
      value={value}
    />
  );
};

export default Demo;
