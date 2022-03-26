import { Card } from '@/components';
import { EncryptProps } from '@/types';
import { VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ceasarEncrypt } from '../utils/ceasar';
import { CeasarKeyInput } from './CeasarKeyInput';

export const CeasarEncrypt: React.FC<EncryptProps> = ({ text, setCipherText, onClose }) => {
  const [key, setKey] = useState(3);

  useEffect(() => {
    setCipherText(ceasarEncrypt(text, key));
  }, [key, text, setCipherText]);

  return (
    <Card title='Encrypt with ceasar' onClose={onClose}>
      <VStack>
        <CeasarKeyInput minValue={0} maxValue={25} value={key} onChange={(v) => setKey(v)} />
      </VStack>
    </Card>
  );
};
