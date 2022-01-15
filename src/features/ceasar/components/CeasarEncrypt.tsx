import { Card } from '@/components';
import { EncryptProps } from '@/types';
import { ceasarEncrypt } from '../utils/ceasar';
import { CeasarKeyInput } from './CeasarKeyInput';

export const CeasarEncrypt: React.FC<EncryptProps> = ({ text, setCipherText, onClose }) => {
  return (
    <Card title='Encrypt with ceasar' onClose={onClose}>
      <CeasarKeyInput onChange={(v) => setCipherText(ceasarEncrypt(text, v))} />
    </Card>
  );
};
