<div align="center">
  <h1>@rc-component/input</h1>
  <p><sub><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /> Ant Design 生态的一部分。</sub></p>
  <p>📦 ⌨️ React 输入框基础组件，支持前后缀、清除按钮、计数和组合输入。</p>
</div>

<p align="center"><a href="./README.md">English</a> | 简体中文</p>

<div align="center">

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![build status][github-actions-image]][github-actions-url]
[![Codecov][codecov-image]][codecov-url]
[![bundle size][bundlephobia-image]][bundlephobia-url]
[![dumi][dumi-image]][dumi-url]

</div>

## 特性

- 提供可组合的 `Input`、`TextArea` 和 `BaseInput` 基础组件。
- 支持前后缀、附加内容、清除图标和字符计数。
- `TextArea` 支持自适应高度、尺寸变化回调和命令式 ref。
- 提供 TypeScript 类型定义和语义化 `classNames` / `styles` 插槽。
- 被 Ant Design 用作共享的 input 基础能力。

## 安装

```bash
npm install @rc-component/input
```

## 使用

```tsx | pure
import Input from '@rc-component/input';

export default () => <Input allowClear placeholder="Type something" />;
```

```tsx | pure
import { TextArea } from '@rc-component/input';

export default () => <TextArea autoSize showCount maxLength={100} />;
```

## 示例

运行本地 dumi 站点：

```bash
npm install
npm start
```

然后打开 `http://localhost:8000`。

## API

### Input

| 参数         | 类型                                                       | 默认值     | 说明                                             |
| ------------ | ---------------------------------------------------------- | ---------- | ------------------------------------------------ |
| addonAfter   | `ReactNode`                                                | -          | 输入后显示的元素。                               |
| addonBefore  | `ReactNode`                                                | -          | 输入之前显示的元素。                             |
| allowClear   | `boolean \| { disabled?: boolean; clearIcon?: ReactNode }` | `false`    | 显示当前值的清除按钮。                           |
| className    | `string`                                                   | -          | 输入元素的className称。                          |
| classNames   | `InputProps['classNames']`                                 | -          | 输入槽的语义className称。                        |
| count        | `CountConfig`                                              | -          | 自定义计数策略、限制、可见性和超出格式化程序。   |
| defaultValue | `string \| number \| readonly string[] \| bigint`          | -          | 初始输入值。                                     |
| disabled     | `boolean`                                                  | `false`    | 禁用输入。                                       |
| htmlSize     | `number`                                                   | -          | 本机输入 `size` 属性。                           |
| maxLength    | `number`                                                   | -          | 本机输入 `maxLength` 属性。                      |
| prefix       | `ReactNode`                                                | -          | 输入包装器内的前缀内容。                         |
| prefixCls    | `string`                                                   | `rc-input` | className前缀。                                  |
| showCount    | `boolean \| { formatter: ShowCountFormatter }`             | `false`    | 显示字符数。新代码首选 `count.show`。            |
| styles       | `InputProps['styles']`                                     | -          | 输入槽的语义样式。                               |
| suffix       | `ReactNode`                                                | -          | 输入包装器内的后缀内容。                         |
| type         | `InputProps['type']`                                       | `text`     | 本机输入类型。使用 `TextArea` 进行文本区域行为。 |
| value        | `string \| number \| readonly string[] \| bigint`          | -          | 受控输入值。                                     |
| onChange     | `React.ChangeEventHandler<HTMLInputElement>`               | -          | 当值改变时触发。                                 |
| onClear      | `() => void`                                               | -          | 单击清除按钮时触发。                             |
| onPressEnter | `React.KeyboardEventHandler<HTMLInputElement>`             | -          | 当按下 Enter 时触发。                            |

### TextArea

| 参数         | 类型                                                       | 默认值        | 说明                                           |
| ------------ | ---------------------------------------------------------- | ------------- | ---------------------------------------------- |
| allowClear   | `boolean \| { disabled?: boolean; clearIcon?: ReactNode }` | `false`       | 显示当前值的清除按钮。                         |
| autoSize     | `boolean \| { minRows?: number; maxRows?: number }`        | `false`       | 根据内容自动调整高度。                         |
| className    | `string`                                                   | -             | 文本区域的className称。                        |
| classNames   | `TextAreaProps['classNames']`                              | -             | 文本区域槽的语义className称。                  |
| count        | `CountConfig`                                              | -             | 自定义计数策略、限制、可见性和超出格式化程序。 |
| defaultValue | `string \| number \| readonly string[] \| bigint`          | -             | 初始文本区域值。                               |
| maxLength    | `number`                                                   | -             | 本机文本区域 `maxLength` 属性。                |
| prefixCls    | `string`                                                   | `rc-textarea` | className前缀。                                |
| showCount    | `boolean \| { formatter: ShowCountFormatter }`             | `false`       | 显示字符数。新代码首选 `count.show`。          |
| style        | `React.CSSProperties`                                      | -             | 文本区域的内联样式。                           |
| styles       | `TextAreaProps['styles']`                                  | -             | 文本区域槽的语义样式。                         |
| suffix       | `ReactNode`                                                | -             | textarea 包装器内的后缀内容。                  |
| value        | `string \| number \| readonly string[] \| bigint`          | -             | 受控文本区域值。                               |
| onChange     | `React.ChangeEventHandler<HTMLTextAreaElement>`            | -             | 当值改变时触发。                               |
| onClear      | `() => void`                                               | -             | 单击清除按钮时触发。                           |
| onPressEnter | `React.KeyboardEventHandler<HTMLTextAreaElement>`          | -             | 当按下 Enter 时触发。                          |
| onResize     | `(size: { width: number; height: number }) => void`        | -             | 当文本区域大小改变时触发。                     |

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

| Ref           | 方法                                                                                    |
| ------------- | --------------------------------------------------------------------------------------- |
| `InputRef`    | `focus(options)`, `blur()`, `select()`, `setSelectionRange()`, `input`, `nativeElement` |
| `TextAreaRef` | `focus()`, `blur()`, `resizableTextArea`, `nativeElement`                               |

## 本地开发

```bash
npm install
npm start
npm test
npm run tsc
npm run compile
npm run build
```

## 发布

```bash
npm run prepublishOnly
```

包构建完成后，发布流程由 `@rc-component/np` 通过 `rc-np` 命令处理。

## 许可证

@rc-component/input 基于 [MIT](./LICENSE) 许可证发布。

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
