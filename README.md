<div align="center">
  <h1>@rc-component/input</h1>
  <p><sub><a href="https://ant.design"><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /></a> Part of the Ant Design ecosystem.</sub></p>
  <p>📦 ⌨️ Low-level React input primitives for building polished text fields and textareas.</p>

  <p>
    <a href="https://npmjs.org/package/@rc-component/input"><img alt="NPM version" src="https://img.shields.io/npm/v/@rc-component/input.svg?style=flat-square"></a>
    <a href="https://npmjs.org/package/@rc-component/input"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@rc-component/input.svg?style=flat-square"></a>
    <a href="https://github.com/react-component/input/actions/workflows/react-component-ci.yml"><img alt="build status" src="https://github.com/react-component/input/actions/workflows/react-component-ci.yml/badge.svg"></a>
    <a href="https://app.codecov.io/gh/react-component/input"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/react-component/input/master.svg?style=flat-square"></a>
    <a href="https://bundlephobia.com/package/@rc-component/input"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@rc-component/input?style=flat-square"></a>
    <a href="https://github.com/umijs/dumi"><img alt="dumi" src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square"></a>
  </p>
</div>

<p align="center">English | <a href="./README.zh-CN.md">简体中文</a></p>

## Highlights

- Composable `Input`, `TextArea`, and `BaseInput` primitives.
- Affix, addon, clear icon, prefix, suffix, and character count support.
- Autosizing textarea with resize callbacks and imperative refs.
- TypeScript definitions and semantic `classNames` / `styles` slots.
- Used by Ant Design as the shared input foundation.

## Install

```bash
npm install @rc-component/input
```

## Usage

```tsx | pure
import Input from '@rc-component/input';

export default () => <Input allowClear placeholder="Type something" />;
```

```tsx | pure
import { TextArea } from '@rc-component/input';

export default () => <TextArea autoSize showCount maxLength={100} />;
```

## Examples

Run the local dumi site:

```bash
npm install
npm start
```

Then open `http://localhost:8000`.

## API

### Input

| Property        | Type                                                       | Default    | Description                                                     |
| --------------- | ---------------------------------------------------------- | ---------- | --------------------------------------------------------------- |
| addonAfter      | `ReactNode`                                                | -          | Element displayed after the input.                              |
| addonBefore     | `ReactNode`                                                | -          | Element displayed before the input.                             |
| allowClear      | `boolean \| { disabled?: boolean; clearIcon?: ReactNode }` | `false`    | Show a clear button for the current value.                      |
| className       | `string`                                                   | -          | Class name for the input element.                               |
| classNames      | `InputProps['classNames']`                                 | -          | Semantic class names for input slots.                           |
| count           | `CountConfig`                                              | -          | Custom count strategy, limit, visibility, and exceed formatter. |
| defaultValue    | `string \| number \| readonly string[] \| bigint`          | -          | Initial input value.                                            |
| disabled        | `boolean`                                                  | `false`    | Disable the input.                                              |
| htmlSize        | `number`                                                   | -          | Native input `size` attribute.                                  |
| maxLength       | `number`                                                   | -          | Native input `maxLength` attribute.                             |
| mask            | `InputMask`                                                | -          | String, array or dynamic input mask.                            |
| maskDefinitions | `InputMaskDefinitions`                                     | -          | Custom character rules that override or extend the defaults.    |
| maskPlaceholder | `string \| null`                                           | -          | Placeholder for unfilled mask positions.                        |
| prefix          | `ReactNode`                                                | -          | Prefix content inside the input wrapper.                        |
| prefixCls       | `string`                                                   | `rc-input` | Class name prefix.                                              |
| showCount       | `boolean \| { formatter: ShowCountFormatter }`             | `false`    | Show character count. Prefer `count.show` for new code.         |
| styles          | `InputProps['styles']`                                     | -          | Semantic styles for input slots.                                |
| suffix          | `ReactNode`                                                | -          | Suffix content inside the input wrapper.                        |
| type            | `InputProps['type']`                                       | `text`     | Native input type. Use `TextArea` for textarea behavior.        |
| value           | `string \| number \| readonly string[] \| bigint`          | -          | Controlled input value.                                         |
| onChange        | `React.ChangeEventHandler<HTMLInputElement>`               | -          | Triggered when the value changes.                               |
| onClear         | `() => void`                                               | -          | Triggered when the clear button is clicked.                     |
| onPressEnter    | `React.KeyboardEventHandler<HTMLInputElement>`             | -          | Triggered when Enter is pressed.                                |

#### Input masks

`mask` supports a string pattern, an array of literal strings and single-character regular expressions, or a pure function `(state: InputMaskState) => InputMaskPattern`.

