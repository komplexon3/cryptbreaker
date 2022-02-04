import { FrequencyAnalysis, FriedmannAnalysis, KasiskiAnalysis, TableAnalysis } from '@/components';
import { AnalysisTools } from '@/types';
import { KasiskiProvider } from './KasiskiAnalysis';

interface AnalysisToolSwitchProps {
  text: string;
  tool: AnalysisTools;
  onClose?: () => void;
}

export const AnalysisToolSwitch: React.FC<AnalysisToolSwitchProps> = ({ text, tool, onClose }) => {
  switch (tool) {
    case AnalysisTools.FREQUENCY: {
      return <FrequencyAnalysis text={text} onClose={onClose} />;
    }
    case AnalysisTools.FRIEDMANN: {
      return <FriedmannAnalysis text={text} onClose={onClose} />;
    }
    case AnalysisTools.KASISKI: {
      return (
        <KasiskiProvider>
          <KasiskiAnalysis text={text} onClose={onClose} />
        </KasiskiProvider>
      );
    }
    case AnalysisTools.TABLE: {
      return <TableAnalysis text={text} onClose={onClose} />;
    }
    default:
      throw Error('Invalid analysis tool selection. Cannot be rendered.');
  }
};
