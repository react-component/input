import Input from '@rc-component/input';
import type { FC } from 'react';
import React from 'react';
import '../../assets/index.less';

const sharedHeadStyle: React.CSSProperties = {
  margin: 0,
  padding: 0,
};

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
      <h3 style={sharedHeadStyle}>Native</h3>
      <Input prefixCls="rc-input" showCount defaultValue="👨‍👩‍👧‍👦" />
      <Input prefixCls="rc-input" showCount defaultValue="👨‍👩‍👧‍👦" maxLength={20} />
      <h3 style={sharedHeadStyle}>Count</h3>
      <h4 style={sharedHeadStyle}>Only Max</h4>
      <Input
        placeholder="count.max"
        prefixCls="rc-input"
        defaultValue="🔥"
        count={{
          show: true,
          max: 5,
        }}
      />
      <h4 style={sharedHeadStyle}>Customize strategy</h4>
      <Input
        placeholder="Emoji count 1"
        prefixCls="rc-input"
        defaultValue="🔥"
        count={{
          show: true,
          max: 5,
          strategy: (val) => [...new Intl.Segmenter().segment(val)].length,
        }}
      />
      <h4 style={sharedHeadStyle}>Customize exceedFormatter</h4>
      <Input
        placeholder="Emoji count 1"
        prefixCls="rc-input"
        defaultValue="🔥"
        count={{
          show: true,
          max: 5,
          exceedFormatter: (val, { max }) => {
            const segments = [...new Intl.Segmenter().segment(val)];

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
