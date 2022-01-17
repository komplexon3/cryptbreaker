import { Card } from '@/components';
import { DecipherProps } from '@/types';
import { ceasarDecrypt } from '../utils/ceasar';
import { CeasarKeyInput } from './CeasarKeyInput';

export const CeasarDecipher: React.FC<DecipherProps> = ({ text, setDecipheredText, onClose }) => {
  return (
    <Card title='Ceasar Key Entry' onClose={onClose}>
      <CeasarKeyInput onChange={(v) => setDecipheredText(ceasarDecrypt(text, v))} />
    </Card>
  );
};
