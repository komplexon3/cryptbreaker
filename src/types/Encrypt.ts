export interface EncryptProps {
  text: string;
  setCipherText: (s: string) => void;
  onClose?: () => void;
}
