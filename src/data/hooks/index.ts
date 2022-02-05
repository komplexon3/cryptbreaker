import { useLng } from '@/hooks';
import { useMemo } from 'react';
import { allProblems, problemsOfCipher } from '../problems';
import { ProblemLanguages, ProblemTypes } from '../types';

export const useAllProblems = () => {
  const lng = useLng();
  return useMemo(() => allProblems((lng as ProblemLanguages) || ProblemLanguages.EN), [lng]);
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
    return prob;
  }, [lng]);
};
