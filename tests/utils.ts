// @ts-nocheck
import { act } from '@testing-library/react';
import {
  _rs as onEsResize,
  _rs as onLibResize,
} from '@rc-component/resize-observer/lib/utils/observerUtil';

export function triggerResize(
  target,
  size?: { width?: number; height?: number },
) {
  const { width = 510, height = 903 } = size || {};
  const originGetBoundingClientRect = target.getBoundingClientRect;

  target.getBoundingClientRect = () => ({ width, height });
  // @ts-ignore
  onLibResize([{ target }]);
  // @ts-ignore
  onEsResize([{ target }]);

  target.style.height = `${height}px`;
  target.getBoundingClientRect = originGetBoundingClientRect;
}

export async function wait() {
  for (let i = 0; i < 100; i += 1) {
    await act(async () => {
      jest.runAllTimers();
      await Promise.resolve();
    });
  }
}
