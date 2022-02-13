import { IntegerInput } from '@/components';
import { HStack, Text } from '@chakra-ui/react';
import { NumberLiteralType } from 'typescript';

interface CeasarKeyInputProps {
  minValue?: number;
  maxValue?: number;
  defaultValue?: number;
  value?: number;
  onChange?: (v: number) => void;
}

export const CeasarKeyInput: React.FC<CeasarKeyInputProps> = ({
  minValue,
  maxValue,
  defaultValue,
  value,
  onChange,
}) => {
  return (
    <HStack>
      <Text>Shift Value</Text>
      <IntegerInput
        minValue={minValue}
        maxValue={maxValue}
        defaultValue={value}
        onValueChange={onChange}
      />
    </HStack>
  );
};
