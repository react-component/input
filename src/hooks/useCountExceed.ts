import * as React from 'react';
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
  const getTargetRef = React.useRef(getTarget);

  React.useEffect(() => {
    getTargetRef.current = getTarget;
  }, [getTarget]);

  React.useEffect(() => {
    if (selection) {
      getTargetRef.current()?.setSelectionRange(...selection);
      setSelection(null);
    }
  }, [selection]);

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
            getTargetRef.current()?.selectionStart || 0,
            getTargetRef.current()?.selectionEnd || 0,
          ]);
        }
      }

      return nextValue;
    },
    [countConfig],
  );

  return getExceedValue;
}
