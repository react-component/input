import BaseInput from 'rc-input';
import type { FC } from 'react';
import React from 'react';
import '../../assets/index.less';

const Demo: FC = () => {
  return (
    <div>
      <BaseInput
        prefixCls="rc-input"
        inputElement={<input />}
        addonBefore="http://"
      />
      <br />
      <br />
      <BaseInput
        prefixCls="rc-input"
        inputElement={<input />}
        addonAfter="MB"
      />
    </div>
  );
};

export default Demo;
