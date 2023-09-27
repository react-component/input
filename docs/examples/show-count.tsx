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
      <h1>Native</h1>
      <Input prefixCls="rc-input" showCount defaultValue="👨‍👩‍👧‍👦" />
      <Input prefixCls="rc-input" showCount defaultValue="👨‍👩‍👧‍👦" maxLength={20} />
      <h1>Count</h1>
      <h4>Only Max</h4>
      <Input
        placeholder="count.max"
        prefixCls="rc-input"
        defaultValue="🔥"
        count={{
          show: true,
          max: 5,
        }}
      />
      <h4>Customize strategy</h4>
      <Input
        placeholder="Emoji count 1"
        prefixCls="rc-input"
        defaultValue="🔥"
        count={{
          show: true,
          max: 5,
          strategy: (val) =>
            [...new (Intl as any).Segmenter().segment(val)].length,
        }}
      />
      <h4>Customize exceedFormatter</h4>
      <Input
        placeholder="Emoji count 1"
        prefixCls="rc-input"
        defaultValue="🔥"
        count={{
          show: true,
          max: 5,
          exceedFormatter: (val, { max }) => {
            const segments = [...new (Intl as any).Segmenter().segment(val)];

            return segments
              .filter((seg) => seg.index + seg.segment.length <= max)
              .map((seg) => seg.segment)
              .join('');
          },
        }}
      />
    </div>
  );
};

export default Demo;
