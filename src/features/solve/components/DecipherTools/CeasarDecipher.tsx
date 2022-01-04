import { HStack, VStack, Text } from '@chakra-ui/react';
import { IntegerInput } from '..';
import { BasicBox } from '../../../../components/BasicBox';
import { CeasarDecrypt } from '../../util';

interface CeasarDecipherProps {
  text: string;
  setDecipheredText: (s: string) => void;
}

export const CeasarDecipher: React.FC<CeasarDecipherProps> = ({ text, setDecipheredText }) => {
  return (
    <BasicBox>
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
    </BasicBox>
  );
};

export default CeasarDecipher;
