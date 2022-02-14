import { ProblemLanguages } from '@/data';

export const isLetter = (c: string) => {
  if (c.length !== 1) {
    throw Error('isLetter expects exactly one character - too few or too many provided');
  }

  return c.match(/[a-zA-Z]/i);
};

export const getRandomInt = (min: number, max: number) =>
  Math.floor(min + Math.random() * (max - min + 1));

/**
 * Note: Doesn't support full UTF-8/Unicode but this is okay as we only expect ASCII characters here.
 * Will throw InvalidCharacterError DOMException if the string contains unsupported characters.
 * @param s
 * @returns
 */
export const encParam = (s: string): string => {
  return encodeURIComponent(window.btoa(s));
};

export const decParam = (s: string): string => {
  return window.atob(decodeURIComponent(s));
};

export const problemPath = (cipherText?: string, language?: ProblemLanguages) =>
  cipherText ? '/solve/' + encParam(cipherText) + '?lng=' + language : '/solve';
