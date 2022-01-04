import { isLetter } from '.';

export const substitutionEncrypt = (plainText: string, substitutionKey: string): string => {
  verifySubstitutionKey(substitutionKey);
  substitutionKey = substitutionKey.toLocaleLowerCase();
  return plainText
    .split('')
    .map((v) => substituteCharacter(v, substitutionKey))
    .join('');
};

export const substitutionDecrypt = (cipherText: string, substitutionKey: string): string => {
  const invertedSubsitutionKey = Array(26)
    .fill('')
    .map((v, i) => String.fromCharCode(substitutionKey.indexOf(String.fromCharCode(i + 97)) + 97))
    .join('');
  return substitutionEncrypt(cipherText, invertedSubsitutionKey);
};

const substituteCharacter = (character: string, substitutionKey: string): string => {
  if (character.length !== 1) {
    throw Error('substituteCharacter expects exactly one character - too few or too many provided');
  }
  if (!isLetter(character)) {
    return character;
  }
  const charNumber = character.charCodeAt(0);
  // lowercase letters 97-122
  if (charNumber >= 97) {
    return substitutionKey[charNumber - 97];
  }
  // uppercase letters 65-90
  return substitutionKey[charNumber - 65].toUpperCase();
};

export const verifySubstitutionKey = (key: string) => {
  if (key.length !== 26) {
    throw Error('substitution key too short - some values must be missing');
  }
  'abcdefghijklmnopqrstivwxyz'.split('').forEach((v) => {
    if (key.indexOf(v) < 0) {
      throw Error('character missing in substitution key - missing character: ' + v);
    }
  });
};
