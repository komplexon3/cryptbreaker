export interface DecipherProps {
  text: string;
  setDecipheredText: (s: string) => void;
}

export enum DecipherTools {
  UNSPECIFIED,
  CEASAR,
  SUBSTITUTION,
  TABLE,
  VIGNERE,
}
