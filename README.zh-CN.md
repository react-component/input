<div align="center">
  <h1>@rc-component/input</h1>
  <p><sub><a href="https://ant.design"><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /></a> Ant Design 生态的一部分。</sub></p>
  <p>📦 ⌨️ React 输入框基础组件，支持前后缀、清除按钮、计数和组合输入。</p>

  <p>
    <a href="https://npmjs.org/package/@rc-component/input"><img alt="NPM version" src="https://img.shields.io/npm/v/@rc-component/input.svg?style=flat-square"></a>
    <a href="https://npmjs.org/package/@rc-component/input"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@rc-component/input.svg?style=flat-square"></a>
    <a href="https://github.com/react-component/input/actions/workflows/react-component-ci.yml"><img alt="build status" src="https://github.com/react-component/input/actions/workflows/react-component-ci.yml/badge.svg"></a>
    <a href="https://app.codecov.io/gh/react-component/input"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/react-component/input/master.svg?style=flat-square"></a>
    <a href="https://bundlephobia.com/package/@rc-component/input"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@rc-component/input?style=flat-square"></a>
    <a href="https://github.com/umijs/dumi"><img alt="dumi" src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square"></a>
  </p>
</div>

<p align="center"><a href="./README.md">English</a> | 简体中文</p>

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

| 参数            | 类型                                                       | 默认值     | 说明                                                 |
| --------------- | ---------------------------------------------------------- | ---------- | ---------------------------------------------------- |
| addonAfter      | `ReactNode`                                                | -          | 输入后显示的元素。                                   |
| addonBefore     | `ReactNode`                                                | -          | 输入之前显示的元素。                                 |
| allowClear      | `boolean \| { disabled?: boolean; clearIcon?: ReactNode }` | `false`    | 显示当前值的清除按钮。                               |
| className       | `string`                                                   | -          | 输入元素的 className。                               |
| classNames      | `InputProps['classNames']`                                 | -          | 输入槽的语义 className。                             |
| count           | `CountConfig`                                              | -          | 自定义计数策略、限制、可见性和超出格式化程序。       |
| defaultValue    | `string \| number \| readonly string[] \| bigint`          | -          | 初始输入值。                                         |
| disabled        | `boolean`                                                  | `false`    | 禁用输入。                                           |
| htmlSize        | `number`                                                   | -          | 原生 input `size` 属性。                             |
| maxLength       | `number`                                                   | -          | 原生 input `maxLength` 属性。                        |
| mask            | `InputMask`                                                | -          | 字符串、数组或动态输入掩码。                         |
| maskDefinitions | `InputMaskDefinitions`                                     | -          | 扩展或覆盖默认标记的自定义字符规则。                 |
| maskPlaceholder | `string \| null`                                           | -          | 未填充掩码位置的占位字符。                           |
| prefix          | `ReactNode`                                                | -          | 输入包装器内的前缀内容。                             |
| prefixCls       | `string`                                                   | `rc-input` | className 前缀。                                     |
| showCount       | `boolean \| { formatter: ShowCountFormatter }`             | `false`    | 显示字符数。新代码首选 `count.show`。                |
| styles          | `InputProps['styles']`                                     | -          | 输入槽的语义样式。                                   |
| suffix          | `ReactNode`                                                | -          | 输入包装器内的后缀内容。                             |
| type            | `InputProps['type']`                                       | `text`     | 原生 input 类型。需要文本域行为时请使用 `TextArea`。 |
| value           | `string \| number \| readonly string[] \| bigint`          | -          | 受控输入值。                                         |
| onChange        | `React.ChangeEventHandler<HTMLInputElement>`               | -          | 当值改变时触发。                                     |
| onClear         | `() => void`                                               | -          | 单击清除按钮时触发。                                 |
| onPressEnter    | `React.KeyboardEventHandler<HTMLInputElement>`             | -          | 当按下 Enter 时触发。                                |

#### 输入掩码

`mask` 支持字符串、由固定字符串和单字符正则表达式组成的数组，或纯函数 `(state: InputMaskState) => InputMaskPattern`。

