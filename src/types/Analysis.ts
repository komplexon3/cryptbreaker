export interface AnalysisProps {
  onClose?: () => void;
}

export enum AnalysisTools {
  UNSPECIFIED,
  FREQUENCY,
  FRIEDMAN,
  KASISKI,
  TABLE,
  SUBSTITUTION,
}
