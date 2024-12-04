import Dialog from 'rc-dialog';
import Input from 'rc-input';
import type { FC } from 'react';
import React from 'react';
import '../../assets/index.less';

const Demo: FC = () => {
  const [vis, setVis] = React.useState(false);
  return (
    <div>
      normal:
      <Input placeholder="input" autoFocus />
      <br />
      <br />
      dialog:
      <button onClick={() => setVis((pre) => !pre)}>
        toggle autoFocus input{' '}
      </button>
      <Dialog
        visible={vis}
        onClose={() => setVis(false)}
        style={{ width: 600 }}
        title={<div>第二个弹框</div>}
      >
        <Input placeholder="input" autoFocus />
      </Dialog>
    </div>
  );
};

export default Demo;
