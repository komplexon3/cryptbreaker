import { Problem, ProblemLanguages, ProblemTypes } from './types';

export const vignereProblems: { [id: string]: Problem[] } = {
  en: [
    {
      type: ProblemTypes.VIGNERE,
      title: 'Vignere 1',
      language: ProblemLanguages.EN,
      plainText: 'the quick brown fox jumped over the fence',
      cipherText: 'dde aqimg bbkwx boh fuwlen kvon tra fojco',
      // encoded: ZGRlIGFxaW1nIGJia3d4IGJvaCBmdXdsZW4ga3ZvbiB0cmEgZm9qY28%3D
    },
    {
      type: ProblemTypes.VIGNERE,
      title: 'Vignere 2',
      language: ProblemLanguages.EN,
      plainText: "hello, this is a test string that I am coming up with as I'm typing",
      cipherText: "sallz, phid es a east dpriyc thlp I ax yomtjg ua sits ws I'x pyptjg",
      // encoded: c2FsbHosIHBoaWQgZXMgYSBlYXN0IGRwcml5YyB0aGxwIEkgYXggeW9tdGpnIHVhIHNpdHMgd3MgSSd4IHB5cHRqZw%3D%3D
    },
  ],
  de: [
    {
      type: ProblemTypes.VIGNERE,
      title: 'Vignere 1 DE',
      language: ProblemLanguages.DE,
      plainText: 'the quick brown fox jumped over the fence',
      cipherText: 'dde aqimg bbkwx boh fuwlen kvon tra fojco',
      // encoded: ZGRlIGFxaW1nIGJia3d4IGJvaCBmdXdsZW4ga3ZvbiB0cmEgZm9qY28%3D
    },
    {
      type: ProblemTypes.VIGNERE,
      title: 'Vignere 2 DE',
      language: ProblemLanguages.DE,
      plainText: "hello, this is a test string that I am coming up with as I'm typing",
      cipherText: "sallz, phid es a east dpriyc thlp I ax yomtjg ua sits ws I'x pyptjg",
      // encoded: c2FsbHosIHBoaWQgZXMgYSBlYXN0IGRwcml5YyB0aGxwIEkgYXggeW9tdGpnIHVhIHNpdHMgd3MgSSd4IHB5cHRqZw%3D%3D
    },
  ],
};
