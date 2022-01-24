import { Card } from '@/components';
import { DecryptionProps } from '@/types';
import { substitutionDecrypt } from '../utils/substitution';
import { SubstitutionKeyInput } from './SubstitutionKeyInput';

export const SubstitutionDecrypt: React.FC<DecryptionProps> = ({
  text,
  setDecipheredText,
  onClose,
}) => {
  return (
    <Card title='Substitution Key Enty' onClose={onClose}>
      <SubstitutionKeyInput onChange={(key) => setDecipheredText(substitutionDecrypt(text, key))} />
    </Card>
  );
};
