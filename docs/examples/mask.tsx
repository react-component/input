import React from 'react';
import Input from '@rc-component/input';
import type { InputMask } from '@rc-component/input';
import '../../assets/index.less';

const cardMask: InputMask = ({ value }) =>
  value.replace(/\D/g, '').startsWith('3')
    ? '0000 000000 00000'
    : '0000 0000 0000 0000';

export default function Demo() {
  const [card, setCard] = React.useState('');

  return (
    <div style={{ display: 'grid', gap: 16, maxWidth: 360 }}>
      <div>
        <label htmlFor="mask-card">Card number (dynamic mask)</label>
        <Input
          id="mask-card"
          mask={cardMask}
          value={card}
          onChange={(event) => setCard(event.target.value)}
          allowClear
          inputMode="numeric"
        />
      </div>
      <div>Formatted value: {card || '(empty)'}</div>
      <div>
        <label htmlFor="mask-code">
          Letters, digits and alphanumeric characters
        </label>
        <Input id="mask-code" mask="XX-00-**" maskPlaceholder="#" allowClear />
      </div>
      <div>
        <label htmlFor="mask-definitions">
          Custom tokens: a = letter, 9 = digit
        </label>
        <Input
          id="mask-definitions"
          mask="aa-99"
          maskDefinitions={{ a: /[a-zA-Z]/, '9': /[0-9]/ }}
          allowClear
        />
      </div>
      <div>
        <label htmlFor="mask-date">Date with a descriptive placeholder</label>
        <Input
          id="mask-date"
          mask="00/00/0000"
          maskPlaceholder="dd/mm/yyyy"
          inputMode="numeric"
        />
      </div>
      <div>
        <label htmlFor="mask-custom">Custom pattern without placeholders</label>
        <Input
          id="mask-custom"
          mask={[/[A-Z]/, /[A-Z]/, ' ', /\d/, /\d/, /\d/]}
          maskPlaceholder={null}
        />
      </div>
    </div>
  );
}
