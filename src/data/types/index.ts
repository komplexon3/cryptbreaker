export type Problem = {
  type: ProblemTypes;
  title: string;
  language: ProblemLanguages;
  plainText: string;
  cipherText: string;
};

export enum ProblemLanguages {
  EN = 'en',
  DE = 'de',
}

export enum ProblemTypes {
  CEASAR = 'ceasar',
  SUBSTITUTION = 'substitution',
  TABLE = 'table',
  VIGENERE = 'vigenere',
}
