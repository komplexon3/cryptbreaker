import { useEncryptionContext } from '@/contexts';
import {
  CeasarEncrypt,
  SubstitutionEncrypt,
  TableEncrypt,
  VigenereEncrypt,
} from '@/features/ciphers';
import { EncryptionTools } from '@/types';

interface EncryptionToolSwitchProps {
  tool: EncryptionTools;
}

export const EncryptionToolSwitch: React.FC<EncryptionToolSwitchProps> = ({ tool }) => {
  const { plainText, setCipherText } = useEncryptionContext();

  switch (tool) {
    case EncryptionTools.CEASAR: {
      return <CeasarEncrypt text={plainText} setCipherText={setCipherText} />;
    }
    case EncryptionTools.SUBSTITUTION: {
      return <SubstitutionEncrypt text={plainText} setCipherText={setCipherText} />;
    }
    case EncryptionTools.TABLE: {
      return <TableEncrypt text={plainText} setCipherText={setCipherText} />;
    }
    case EncryptionTools.VIGENERE: {
      return <VigenereEncrypt text={plainText} setCipherText={setCipherText} />;
    }
    default:
      throw Error('Invalid encryption tool selection. Cannot be rendered.');
  }
};
