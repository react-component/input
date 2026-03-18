import * as React from 'react';
import type { CountConfig } from '../interface';
import type { inCountRange } from './useCount';

type ForcedCountConfig = Parameters<typeof inCountRange>[1];

interface UseCountExceedProps<
  Element extends HTMLInputElement | HTMLTextAreaElement,
> {
  countConfig: ForcedCountConfig;
  getTarget: () => Element | null;
}

export default function useCountExceed<
  Element extends HTMLInputElement | HTMLTextAreaElement,
>({ countConfig, getTarget }: UseCountExceedProps<Element>) {
  const [selection, setSelection] = React.useState<
    [start: number, end: number] | null
  >(null);

  React.useEffect(() => {
    if (selection) {
      getTarget()?.setSelectionRange(...selection);
    }
  }, [getTarget, selection]);

  const getExceedValue = React.useCallback(
    (currentValue: string, isComposing: boolean) => {
      let nextValue = currentValue;

      if (
        !isComposing &&
        countConfig.exceedFormatter &&
        countConfig.max &&
        countConfig.strategy(currentValue) > countConfig.max
      ) {
        nextValue = countConfig.exceedFormatter(currentValue, {
          max: countConfig.max,
        });

        if (currentValue !== nextValue) {
          setSelection([
            getTarget()?.selectionStart || 0,
            getTarget()?.selectionEnd || 0,
          ]);
        }
      }

      return nextValue;
    },
    [countConfig, getTarget],
  );

  return getExceedValue;
}
