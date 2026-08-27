import type { CommonInputProps } from '../src';
import { resolveOnChange, useCount } from '../src';

describe('root exports', () => {
  it('exposes helpers used by sibling input packages', () => {
    const props: CommonInputProps = {};

    expect(props).toEqual({});
    expect(typeof useCount).toBe('function');
    expect(typeof resolveOnChange).toBe('function');
  });
});
