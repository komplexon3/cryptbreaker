export type Problem = {
  type: ProblemTypes;
  title: string;
  plainText: string;
  cipherText: string;
};

export enum ProblemTypes {
  CEASAR,
  SUBSTITUTION,
  TABLE,
  VIGNERE,
}
