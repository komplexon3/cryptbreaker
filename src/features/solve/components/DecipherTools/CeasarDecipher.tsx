import { HStack, VStack, Text } from '@chakra-ui/react';
import { IntegerInput } from '..';
import { Card } from '../../../../components';
import { CeasarDecrypt } from '../../util';
import { DecipherProps } from './Decipher.ds';

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

export default CeasarDecipher;
