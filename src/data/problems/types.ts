export type Problem = {
  type: ProblemTypes;
  title: string;
  plainText: string;
  cipherText: string;
};

export enum ProblemTypes {
  CEASAR = 'ceasar',
  SUBSTITUTION = 'substitution',
  TABLE = 'table',
  VIGNERE = 'vignere',
}
