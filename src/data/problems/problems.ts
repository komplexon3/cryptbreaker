import { vignereProblems } from './vignereProblems';
import { ceasarProblems } from './ceasarProblems';
import { substitutionProblems } from './substitutionProblems';
import { tableProblems } from './tableProblems';
import { Problem, ProblemTypes } from './types';

export const allProblems = [
  ...ceasarProblems,
  ...substitutionProblems,
  ...tableProblems,
  ...vignereProblems,
];

export const problemsOfCipher = (cipher: ProblemTypes): Problem[] => {
  switch (cipher) {
    case ProblemTypes.CEASAR: {
      return ceasarProblems;
    }
    case ProblemTypes.SUBSTITUTION: {
      return substitutionProblems;
    }
    case ProblemTypes.TABLE: {
      return tableProblems;
    }
    case ProblemTypes.VIGNERE: {
      return vignereProblems;
    }
  }
};
