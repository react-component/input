import * as React from 'react';
import type { CommonInputProps } from '../interface';

export default function useAllowClear(
  allowClear: CommonInputProps['allowClear'],
) {
  return React.useMemo(() => {
    if (!allowClear) {
      return undefined;
    }

    return typeof allowClear === 'object' ? allowClear : {};
  }, [allowClear]);
}
