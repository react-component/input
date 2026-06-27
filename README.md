<div align="center">
  <h1>@rc-component/input</h1>
  <p><sub>Part of the Ant Design ecosystem.</sub></p>
  <img alt="Ant Design" height="32" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
  <p>⌨️ Low-level React input primitives for building polished text fields and textareas.</p>
</div>


<div align="center">

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![build status][github-actions-image]][github-actions-url]
[![Codecov][codecov-image]][codecov-url]
[![bundle size][bundlephobia-image]][bundlephobia-url]
[![dumi][dumi-image]][dumi-url]

</div>


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

Run the examples locally:

```bash
npm install
npm start
```

Then open the dumi dev server in your browser.

## API

### Input

| Property     | Type                                                       | Default    | Description                                                     |
| ------------ | ---------------------------------------------------------- | ---------- | --------------------------------------------------------------- |
| addonAfter   | `ReactNode`                                                | -          | Element displayed after the input.                              |
| addonBefore  | `ReactNode`                                                | -          | Element displayed before the input.                             |
| allowClear   | `boolean \| { disabled?: boolean; clearIcon?: ReactNode }` | `false`    | Show a clear button for the current value.                      |
| className    | `string`                                                   | -          | Class name for the input element.                               |
| classNames   | `InputProps['classNames']`                                 | -          | Semantic class names for input slots.                           |
| count        | `CountConfig`                                              | -          | Custom count strategy, limit, visibility, and exceed formatter. |
| defaultValue | `string \| number \| readonly string[] \| bigint`          | -          | Initial input value.                                            |
| disabled     | `boolean`                                                  | `false`    | Disable the input.                                              |
| htmlSize     | `number`                                                   | -          | Native input `size` attribute.                                  |
| maxLength    | `number`                                                   | -          | Native input `maxLength` attribute.                             |
| prefix       | `ReactNode`                                                | -          | Prefix content inside the input wrapper.                        |
| prefixCls    | `string`                                                   | `rc-input` | Class name prefix.                                              |
| showCount    | `boolean \| { formatter: ShowCountFormatter }`             | `false`    | Show character count. Prefer `count.show` for new code.         |
| styles       | `InputProps['styles']`                                     | -          | Semantic styles for input slots.                                |
| suffix       | `ReactNode`                                                | -          | Suffix content inside the input wrapper.                        |
| type         | `InputProps['type']`                                       | `text`     | Native input type. Use `TextArea` for textarea behavior.        |
| value        | `string \| number \| readonly string[] \| bigint`          | -          | Controlled input value.                                         |
| onChange     | `React.ChangeEventHandler<HTMLInputElement>`               | -          | Triggered when the value changes.                               |
| onClear      | `() => void`                                               | -          | Triggered when the clear button is clicked.                     |
| onPressEnter | `React.KeyboardEventHandler<HTMLInputElement>`             | -          | Triggered when Enter is pressed.                                |

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
import React from 'react';
import Input, {
  TextArea,
  type InputRef,
  type TextAreaRef,
} from '@rc-component/input';

const inputRef = React.useRef<InputRef>(null);
const textareaRef = React.useRef<TextAreaRef>(null);

inputRef.current?.focus();
textareaRef.current?.blur();
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

## Release

```bash
npm run prepublishOnly
```

The release flow is handled by `@rc-component/np` through the `rc-np` command after the package build.

## License

@rc-component/input is released under the [MIT](./LICENSE.md) license.

[npm-image]: https://img.shields.io/npm/v/@rc-component/input.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@rc-component/input
[github-actions-image]: https://github.com/react-component/input/actions/workflows/react-component-ci.yml/badge.svg
[github-actions-url]: https://github.com/react-component/input/actions/workflows/react-component-ci.yml
[codecov-image]: https://img.shields.io/codecov/c/github/react-component/input/master.svg?style=flat-square
[codecov-url]: https://app.codecov.io/gh/react-component/input
[download-image]: https://img.shields.io/npm/dm/@rc-component/input.svg?style=flat-square
[download-url]: https://npmjs.org/package/@rc-component/input
[bundlephobia-url]: https://bundlephobia.com/package/@rc-component/input
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/@rc-component/input?style=flat-square
[dumi-url]: https://github.com/umijs/dumi
[dumi-image]: https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square
