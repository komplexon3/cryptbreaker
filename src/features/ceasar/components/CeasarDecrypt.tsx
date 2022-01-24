import { Card } from '@/components';
import { DecryptionProps } from '@/types';
import { ceasarDecrypt } from '../utils/ceasar';
import { CeasarKeyInput } from './CeasarKeyInput';

export const CeasarDecrypt: React.FC<DecryptionProps> = ({ text, setDecipheredText, onClose }) => {
  return (
    <Card title='Ceasar Key Entry' onClose={onClose}>
      <CeasarKeyInput onChange={(v) => setDecipheredText(ceasarDecrypt(text, v))} />
    </Card>
  );
};
