import { substitutionDecrypt, substitutionEncrypt, verifySubstitutionKey } from './substitution';

const getRandomInt = (min: number, max: number) => Math.floor(min + Math.random() * (max + 1));
const getRandomString = (len: number) =>
  [...Array(len).fill('')]
    .map((_) => String.fromCharCode(35 + Math.floor(Math.random() * 638)))
    .join('');
const getPermutation = (s: string): string => {
  const length = s.length;
  if (length <= 1) {
    return s;
  }
  const divider = Math.floor(Math.random() * (s.length + 1));
  return Math.random() > 0.5
    ? getPermutation(s.substring(divider, length)) + getPermutation(s.substring(0, divider))
    : getPermutation(s.substring(0, divider)) + getPermutation(s.substring(divider, length));
};

describe('verifySubstitutionKey', () => {
  test('basic - plain alphabet', () => {
    expect(() => verifySubstitutionKey('abcdefghijklmnopqrstuvwxyz')).not.toThrowError();
  });
  test('basic - empty key', () => {
    expect(() => verifySubstitutionKey('')).toThrowError('too short');
  });
  test('basic - correct length, just a', () => {
    expect(() => verifySubstitutionKey('aaaaaaaaaaaaaaaaaaaaaaaaaa')).toThrowError(
      'missing character'
    );
  });
  test('arbitrary permutation', () => {
    expect(() =>
      verifySubstitutionKey(getPermutation('abcdefghijklmnopqrstuvwxyz'))
    ).not.toThrowError();
  });
  test('arbitrary permutation of a messed up alphabet', () => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const numberOfMistakes = Math.floor(Math.random() * 10); // max 10 mistakes
    for (let k = 0; k < numberOfMistakes; k++) {
      // select character to duplicate
      const i = Math.floor(Math.random() * 26);
      let j = 0;
      // select character to be removed for dublication
      while (i === j) {
        j = Math.floor(Math.random() * 26);
      }
      // duplicate
      alphabet[j] = alphabet[i];
    }

    const substitutionKey = alphabet.join('');

    expect(() => verifySubstitutionKey(getPermutation(substitutionKey))).toThrowError();
  });
});

describe('CeasarEncrypt, CeasarDecrypt', () => {
  test('basic test encrypt', () => {
    const substitutionKey = 'bcdefghijklmnopqrstuvwxyza';
    const plainText =
      'hello, my name is marc widmer and I am testing the funtionality of this component.';
    const expectedCipherText =
      'ifmmp, nz obnf jt nbsd xjenfs boe J bn uftujoh uif gvoujpobmjuz pg uijt dpnqpofou.';
    const cipherText = substitutionEncrypt(plainText, substitutionKey);
    expect(cipherText).toMatch(expectedCipherText);
  });

  test('basic test decrypt', () => {
    const substitutionKey = 'bcdefghijklmnopqrstuvwxyza';
    const cipherText =
      'ifmmp, nz obnf jt nbsd xjenfs boe J bn uftujoh uif gvoujpobmjuz pg uijt dpnqpofou.';
    const expectedPlainText =
      'hello, my name is marc widmer and I am testing the funtionality of this component.';
    const plainText = substitutionDecrypt(cipherText, substitutionKey);
    expect(plainText).toMatch(expectedPlainText);
  });

  test('arbitrary strings - encrypt and decrypt', () => {
    for (let i = 0; i < 20; i++) {
      const textLength = getRandomInt(20, 200);
      const testPlainText = getRandomString(textLength);
      const substitutionKey = getPermutation('abcdefghijklmnopqrstuvwxyz');
      expect(
        substitutionDecrypt(substitutionEncrypt(testPlainText, substitutionKey), substitutionKey)
      ).toMatch(testPlainText);
    }
  });
  test('encrypt - invalid substitution key', () => {
    const plainText =
      'hello, my name is marc widmer and I am testing the funtionality of this component.';
    expect(() => substitutionEncrypt(plainText, '')).toThrowError();
    expect(() => substitutionEncrypt(plainText, 'hhhhhhhhhhhhhhhhhhhhhhhhhh')).toThrowError();
    expect(() => substitutionEncrypt(plainText, 'bcdefghmjklmnopqrstuvwxyza')).toThrowError();
    expect(() => substitutionEncrypt(plainText, 'bablscdefghmjklmnopqrstuvwxyza')).toThrowError();
  });
  test('decrypt - invalid substitution key', () => {
    const text =
      'hello, my name is marc widmer and I am testing the funtionality of this component.';
    expect(() => substitutionDecrypt(text, '')).toThrowError();
    expect(() => substitutionDecrypt(text, 'hhhhhhhhhhhhhhhhhhhhhhhhhh')).toThrowError();
    expect(() => substitutionDecrypt(text, 'bcdefghmjklmnopqrstuvwxyza')).toThrowError();
    expect(() => substitutionDecrypt(text, 'bablscdefghmjklmnopqrstuvwxyza')).toThrowError();
  });
});