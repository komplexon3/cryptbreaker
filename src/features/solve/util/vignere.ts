import { computeCeasarShift, isLetter } from '.';

export const vignereEncrypt = (plainText: string, vignereKey: string): string => {
  if (!verifyVignereKey(vignereKey)) {
    throw Error(
      'vignere key invalid - must be a permutation of the english alphabet in lower case'
    );
  }
  const vignereKeyOffsets = offsetsFromCharString(vignereKey.toLocaleLowerCase());
  return applyOffsets(plainText, vignereKeyOffsets);
};

export const vignereDecrypt = (cipherText: string, vignereKey: string): string => {
  if (!verifyVignereKey(vignereKey)) {
    throw Error(
      'vignere key invalid - must be a permutation of the english alphabet in lower case'
    );
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

const verifyVignereKey = (key: string) => /^[a-z]+$/i.test(key);
