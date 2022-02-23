import { Problem, ProblemLanguages, ProblemTypes } from '../types';
import { ceasarProblems } from './ceasarProblems';
import { substitutionProblems } from './substitutionProblems';
import { tableProblems } from './tableProblems';
import { vigenereProblems } from './vigenereProblems';

export { ceasarProblems, substitutionProblems, tableProblems, vigenereProblems };

export const allProblems = (language: ProblemLanguages) => [
  ...ceasarProblems[language],
  ...substitutionProblems[language],
  ...tableProblems[language],
  ...vigenereProblems[language],
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
    case ProblemTypes.VIGENERE: {
      return vigenereProblems[language];
    }
  }
};
