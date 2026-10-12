import * as React from 'react';
import type { CommonInputProps } from '../interface';

export default function useAllowClear(
  allowClear: CommonInputProps['allowClear'],
) {
  return React.useMemo(
    () =>
      [!!allowClear, typeof allowClear === 'object' ? allowClear : {}] as const,
    [allowClear],
  );
}
