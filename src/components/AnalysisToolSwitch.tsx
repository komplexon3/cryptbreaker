import { FrequencyAnalysis, FriedmannAnalysis, TableAnalysis } from '@/features/analysis';
import { AnalysisTools } from '@/types';
import { KasiskiAnalysis } from '../features/analysis/kasiski/components/KasiskiAnalysis';

interface AnalysisToolSwitchProps {
  tool: AnalysisTools;
  onClose?: () => void;
}

export const AnalysisToolSwitch: React.FC<AnalysisToolSwitchProps> = ({ tool, onClose }) => {
  switch (tool) {
    case AnalysisTools.FREQUENCY: {
      return <FrequencyAnalysis onClose={onClose} />;
    }
    case AnalysisTools.FRIEDMANN: {
      return <FriedmannAnalysis onClose={onClose} />;
    }
    case AnalysisTools.KASISKI: {
      return <KasiskiAnalysis onClose={onClose} />;
    }
    case AnalysisTools.TABLE: {
      return <TableAnalysis onClose={onClose} />;
    }
    default:
      throw Error('Invalid analysis tool selection. Cannot be rendered.');
  }
};
