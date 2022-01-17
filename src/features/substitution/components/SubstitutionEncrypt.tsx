import { Card } from '@/components';
import { EncryptProps } from '@/types';
import { substitutionEncrypt } from '../utils/substitution';
import { SubstitutionKeyInput } from './SubstitutionKeyInput';

export const SubstitutionEncrypt: React.FC<EncryptProps> = ({ text, setCipherText, onClose }) => {
  return (
    <Card title='Encrypt with substitution cipher' onClose={onClose}>
      <SubstitutionKeyInput onChange={(key) => setCipherText(substitutionEncrypt(text, key))} />
    </Card>
  );
};
