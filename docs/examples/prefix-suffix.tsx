import Input from '@rc-component/input';
import type { FC } from 'react';
import React from 'react';
import '../../assets/index.less';

const Demo: FC = () => {
  return (
    <div>
      <Input prefixCls="rc-input" prefix="prefix" />
      <br />
      <br />
      <Input prefixCls="rc-input" suffix="suffix" />
    </div>
  );
};

export default Demo;
