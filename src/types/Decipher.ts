export interface DecipherProps {
  text: string;
  setDecipheredText: (s: string) => void;
  onClose?: () => void;
}

export enum DecipherTools {
  UNSPECIFIED,
  CEASAR,
  SUBSTITUTION,
  TABLE,
  VIGNERE,
}
