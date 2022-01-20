import { vignereProblems } from './vignereProblems';
import { ceasarProblems } from './ceasarProblems';
import { substitutionProblems } from './substitutionProblems';
import { tableProblems } from './tableProblems';
import { Problem, ProblemLanguages, ProblemTypes } from './types';
import { useLng } from '@/i18n';
import { useMemo } from 'react';

export const allProblems = (language: ProblemLanguages) => [
  ...ceasarProblems[language],
  ...substitutionProblems[language],
  ...tableProblems[language],
  ...vignereProblems[language],
];

export const useAllProblems = () => {
  const lng = useLng();
  return useMemo(() => allProblems((lng as ProblemLanguages) || ProblemLanguages.EN), [lng]);
};

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

export const useProblemsOfCipher = (cipher: ProblemTypes) => {
  const lng = useLng();
  return useMemo(
    () => problemsOfCipher(cipher, (lng as ProblemLanguages) || ProblemLanguages.EN),
    [lng, cipher]
  );
};

export const useRandomProblem = () => {
  const lng = useLng();
  return useMemo(() => {
    const allProblemsInLng = allProblems((lng as ProblemLanguages) || ProblemLanguages.EN);
    const prob = allProblemsInLng[Math.floor(allProblemsInLng.length * Math.random())];
    console.log(prob);
    return prob;
  }, [lng]);
};

export const problemLanguagesEnableMap = (lng: ProblemLanguages): { [id: string]: boolean } => {
  return Object.values(ProblemLanguages).reduce(
    (a, k) => ({
      ...a,
      [k]: lng === k,
    }),
    {}
  );
};
