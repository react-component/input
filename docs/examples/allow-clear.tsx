import type { ChangeEvent, FC } from 'react';
import React, { useState } from 'react';
import '../../assets/index.less';
import Input from '@rc-component/input';

const Demo: FC = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Input prefixCls="rc-input" allowClear placeholder="uncontrolled" />
      <br />
      <br />
      <Input
        prefixCls="rc-input"
        allowClear={{ clearIcon: '✖' }}
        onChange={handleChange}
        value={value}
        placeholder="controlled"
      />
    </div>
  );
};

export default Demo;
