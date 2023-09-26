import Input from 'rc-input';
import type { FC } from 'react';
import React from 'react';
import '../../assets/index.less';

const Demo: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        alignItems: 'start',
      }}
    >
      <Input prefixCls="rc-input" showCount defaultValue="👨‍👩‍👧‍👦" />
      <Input prefixCls="rc-input" showCount defaultValue="👨‍👩‍👧‍👦" maxLength={20} />
    </div>
  );
};

export default Demo;
