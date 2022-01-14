import { HStack, VStack, Text } from '@chakra-ui/react';
import { Card, IntegerInput } from '@/components';
import { CeasarDecrypt } from '../utils/ceasar';
import { DecipherProps } from '@/types';

export const CeasarDecipher: React.FC<DecipherProps> = ({ text, setDecipheredText, onClose }) => {
  return (
    <Card title='Ceasar Key Entry' onClose={onClose}>
      <VStack>
        <HStack>
          <Text>Shift Value</Text>
          <IntegerInput
            minValue={0}
            maxValue={25}
            defaultValue={3}
            onValueChange={(v) => setDecipheredText(CeasarDecrypt(text, v))}
          />
        </HStack>
      </VStack>
    </Card>
  );
};
