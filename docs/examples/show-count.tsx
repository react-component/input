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
      <Input
        prefixCls="rc-input"
        defaultValue="👨‍👩‍👧‍👦"
        count={{
          show: true,
          strategy: (val) =>
            [...new (Intl as any).Segmenter().segment(val)].length,
        }}
      />
    </div>
  );
};

export default Demo;
