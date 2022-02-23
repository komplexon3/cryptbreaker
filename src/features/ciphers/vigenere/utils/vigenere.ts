import { getRandomInt, isLetter } from '@/utils';
import { computeCeasarShift } from '../../ceasar';

export const vigenereEncrypt = (plainText: string, vigenereKey: string): string => {
  if (!verifyVigenereKey(vigenereKey)) {
    throw Error('vigenere key invalid - must be a string of letters');
  }
  const vigenereKeyOffsets = offsetsFromCharString(vigenereKey.toLocaleLowerCase());
  return applyOffsets(plainText, vigenereKeyOffsets);
};

export const vigenereDecrypt = (cipherText: string, vigenereKey: string): string => {
  if (!verifyVigenereKey(vigenereKey)) {
    throw Error('vigenere key invalid - must be a string of letters');
  }
  const invertedVigenereKeyOffsets = offsetsFromCharString(vigenereKey.toLocaleLowerCase()).map(
    (v) => -v
  );
  return applyOffsets(cipherText, invertedVigenereKeyOffsets);
};

const applyOffsets = (s: string, offsets: number[]) => {
  let keyIndex = 0;
  return s
    .split('')
    .map((v) => (isLetter(v) ? computeCeasarShift(v, offsets[keyIndex++ % offsets.length]) : v))
    .join('');
};

const offsetsFromCharString = (s: string) => s.split('').map((c) => c.charCodeAt(0) - 97);

export const verifyVigenereKey = (key: string) => /^[a-z]+$/i.test(key);

export const getRandomVigenereKey = (len: number, alphabet: string) =>
  [...Array(len).fill('')].map((_) => alphabet[getRandomInt(0, alphabet.length - 1)]).join('');
