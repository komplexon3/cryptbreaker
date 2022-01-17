import { CeasarEncrypt } from '@/features/ceasar';
import { SubstitutionEncrypt } from '@/features/substitution';
import { TableEncrypt } from '@/features/table';
import { VignereEncrypt } from '@/features/vignere';
import { EncryptionTools } from '@/types';

interface EncryptionToolSwitchProps {
  text: string;
  tool: EncryptionTools;
  setCipherText: (s: string) => void;
}

export const EncryptionToolSwitch: React.FC<EncryptionToolSwitchProps> = ({
  text,
  tool,
  setCipherText,
}) => {
  switch (tool) {
    case EncryptionTools.CEASAR: {
      return <CeasarEncrypt text={text} setCipherText={setCipherText} />;
    }
    case EncryptionTools.SUBSTITUTION: {
      return <SubstitutionEncrypt text={text} setCipherText={setCipherText} />;
    }
    case EncryptionTools.TABLE: {
      return <TableEncrypt text={text} setCipherText={setCipherText} />;
    }
    case EncryptionTools.VIGNERE: {
      return <VignereEncrypt text={text} setCipherText={setCipherText} />;
    }
    default:
      throw Error('Invalid encryption tool selection. Cannot be rendered.');
  }
};
