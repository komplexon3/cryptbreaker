import {
  CeasarDecrypt,
  SubstitutionDecrypt,
  TableDecrypt,
  VignereDecrypt,
} from '@/features/ciphers';
import { DecryptionTools } from '@/types';

interface DecryptionToolSwitchProps {
  text: string;
  tool: DecryptionTools;
  setDecipheredText: (s: string) => void;
  onClose?: () => void;
}

export const DecryptionToolSwitch: React.FC<DecryptionToolSwitchProps> = ({
  text,
  tool,
  setDecipheredText,
  onClose,
}) => {
  switch (tool) {
    case DecryptionTools.CEASAR: {
      return <CeasarDecrypt text={text} setDecipheredText={setDecipheredText} onClose={onClose} />;
    }
    case DecryptionTools.SUBSTITUTION: {
      return (
        <SubstitutionDecrypt text={text} setDecipheredText={setDecipheredText} onClose={onClose} />
      );
    }
    case DecryptionTools.TABLE: {
      return <TableDecrypt text={text} setDecipheredText={setDecipheredText} onClose={onClose} />;
    }
    case DecryptionTools.VIGNERE: {
      return <VignereDecrypt text={text} setDecipheredText={setDecipheredText} onClose={onClose} />;
    }
    default:
      throw Error('Invalid decipher tool selection. Cannot be rendered.');
  }
};
