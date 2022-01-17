import { Card } from '@/components';
import { vignereEncrypt } from '../utils/vignere';
import { EncryptProps } from '@/types';
import { VignereKeyInput } from './VignereKeyInput';

export const VignereEncrypt: React.FC<EncryptProps> = ({ text, setCipherText, onClose }) => {
  return (
    <Card title='Encrypt with vignere' onClose={onClose}>
      <VignereKeyInput onChange={(v) => setCipherText(vignereEncrypt(text, v))} />
    </Card>
  );
};
