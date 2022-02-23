export interface DecryptionProps {
  text: string;
  setDecipheredText: (s: string) => void;
  onClose?: () => void;
}

export enum DecryptionTools {
  UNSPECIFIED,
  CEASAR,
  SUBSTITUTION,
  TABLE,
  VIGENERE,
}
