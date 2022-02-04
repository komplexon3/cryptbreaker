import { useEncryptionContext } from '@/contexts';
import { CeasarEncrypt } from '@/features/ceasar';
import { SubstitutionEncrypt } from '@/features/substitution';
import { TableEncrypt } from '@/features/table';
import { VignereEncrypt } from '@/features/vignere';
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
    case EncryptionTools.VIGNERE: {
      return <VignereEncrypt text={plainText} setCipherText={setCipherText} />;
    }
    default:
      throw Error('Invalid encryption tool selection. Cannot be rendered.');
  }
};
