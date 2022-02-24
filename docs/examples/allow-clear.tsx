import type { ChangeEvent, FC } from 'react';
import React, { useState } from 'react';
import '../../assets/index.less';
import Input from 'rc-input';

const Demo: FC = () => {
  const [value, setValue] = useState<string>('');
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Input
        prefixCls="rc-input"
        allowClear
        clearIcon="✖"
        placeholder="uncontrolled"
        disabled={disabled}
        onChange={(e) => setDisabled(e.target.value.length > 5)}
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
