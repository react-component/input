# rc-input ⌨️

[![NPM version][npm-image]][npm-url] [![npm download][download-image]][download-url] [![dumi](https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square)](https://github.com/umijs/dumi) [![build status][github-actions-image]][github-actions-url] [![Codecov][codecov-image]][codecov-url] [![Dependencies][david-image]](david-url) [![DevDependencies][david-dev-image]][david-dev-url] [![bundle size][bundlephobia-image]][bundlephobia-url]

[npm-image]: http://img.shields.io/npm/v/rc-input.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-input
[github-actions-image]: https://github.com/react-component/input/workflows/CI/badge.svg
[github-actions-url]: https://github.com/react-component/input/actions
[codecov-image]: https://img.shields.io/codecov/c/github/react-component/input/master.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/react-component/input/branch/master
[david-url]: https://david-dm.org/react-component/input
[david-image]: https://david-dm.org/react-component/input/status.svg?style=flat-square
[david-dev-url]: https://david-dm.org/react-component/input?type=dev
[david-dev-image]: https://david-dm.org/react-component/input/dev-status.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/rc-input.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-input
[bundlephobia-url]: https://bundlephobia.com/result?p=rc-input
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/rc-input

Pretty Footer react component used in [ant.design](https://ant.design) and [antv.vision](https://antv.vision).

![](https://gw.alipayobjects.com/zos/antfincdn/z4ie3X8x6u/1cb23945-ec67-45a3-b521-f8da62e12255.png)

## Live Demo

https://react-component.github.io/input/

## Install

[![rc-input](https://nodei.co/npm/rc-input.png)](https://npmjs.org/package/rc-input)

## Usage

```js
import Input from 'rc-input';
import { render } from 'react-dom';

render(<Input placeholder="input" allowClear />, mountNode);
```

## API

| Property  | Type                | Default  | Description                    |
| --------- | ------------------- | -------- | ------------------------------ |
| prefixCls | string              | rc-input |                                |
| className | string              | ''       | additional class name of input |
| style     | React.CSSProperties |          | style properties of input      |

## Development

```
npm install
npm start
```

## License

rc-input is released under the MIT license.
