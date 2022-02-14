import { alphabet } from '@/utils';
import { getRandomVignereKey, verifyVignereKey, vignereDecrypt, vignereEncrypt } from './vignere';

const getRandomInt = (min: number, max: number) => Math.floor(min + Math.random() * (max + 1));
const getRandomString = (len: number) =>
  [...Array(len).fill('')]
    .map((_) => String.fromCharCode(35 + Math.floor(Math.random() * 638)))
    .join('');

const standardPlainText =
  'hello, my name is marc widmer and I am testing the funtionality of this component.';

describe('vignereEncrypt, vignereDecrypt', () => {
  test('basic test encrypt', () => {
    const vignereKey = 'ako';
    const expectedCipherText =
      'hozly, ay xomo ws worm kinaeb onn W aw hechixu trs febtscnkzidm op hhsg cyapybexh.';
    const cipherText = vignereEncrypt(standardPlainText, vignereKey);
    expect(cipherText).toMatch(expectedCipherText);
  });

  test('basic test decrypt', () => {
    const vignereKey = 'ako';
    const cipherText =
      'hozly, ay xomo ws worm kinaeb onn W aw hechixu trs febtscnkzidm op hhsg cyapybexh.';
    const plainText = vignereDecrypt(cipherText, vignereKey);
    expect(plainText).toMatch(standardPlainText);
  });

  test('basic test encrypt - one character key', () => {
    const vignereKey = 'h';
    const expectedCipherText =
      'olssv, tf uhtl pz thyj dpktly huk P ht alzapun aol mbuapvuhspaf vm aopz jvtwvulua.';
    const cipherText = vignereEncrypt(standardPlainText, vignereKey);
    expect(cipherText).toMatch(expectedCipherText);
  });

  test('basic test decrypt - one character key', () => {
    const vignereKey = 'h';
    const cipherText =
      'olssv, tf uhtl pz thyj dpktly huk P ht alzapun aol mbuapvuhspaf vm aopz jvtwvulua.';
    const plainText = vignereDecrypt(cipherText, vignereKey);
    expect(plainText).toMatch(standardPlainText);
  });

  test('arbitrary strings, arbitrary keys - encrypt and decrypt', () => {
    for (let i = 0; i < 50; i++) {
      const testPlainText = getRandomString(getRandomInt(20, 200));
      const vignereKey = getRandomVignereKey(
        getRandomInt(1, 50),
        alphabet + alphabet.toUpperCase()
      );
      expect(vignereDecrypt(vignereEncrypt(testPlainText, vignereKey), vignereKey)).toMatch(
        testPlainText
      );
    }
  });

  test('encrypt/decrypt - upper case vignere key', () => {
    for (let i = 0; i < 10; i++) {
      const testPlainText = getRandomString(getRandomInt(20, 200));
      const vignereKey = getRandomVignereKey(getRandomInt(1, 50), alphabet.toUpperCase());
      expect(vignereDecrypt(vignereEncrypt(testPlainText, vignereKey), vignereKey)).toMatch(
        testPlainText
      );
    }
  });

  test('encrypt/decrypt - lower case vignere key', () => {
    for (let i = 0; i < 10; i++) {
      const testPlainText = getRandomString(getRandomInt(20, 200));
      const vignereKey = getRandomVignereKey(getRandomInt(1, 50), alphabet);
      expect(vignereDecrypt(vignereEncrypt(testPlainText, vignereKey), vignereKey)).toMatch(
        testPlainText
      );
    }
  });

  test('encrypt - invalid vignere key', () => {
    expect(() => vignereEncrypt(standardPlainText, '')).toThrowError('vignere key invalid');
    expect(() => vignereEncrypt(standardPlainText, '1231819')).toThrowError('vignere key invalid');
    expect(() =>
      vignereEncrypt(standardPlainText, 'hello this text contains spaces and :!$')
    ).toThrowError('vignere key invalid');
    expect(() => vignereEncrypt(standardPlainText, 'a89q3(8opu:{22jl')).toThrowError(
      'vignere key invalid'
    );
  });

  test('decrypt - invalid vignere key', () => {
    expect(() => vignereDecrypt(standardPlainText, '')).toThrowError('vignere key invalid');
    expect(() => vignereDecrypt(standardPlainText, '1231819')).toThrowError('vignere key invalid');
    expect(() =>
      vignereDecrypt(standardPlainText, 'hello this text contains spaces and :!$')
    ).toThrowError('vignere key invalid');
    expect(() => vignereDecrypt(standardPlainText, 'a89q3(8opu:{22jl')).toThrowError(
      'vignere key invalid'
    );
  });
});

describe('verifyVignereKey', () => {
  test('basic valid key', () => {
    const vignereKey = 'ako';
    expect(verifyVignereKey(vignereKey)).toBeTruthy();
  });

  test('valid one character key', () => {
    const vignereKey = 'h';
    expect(verifyVignereKey(vignereKey)).toBeTruthy();
  });

  test('arbitrary valid keys', () => {
    for (let i = 0; i < 50; i++) {
      const vignereKey = getRandomVignereKey(
        getRandomInt(1, 50),
        alphabet + alphabet.toUpperCase()
      );
      expect(verifyVignereKey(vignereKey)).toBeTruthy();
    }
  });

  test('arbitrary valid upper case vignere keys', () => {
    for (let i = 0; i < 10; i++) {
      const vignereKey = getRandomVignereKey(getRandomInt(1, 50), alphabet.toUpperCase());
      expect(verifyVignereKey(vignereKey)).toBeTruthy();
    }
  });

  test('arbitrary valid lower case vignere keys', () => {
    for (let i = 0; i < 10; i++) {
      const vignereKey = getRandomVignereKey(getRandomInt(1, 50), alphabet);
      expect(verifyVignereKey(vignereKey)).toBeTruthy();
    }
  });

  test('invalid vignere key', () => {
    expect(verifyVignereKey('')).toBeFalsy();
    expect(verifyVignereKey('1231819')).toBeFalsy();
    expect(verifyVignereKey('hello this text contains spaces and :!$')).toBeFalsy();
    expect(verifyVignereKey('a89q3(8opu:{22jl')).toBeFalsy();
  });
});
