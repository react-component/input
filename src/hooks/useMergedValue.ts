import useControlledState from '@rc-component/util/lib/hooks/useControlledState';

type MergedValue = string | number | readonly string[] | bigint | undefined;

export default function useMergedValue<ValueType extends MergedValue>(
  defaultValue?: ValueType,
  controlledValue?: ValueType,
) {
  const [value, setValue] = useControlledState(defaultValue, controlledValue);
  const formatValue =
    value === undefined || value === null ? '' : String(value);

  return {
    value,
    setValue,
    formatValue,
  };
}