- String tokens: `0` accepts an ASCII digit, `X` a Latin letter (`a-z`, `A-Z`), and `*` either. Other characters are fixed separators. Escape a token with a backslash to use it literally, for example `mask="\X000"`.
- `maskDefinitions` maps single-character keys to single-character regular expressions. Custom rules extend the defaults and override matching keys; `null` makes that token literal. Backslash is reserved for escaping. Rules also apply to string patterns returned by dynamic masks. Regular expressions are not mutated; stateful `g` and `y` flags are ignored, while other flags are preserved.
- Array strings are always literals, including `0`, `X` and `*`. Use regular expressions for custom character rules, including non-Latin letters.
- Dynamic functions receive the proposed input text and `selection: { start, end }`. Selection offsets refer to that text; `selection` is `null` when formatting an initial or externally updated value. Keep the function pure.
- No placeholders are shown when `maskPlaceholder` is omitted, `undefined`, `null` or `''`. Set a character such as `_` to show unfilled positions. A single character is repeated; a longer string supplies placeholders at the corresponding pattern positions, counted after escaping, for example `dd/mm/yyyy` for `00/00/0000`. Positions beyond a shorter string use `_`. Placeholder characters are reserved for empty positions: a character accepted by its own position cannot be entered, and a development warning is shown.
- Separators in typed or pasted text end the current group only after one of its positions is filled; for example, `(000) 000-0000` formats `555-123-4567` as `(555) 123-4567`. Typed characters that do not fit the next position are discarded, while pasted, dropped and autofilled text is read like a value, so a copied value keeps its characters. Without visible placeholders, edits that cannot be displayed unambiguously are ignored.
- An empty input displays its fixed prefix and any configured mask placeholders while focused and becomes empty again on blur. `value` and `defaultValue` may contain raw or formatted text. `onChange` keeps the usual event contract: both `target.value` and `currentTarget.value` contain formatted text, including visible placeholders. Clearing emits `''`.
- Masking supports `text`, `search`, `tel`, `url` and `password` inputs. Other input types ignore `mask`. During IME composition, input and change events stay unformatted until composition ends.
- With a mask, `maxLength` limits the pattern's displayed length, including literals and placeholders. Character counting uses the displayed text, including placeholders. `count.exceedFormatter` receives the formatted value, and its result is formatted again.

```tsx | pure
import Input from '@rc-component/input';

<Input mask="XX-00-**" maskPlaceholder="#" />;
<Input
  mask="aa-99-##"
  maskDefinitions={{ a: /[a-zA-Z]/, '9': /[0-9]/, '#': /[a-zA-Z0-9]/ }}
/>;
<Input mask="0-HH" maskDefinitions={{ '0': null, H: /[0-9A-F]/i }} />;
<Input mask={[/[A-Z]/, /[A-Z]/, '-', /\d/, /\d/]} maskPlaceholder={null} />;
<Input
  mask={({ value }) =>
    value.replace(/\D/g, '').length > 4 ? '000-000' : '00-00'
  }
  maskPlaceholder={null}
/>;
```

### TextArea

| Property     | Type                                                       | Default       | Description                                                     |
| ------------ | ---------------------------------------------------------- | ------------- | --------------------------------------------------------------- |
| allowClear   | `boolean \| { disabled?: boolean; clearIcon?: ReactNode }` | `false`       | Show a clear button for the current value.                      |
| autoSize     | `boolean \| { minRows?: number; maxRows?: number }`        | `false`       | Auto resize height by content.                                  |
| className    | `string`                                                   | -             | Class name for the textarea.                                    |
| classNames   | `TextAreaProps['classNames']`                              | -             | Semantic class names for textarea slots.                        |
| count        | `CountConfig`                                              | -             | Custom count strategy, limit, visibility, and exceed formatter. |
| defaultValue | `string \| number \| readonly string[] \| bigint`          | -             | Initial textarea value.                                         |
| maxLength    | `number`                                                   | -             | Native textarea `maxLength` attribute.                          |
| prefixCls    | `string`                                                   | `rc-textarea` | Class name prefix.                                              |
| showCount    | `boolean \| { formatter: ShowCountFormatter }`             | `false`       | Show character count. Prefer `count.show` for new code.         |
| style        | `React.CSSProperties`                                      | -             | Inline styles for the textarea.                                 |
| styles       | `TextAreaProps['styles']`                                  | -             | Semantic styles for textarea slots.                             |
| suffix       | `ReactNode`                                                | -             | Suffix content inside the textarea wrapper.                     |
| value        | `string \| number \| readonly string[] \| bigint`          | -             | Controlled textarea value.                                      |
| onChange     | `React.ChangeEventHandler<HTMLTextAreaElement>`            | -             | Triggered when the value changes.                               |
| onClear      | `() => void`                                               | -             | Triggered when the clear button is clicked.                     |
| onPressEnter | `React.KeyboardEventHandler<HTMLTextAreaElement>`          | -             | Triggered when Enter is pressed.                                |
| onResize     | `(size: { width: number; height: number }) => void`        | -             | Triggered when textarea size changes.                           |

### Refs

```tsx | pure
import type { InputRef, TextAreaRef } from '@rc-component/input';

function focusInput(inputRef: InputRef | null) {
  inputRef?.focus();
}

function blurTextArea(textareaRef: TextAreaRef | null) {
  textareaRef?.blur();
}
```

| Ref           | Methods                                                                                 |
| ------------- | --------------------------------------------------------------------------------------- |
| `InputRef`    | `focus(options)`, `blur()`, `select()`, `setSelectionRange()`, `input`, `nativeElement` |
| `TextAreaRef` | `focus()`, `blur()`, `resizableTextArea`, `nativeElement`                               |

## Development

```bash
npm install
npm start
npm test
npm run tsc
npm run compile
npm run build
```

The dumi site runs at `http://localhost:8000` by default.

## Release

```bash
npm run prepublishOnly
```

The release flow is handled by `@rc-component/np` through the `rc-np` command after the package build.

## License

@rc-component/input is released under the [MIT](./LICENSE) license.
