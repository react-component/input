import Input from 'rc-input';
import type { FC } from 'react';
import React from 'react';
import '../../assets/index.less';

const Demo: FC = () => (
  <>
    <Input prefixCls="rc-input" style={{ marginLeft: 200 }} allowCopy />
    <br />
    <br />
    <Input prefixCls="rc-input" addonAfter="MB" allowCopy />
  </>
);

export default Demo;
