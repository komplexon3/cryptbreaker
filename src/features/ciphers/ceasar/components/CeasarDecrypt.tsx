import { Card } from '@/components';
import { DecryptionProps } from '@/types';
import { VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ceasarDecrypt } from '../utils/ceasar';
import { CeasarKeyInput } from './CeasarKeyInput';

export const CeasarDecrypt: React.FC<DecryptionProps> = ({ text, setDecipheredText, onClose }) => {
  const [key, setKey] = useState(3);

  useEffect(() => {
    setDecipheredText(ceasarDecrypt(text, key));
  }, [key, text, setDecipheredText]);

  return (
    <Card title='Ceasar Key Entry' onClose={onClose}>
      <VStack>
        <CeasarKeyInput minValue={0} maxValue={25} value={key} onChange={(v) => setKey(v)} />
      </VStack>
    </Card>
  );
};
