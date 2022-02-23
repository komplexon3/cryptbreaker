import { alphabet } from '@/utils';
import {
  getRandomVigenereKey,
  verifyVigenereKey,
  vigenereDecrypt,
  vigenereEncrypt,
} from './vigenere';

const getRandomInt = (min: number, max: number) => Math.floor(min + Math.random() * (max + 1));
const getRandomString = (len: number) =>
  [...Array(len).fill('')]
    .map((_) => String.fromCharCode(35 + Math.floor(Math.random() * 638)))
    .join('');

const standardPlainText =
  'hello, my name is marc widmer and I am testing the funtionality of this component.';

describe('vigenereEncrypt, vigenereDecrypt', () => {
  test('basic test encrypt', () => {
    const vigenereKey = 'ako';
    const expectedCipherText =
      'hozly, ay xomo ws worm kinaeb onn W aw hechixu trs febtscnkzidm op hhsg cyapybexh.';
    const cipherText = vigenereEncrypt(standardPlainText, vigenereKey);
    expect(cipherText).toMatch(expectedCipherText);
  });

  test('basic test decrypt', () => {
    const vigenereKey = 'ako';
    const cipherText =
      'hozly, ay xomo ws worm kinaeb onn W aw hechixu trs febtscnkzidm op hhsg cyapybexh.';
    const plainText = vigenereDecrypt(cipherText, vigenereKey);
    expect(plainText).toMatch(standardPlainText);
  });

  test('basic test encrypt - one character key', () => {
    const vigenereKey = 'h';
    const expectedCipherText =
      'olssv, tf uhtl pz thyj dpktly huk P ht alzapun aol mbuapvuhspaf vm aopz jvtwvulua.';
    const cipherText = vigenereEncrypt(standardPlainText, vigenereKey);
    expect(cipherText).toMatch(expectedCipherText);
  });

  test('basic test decrypt - one character key', () => {
    const vigenereKey = 'h';
    const cipherText =
      'olssv, tf uhtl pz thyj dpktly huk P ht alzapun aol mbuapvuhspaf vm aopz jvtwvulua.';
    const plainText = vigenereDecrypt(cipherText, vigenereKey);
    expect(plainText).toMatch(standardPlainText);
  });

  test('arbitrary strings, arbitrary keys - encrypt and decrypt', () => {
    for (let i = 0; i < 50; i++) {
      const testPlainText = getRandomString(getRandomInt(20, 200));
      const vigenereKey = getRandomVigenereKey(
        getRandomInt(1, 50),
        alphabet + alphabet.toUpperCase()
      );
      expect(vigenereDecrypt(vigenereEncrypt(testPlainText, vigenereKey), vigenereKey)).toMatch(
        testPlainText
      );
    }
  });

  test('encrypt/decrypt - upper case vigenere key', () => {
    for (let i = 0; i < 10; i++) {
      const testPlainText = getRandomString(getRandomInt(20, 200));
      const vigenereKey = getRandomVigenereKey(getRandomInt(1, 50), alphabet.toUpperCase());
      expect(vigenereDecrypt(vigenereEncrypt(testPlainText, vigenereKey), vigenereKey)).toMatch(
        testPlainText
      );
    }
  });

  test('encrypt/decrypt - lower case vigenere key', () => {
    for (let i = 0; i < 10; i++) {
      const testPlainText = getRandomString(getRandomInt(20, 200));
      const vigenereKey = getRandomVigenereKey(getRandomInt(1, 50), alphabet);
      expect(vigenereDecrypt(vigenereEncrypt(testPlainText, vigenereKey), vigenereKey)).toMatch(
        testPlainText
      );
    }
  });

  test('encrypt - invalid vigenere key', () => {
    expect(() => vigenereEncrypt(standardPlainText, '')).toThrowError('vigenere key invalid');
    expect(() => vigenereEncrypt(standardPlainText, '1231819')).toThrowError(
      'vigenere key invalid'
    );
    expect(() =>
      vigenereEncrypt(standardPlainText, 'hello this text contains spaces and :!$')
    ).toThrowError('vigenere key invalid');
    expect(() => vigenereEncrypt(standardPlainText, 'a89q3(8opu:{22jl')).toThrowError(
      'vigenere key invalid'
    );
  });

  test('decrypt - invalid vigenere key', () => {
    expect(() => vigenereDecrypt(standardPlainText, '')).toThrowError('vigenere key invalid');
    expect(() => vigenereDecrypt(standardPlainText, '1231819')).toThrowError(
      'vigenere key invalid'
    );
    expect(() =>
      vigenereDecrypt(standardPlainText, 'hello this text contains spaces and :!$')
    ).toThrowError('vigenere key invalid');
    expect(() => vigenereDecrypt(standardPlainText, 'a89q3(8opu:{22jl')).toThrowError(
      'vigenere key invalid'
    );
  });
});

describe('verifyVigenereKey', () => {
  test('basic valid key', () => {
    const vigenereKey = 'ako';
    expect(verifyVigenereKey(vigenereKey)).toBeTruthy();
  });

  test('valid one character key', () => {
    const vigenereKey = 'h';
    expect(verifyVigenereKey(vigenereKey)).toBeTruthy();
  });

  test('arbitrary valid keys', () => {
    for (let i = 0; i < 50; i++) {
      const vigenereKey = getRandomVigenereKey(
        getRandomInt(1, 50),
        alphabet + alphabet.toUpperCase()
      );
      expect(verifyVigenereKey(vigenereKey)).toBeTruthy();
    }
  });

  test('arbitrary valid upper case vigenere keys', () => {
    for (let i = 0; i < 10; i++) {
      const vigenereKey = getRandomVigenereKey(getRandomInt(1, 50), alphabet.toUpperCase());
      expect(verifyVigenereKey(vigenereKey)).toBeTruthy();
    }
  });

  test('arbitrary valid lower case vigenere keys', () => {
    for (let i = 0; i < 10; i++) {
      const vigenereKey = getRandomVigenereKey(getRandomInt(1, 50), alphabet);
      expect(verifyVigenereKey(vigenereKey)).toBeTruthy();
    }
  });

  test('invalid vigenere key', () => {
    expect(verifyVigenereKey('')).toBeFalsy();
    expect(verifyVigenereKey('1231819')).toBeFalsy();
    expect(verifyVigenereKey('hello this text contains spaces and :!$')).toBeFalsy();
    expect(verifyVigenereKey('a89q3(8opu:{22jl')).toBeFalsy();
  });
});
