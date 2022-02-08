import { isLetter } from '../../../../utils/utils.js';

export const ceasarEncrypt = (plainText: string, shiftValue: number) => {
  return plainText
    .split('')
    .map((c) => computeCeasarShift(c, shiftValue))
    .join('');
};

export const ceasarDecrypt = (cipherText: string, shiftValue: number) => {
  return cipherText
    .split('')
    .map((c) => computeCeasarShift(c, -shiftValue))
    .join('');
};

export const computeCeasarShift = (character: string, shiftValue: number): string => {
  if (character.length !== 1) {
    throw Error('computeCeasarShift expects exactly one character - too few or too many provided');
  }
  if (!isLetter(character)) {
    return character;
  }
  while (shiftValue < 0) {
    shiftValue = 26 + shiftValue;
  }
  const charNumber = character.charCodeAt(0);
  // uppercase letters 97-122
  if (charNumber >= 97) {
    return String.fromCharCode(((charNumber - 97 + shiftValue) % 26) + 97);
  }
  // lowercase letters 65-90
  return String.fromCharCode(((charNumber - 65 + shiftValue) % 26) + 65);
};