- 字符串中的 `0` 表示 ASCII 数字，`X` 表示拉丁字母（`a-z`、`A-Z`），`*` 表示数字或拉丁字母。其他字符为固定分隔符。使用反斜杠转义标记，例如 `mask="\X000"`。
- `maskDefinitions` 将单字符标记映射为单字符正则表达式。自定义规则扩展默认规则，并覆盖同名标记；`null` 将该标记视为固定字符。反斜杠保留用于转义。规则同样适用于动态掩码返回的字符串。正则表达式不会被修改；有状态的 `g` 和 `y` 标志会被忽略，其他标志会保留。
- 数组中的字符串始终为固定文本，包括 `0`、`X` 和 `*`。正则表达式可定义自定义字符规则，包括非拉丁字母。
- 动态函数接收待处理文本及 `selection: { start, end }`，选区位置对应该文本。格式化初始值或外部更新的值时，`selection` 为 `null`。函数应保持纯净。
- `maskPlaceholder` 未传入或设为 `undefined`、`null` 或 `''` 时不显示占位符。设置为 `_` 等字符可显示未填充位置。单字符会重复使用；多字符字符串按转义后的掩码位置提供占位符，例如 `00/00/0000` 可使用 `dd/mm/yyyy`，超出字符串长度的位置使用 `_`。占位字符保留用于空位置：若某位置的规则接受其占位字符，则无法输入该字符，开发环境下会给出警告。
- 输入或粘贴文本中的分隔符仅在当前分组已有字符时结束该分组，例如 `(000) 000-0000` 会将 `555-123-4567` 格式化为 `(555) 123-4567`。输入时不符合下一位置的字符会被丢弃；粘贴、拖放和自动填充的文本按值解析，因此复制的值会保留其字符。不显示占位符时，无法明确显示的编辑会被忽略。
- 空输入框聚焦时显示固定前缀及已配置的掩码占位符，失焦后恢复为空。`value` 和 `defaultValue` 支持原始或格式化文本。`onChange` 保持事件参数形式，`target.value` 和 `currentTarget.value` 均包含格式化文本及可见占位符。清除时传递 `''`。
- 支持 `text`、`search`、`tel`、`url` 和 `password` 类型，其他类型忽略 `mask`。输入法组合输入期间，文本及变更事件保持未格式化，组合输入结束后才应用掩码。
- 使用掩码时，`maxLength` 限制显示长度，包括固定字符和占位符。字符计数包含显示的占位符。`count.exceedFormatter` 接收格式化后的值，其返回值会再次格式化。

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

| 参数         | 类型                                                       | 默认值        | 说明                                           |
| ------------ | ---------------------------------------------------------- | ------------- | ---------------------------------------------- |
| allowClear   | `boolean \| { disabled?: boolean; clearIcon?: ReactNode }` | `false`       | 显示当前值的清除按钮。                         |
| autoSize     | `boolean \| { minRows?: number; maxRows?: number }`        | `false`       | 根据内容自动调整高度。                         |
| className    | `string`                                                   | -             | 文本区域的 className。                         |
| classNames   | `TextAreaProps['classNames']`                              | -             | 文本区域槽的语义 className。                   |
| count        | `CountConfig`                                              | -             | 自定义计数策略、限制、可见性和超出格式化程序。 |
| defaultValue | `string \| number \| readonly string[] \| bigint`          | -             | 初始文本区域值。                               |
| maxLength    | `number`                                                   | -             | 本机文本区域 `maxLength` 属性。                |
| prefixCls    | `string`                                                   | `rc-textarea` | className 前缀。                               |
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
import type { InputRef, TextAreaRef } from '@rc-component/input';

function focusInput(inputRef: InputRef | null) {
  inputRef?.focus();
}

function blurTextArea(textareaRef: TextAreaRef | null) {
  textareaRef?.blur();
}
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

dumi 站点默认运行在 `http://localhost:8000`。

## 发布

```bash
npm run prepublishOnly
```

包构建完成后，发布流程由 `@rc-component/np` 通过 `rc-np` 命令处理。

## 许可证

@rc-component/input 基于 [MIT](./LICENSE) 许可证发布。
