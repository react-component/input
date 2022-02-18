import BaseInput from 'rc-input';
import type { ChangeEvent, FC } from 'react';
import React, { useState } from 'react';
import '../../assets/index.less';

const Demo: FC = () => {
  const [value, setValue] = useState<string>('');

  const handleReset = () => {
    setValue('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <BaseInput
      prefixCls="rc-input"
      allowClear
      clearIcon="✖"
      inputElement={<input onChange={handleChange} />}
      value={value}
      handleReset={handleReset}
    />
  );
};

export default Demo;
