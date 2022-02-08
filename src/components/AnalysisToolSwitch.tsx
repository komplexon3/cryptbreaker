import {
  FrequencyAnalysis,
  FriedmannAnalysis,
  KasiskiAnalysis,
  SubstitutionAnalysis,
  TableAnalysis,
} from '@/features/analysis';
import { AnalysisTools } from '@/types';

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
    case AnalysisTools.SUBSTITUTION: {
      return <SubstitutionAnalysis onClose={onClose} />;
    }
    default:
      throw Error('Invalid analysis tool selection. Cannot be rendered.');
  }
};
