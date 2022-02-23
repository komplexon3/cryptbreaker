import { Card } from '@/components';
import { DecryptionProps } from '@/types';
import { vigenereDecrypt } from '../utils/vigenere';
import { VigenereKeyInput } from './VigenereKeyInput';

export const VigenereDecrypt: React.FC<DecryptionProps> = ({
  text,
  setDecipheredText,
  onClose,
}) => {
  return (
    <Card title='Vigenere Key Entry' onClose={onClose}>
      <VigenereKeyInput onChange={(v) => setDecipheredText(vigenereDecrypt(text, v))} />
    </Card>
  );
};
