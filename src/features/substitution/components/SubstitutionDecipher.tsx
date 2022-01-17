import { Card } from '@/components';
import { DecipherProps } from '@/types';
import { substitutionDecrypt } from '../utils/substitution';
import { SubstitutionKeyInput } from './SubstitutionKeyInput';

export const SubstitutionDecipher: React.FC<DecipherProps> = ({
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
