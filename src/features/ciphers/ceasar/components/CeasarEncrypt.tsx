import { Card } from '@/components';
import { EncryptProps } from '@/types';
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
      <CeasarKeyInput minValue={0} maxValue={25} value={key} onChange={(v) => setKey(v)} />
    </Card>
  );
};
