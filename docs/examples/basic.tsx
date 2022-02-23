import type { FC } from 'react';
import React from 'react';
import '../../assets/index.less';
import Input from 'rc-input';

const Demo: FC = () => {
  return <Input onChange={(e) => console.log(e.target.value)} />;
};

export default Demo;
