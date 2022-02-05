import { Problem, ProblemLanguages, ProblemTypes } from '../types';
import { ceasarProblems } from './ceasarProblems';
import { substitutionProblems } from './substitutionProblems';
import { tableProblems } from './tableProblems';
import { vignereProblems } from './vignereProblems';

export { ceasarProblems, substitutionProblems, tableProblems, vignereProblems };

export const allProblems = (language: ProblemLanguages) => [
  ...ceasarProblems[language],
  ...substitutionProblems[language],
  ...tableProblems[language],
  ...vignereProblems[language],
];

export const problemsOfCipher = (cipher: ProblemTypes, language: ProblemLanguages): Problem[] => {
  switch (cipher) {
    case ProblemTypes.CEASAR: {
      return ceasarProblems[language];
    }
    case ProblemTypes.SUBSTITUTION: {
      return substitutionProblems[language];
    }
    case ProblemTypes.TABLE: {
      return tableProblems[language];
    }
    case ProblemTypes.VIGNERE: {
      return vignereProblems[language];
    }
  }
};
