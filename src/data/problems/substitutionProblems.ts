import { Problem, ProblemLanguages, ProblemTypes } from './types';

export const substitutionProblems: { [id: string]: Problem[] } = {
  en: [
    {
      type: ProblemTypes.SUBSTITUTION,
      title: 'Substitution 1',
      language: ProblemLanguages.EN,
      plainText: 'THE QUICK BROWN FOX JUMPED OVER THE FENCE',
      cipherText: 'RCY AWLUM KOESN JEZ FWBHYD EXYO RCY JYNUY',
      // encoded: UkNZIEFXTFVNIEtPRVNOIEpFWiBGV0JIWUQgRVhZTyBSQ1kgSllOVVk%3D
    },
    {
      type: ProblemTypes.SUBSTITUTION,
      title: 'Substitution 2',
      language: ProblemLanguages.EN,
      plainText: "HELLO, THIS IS A TEST STRING THAT I AM COMING UP WITH AS I'M TYPING",
      cipherText: "AHCCG, ZAIO IO B ZHOZ OZVIXW ZABZ I BJ KGJIXW QM YIZA BO I'J ZUMIXW",
      // encoded: QUhDQ0csIFpBSU8gSU8gQiBaSE9aIE9aVklYVyBaQUJaIEkgQkogS0dKSVhXIFFNIFlJWkEgQk8gSSdKIFpVTUlYVw%3D%3D
    },
  ],
  de: [
    {
      type: ProblemTypes.SUBSTITUTION,
      title: 'Substitution 1 DE',
      language: ProblemLanguages.DE,
      plainText: 'THE QUICK BROWN FOX JUMPED OVER THE FENCE',
      cipherText: 'RCY AWLUM KOESN JEZ FWBHYD EXYO RCY JYNUY',
      // encoded: UkNZIEFXTFVNIEtPRVNOIEpFWiBGV0JIWUQgRVhZTyBSQ1kgSllOVVk%3D
    },
    {
      type: ProblemTypes.SUBSTITUTION,
      title: 'Substitution 2 DE',
      language: ProblemLanguages.DE,
      plainText: "HELLO, THIS IS A TEST STRING THAT I AM COMING UP WITH AS I'M TYPING",
      cipherText: "AHCCG, ZAIO IO B ZHOZ OZVIXW ZABZ I BJ KGJIXW QM YIZA BO I'J ZUMIXW",
      // encoded: QUhDQ0csIFpBSU8gSU8gQiBaSE9aIE9aVklYVyBaQUJaIEkgQkogS0dKSVhXIFFNIFlJWkEgQk8gSSdKIFpVTUlYVw%3D%3D
    },
  ],
};
