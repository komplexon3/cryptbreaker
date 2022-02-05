import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react';

interface IntegerInputProps {
  minValue?: number;
  maxValue?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  value?: number;
}

export const IntegerInput: React.FC<IntegerInputProps> = ({
  minValue,
  maxValue,
  defaultValue,
  onValueChange,
  value,
}) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 1,
    defaultValue: defaultValue,
    min: minValue,
    max: maxValue,
    precision: 0,
    inputMode: 'numeric',
    pattern: '[0-9]*',
    onChange: (_, valueAsNumber) => {
      onValueChange && onValueChange(valueAsNumber);
    },
    value: value,
  });

  const incValue = getIncrementButtonProps();
  const decValue = getDecrementButtonProps();
  const valueInput = getInputProps();

  return (
    <HStack>
      <Input {...valueInput} />
      <Button {...decValue}>-</Button>
      <Button {...incValue}>+</Button>
    </HStack>
  );
};
