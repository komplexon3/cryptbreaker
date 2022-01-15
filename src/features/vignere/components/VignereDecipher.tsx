import { Card } from '@/components';
import { vignereDecrypt } from '../utils/vignere';
import { DecipherProps } from '@/types';
import { VignereKeyInput } from './VignereKeyInput';

export const VignereDecipher: React.FC<DecipherProps> = ({ text, setDecipheredText, onClose }) => {
  return (
    <Card title='Vignere Key Entry' onClose={onClose}>
      <VignereKeyInput onChange={(v) => setDecipheredText(vignereDecrypt(text, v))} />
    </Card>
  );
};
