import * as React from 'react';
import type { ReactNode } from 'react';
import type { ForcedCountConfig } from './useCount';

interface UseCountDisplayProps {
  countConfig: ForcedCountConfig;
  value: string;
  maxLength?: number;
}

interface CountDisplayInfo {
  mergedMax?: number;
  isOutOfRange: boolean;
  dataCount?: ReactNode;
}

export default function useCountDisplay({
  countConfig,
  value,
  maxLength,
}: UseCountDisplayProps): CountDisplayInfo {
  return React.useMemo(() => {
    const mergedMax = countConfig.max ?? maxLength;
    const valueLength = countConfig.strategy(value);
    const isOutOfRange = !!mergedMax && valueLength > mergedMax;
    const hasMaxLength = Number(mergedMax) > 0;
    const dataCount = countConfig.show
      ? countConfig.showFormatter
        ? countConfig.showFormatter({
            value,
            count: valueLength,
            maxLength: mergedMax,
          })
        : `${valueLength}${hasMaxLength ? ` / ${mergedMax}` : ''}`
      : undefined;

    return {
      mergedMax,
      isOutOfRange,
      dataCount,
    };
  }, [countConfig, maxLength, value]);
}
