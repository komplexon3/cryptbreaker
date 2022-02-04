import { FrequencyAnalysis, FriedmannAnalysis, TableAnalysis } from '@/features/analysis';
import { AnalysisTools } from '@/types';
import {
  KasiskiAnalysis,
  KasiskiProvider,
} from '../features/analysis/kasiski/components/KasiskiAnalysis';

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
      return (
        <KasiskiProvider>
          <KasiskiAnalysis onClose={onClose} />
        </KasiskiProvider>
      );
    }
    case AnalysisTools.TABLE: {
      return <TableAnalysis onClose={onClose} />;
    }
    default:
      throw Error('Invalid analysis tool selection. Cannot be rendered.');
  }
};
