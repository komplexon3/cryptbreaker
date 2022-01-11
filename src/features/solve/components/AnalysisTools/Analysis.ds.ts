export interface AnalysisProps {
  text: string;
  onClose?: () => void;
}

export enum AnalysisTools {
  UNSPECIFIED,
  FREQUENCY,
  FRIEDMANN,
  KASISKI,
  TABLE,
}
