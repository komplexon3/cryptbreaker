export interface EncryptProps {
  text: string;
  setCipherText: (s: string) => void;
  onClose?: () => void;
}

export enum EncryptionTools {
  UNSPECIFIED = 'EncryptionToolUnpecified',
  CEASAR = 'Ceasar',
  SUBSTITUTION = 'Substitution',
  TABLE = 'Table',
  VIGNERE = 'Vignere',
}
