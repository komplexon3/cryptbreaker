import { FrequencyAnalysis, FriedmannAnalysis, KasiskiAnalysis, TableAnalysis } from '.';
import { AnalysisTools } from './Analysis.ds';

interface AnalysisToolSwitchProps {
  text: string;
  tool: AnalysisTools;
  onClose?: () => void;
}

const AnalysisToolSwitch: React.FC<AnalysisToolSwitchProps> = ({ text, tool, onClose }) => {
  switch (tool) {
    case AnalysisTools.FREQUENCY: {
      return <FrequencyAnalysis text={text} onClose={onClose} />;
    }
    case AnalysisTools.FRIEDMANN: {
      return <FriedmannAnalysis text={text} onClose={onClose} />;
    }
    case AnalysisTools.KASISKI: {
      return <KasiskiAnalysis text={text} onClose={onClose} />;
    }
    case AnalysisTools.TABLE: {
      return <TableAnalysis text={text} onClose={onClose} />;
    }
    default:
      throw Error('Invalid analysis tool selection. Cannot be rendered.');
  }
};

export default AnalysisToolSwitch;
