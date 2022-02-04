export interface AnalysisProps {
  onClose?: () => void;
}

export enum AnalysisTools {
  UNSPECIFIED,
  FREQUENCY,
  FRIEDMANN,
  KASISKI,
  TABLE,
}
