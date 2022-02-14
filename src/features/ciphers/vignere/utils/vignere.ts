import { getRandomInt, isLetter } from '@/utils';
import { computeCeasarShift } from '../../ceasar';

export const vignereEncrypt = (plainText: string, vignereKey: string): string => {
  if (!verifyVignereKey(vignereKey)) {
    throw Error('vignere key invalid - must be a string of letters');
  }
  const vignereKeyOffsets = offsetsFromCharString(vignereKey.toLocaleLowerCase());
  return applyOffsets(plainText, vignereKeyOffsets);
};

export const vignereDecrypt = (cipherText: string, vignereKey: string): string => {
  if (!verifyVignereKey(vignereKey)) {
    throw Error('vignere key invalid - must be a string of letters');
  }
  const invertedVignereKeyOffsets = offsetsFromCharString(vignereKey.toLocaleLowerCase()).map(
    (v) => -v
  );
  return applyOffsets(cipherText, invertedVignereKeyOffsets);
};

const applyOffsets = (s: string, offsets: number[]) => {
  let keyIndex = 0;
  return s
    .split('')
    .map((v) => (isLetter(v) ? computeCeasarShift(v, offsets[keyIndex++ % offsets.length]) : v))
    .join('');
};

const offsetsFromCharString = (s: string) => s.split('').map((c) => c.charCodeAt(0) - 97);

export const verifyVignereKey = (key: string) => /^[a-z]+$/i.test(key);

export const getRandomVignereKey = (len: number, alphabet: string) =>
  [...Array(len).fill('')].map((_) => alphabet[getRandomInt(0, alphabet.length - 1)]).join('');
