import { ProblemLanguages } from '../types';

export const problemLanguagesEnableMap = (lng: ProblemLanguages): { [id: string]: boolean } => {
  return Object.values(ProblemLanguages).reduce(
    (a, k) => ({
      ...a,
      [k]: lng === k,
    }),
    {}
  );
};
