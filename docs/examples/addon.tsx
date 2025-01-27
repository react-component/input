import Input from '@rc-component/input';
import type { FC } from 'react';
import React from 'react';
import '../../assets/index.less';

const Demo: FC = () => {
  return (
    <div>
      <Input prefixCls="rc-input" addonBefore="http://" />
      <br />
      <br />
      <Input prefixCls="rc-input" addonAfter="MB" />
    </div>
  );
};

export default Demo;
