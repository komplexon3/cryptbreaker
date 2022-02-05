import { Card } from '@/components';
import { DecryptionProps } from '@/types';
import { vignereDecrypt } from '../utils/vignere';
import { VignereKeyInput } from './VignereKeyInput';

export const VignereDecrypt: React.FC<DecryptionProps> = ({ text, setDecipheredText, onClose }) => {
  return (
    <Card title='Vignere Key Entry' onClose={onClose}>
      <VignereKeyInput onChange={(v) => setDecipheredText(vignereDecrypt(text, v))} />
    </Card>
  );
};
