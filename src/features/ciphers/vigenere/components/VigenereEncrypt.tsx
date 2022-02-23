import { Card } from '@/components';
import { EncryptProps } from '@/types';
import { vigenereEncrypt } from '../utils/vigenere';
import { VigenereKeyInput } from './VigenereKeyInput';

export const VigenereEncrypt: React.FC<EncryptProps> = ({ text, setCipherText, onClose }) => {
  return (
    <Card title='Encrypt with vigenere' onClose={onClose}>
      <VigenereKeyInput onChange={(v) => setCipherText(vigenereEncrypt(text, v))} />
    </Card>
  );
};
