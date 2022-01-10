import { CeasarDecipher, SubstitutionDecipher, TableDecipher, VignereDecipher } from '.';
import { DecipherTools } from './Decipher.ds';

interface DecipherToolSwitchProps {
  text: string;
  tool: DecipherTools;
  setDecipheredText: (s: string) => void;
  onClose?: () => void;
}

const DecipherToolSwitch: React.FC<DecipherToolSwitchProps> = ({
  text,
  tool,
  setDecipheredText,
  onClose,
}) => {
  switch (tool) {
    case DecipherTools.CEASAR: {
      return <CeasarDecipher text={text} setDecipheredText={setDecipheredText} onClose={onClose} />;
    }
    case DecipherTools.SUBSTITUTION: {
      return (
        <SubstitutionDecipher text={text} setDecipheredText={setDecipheredText} onClose={onClose} />
      );
    }
    case DecipherTools.TABLE: {
      return <TableDecipher text={text} setDecipheredText={setDecipheredText} onClose={onClose} />;
    }
    case DecipherTools.VIGNERE: {
      return (
        <VignereDecipher text={text} setDecipheredText={setDecipheredText} onClose={onClose} />
      );
    }
    default:
      throw Error('Invalid decipher tool selection. Cannot be rendered.');
  }
};

export default DecipherToolSwitch;
