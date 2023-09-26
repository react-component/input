import * as React from 'react';
import type { InputProps } from '..';

export default function useCount(
  count?: InputProps['count'],
  showCount?: InputProps['showCount'],
) {
  return React.useMemo(() => {
    let countConfig = count || {};

    if (!count && showCount) {
      countConfig = {
        show: true,
        formatter: typeof showCount === 'function' ? showCount : undefined,
      };
    }

    return {
      ...countConfig,
      strategy: countConfig.strategy || ((value) => value.length),
    };
  }, [count, showCount]);
}
