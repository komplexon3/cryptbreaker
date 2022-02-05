import { IntegerInput } from '@/components';
import { HStack, Text } from '@chakra-ui/react';

interface CeasarKeyInputProps {
  onChange: (v: number) => void;
}

export const CeasarKeyInput: React.FC<CeasarKeyInputProps> = ({ onChange }) => {
  return (
    <HStack>
      <Text>Shift Value</Text>
      <IntegerInput minValue={0} maxValue={25} defaultValue={3} onValueChange={onChange} />
    </HStack>
  );
};
