---
title: Mask
nav:
  title: Demo
  path: /demo
---

Input masks support digits (`0`), Latin letters (`X`), alphanumeric characters (`*`), custom regular expressions and dynamic patterns. `onChange` receives the formatted value.

Use `maskDefinitions` to configure your own tokens or override the built-in rules. Set a definition to `null` to treat that token as a literal.

Unfilled positions are hidden by default. Set `maskPlaceholder` to `_`, another character or a descriptive string to show them.

<code src="../examples/mask.tsx"></code>
