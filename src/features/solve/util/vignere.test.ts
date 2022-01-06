import { vignereDecrypt, vignereEncrypt } from './vignere';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
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

const getRandomVignereKey = (len: number, alphabet: string) =>
  [...Array(len).fill('')].map((_) => alphabet[getRandomInt(0, alphabet.length - 1)]).join('');

describe('vignereEncrypt, vignereDecrypt', () => {
  test('basic test encrypt', () => {
    const vignereKey = 'ako';
    const plainText =
      'hello, my name is marc widmer and I am testing the funtionality of this component.';
    const expectedCipherText =
      'hozly, ay xomo ws worm kinaeb onn W aw hechixu trs febtscnkzidm op hhsg cyapybexh.';
    const cipherText = vignereEncrypt(plainText, vignereKey);
    expect(cipherText).toMatch(expectedCipherText);
  });

  test('basic test decrypt', () => {
    const vignereKey = 'ako';
    const cipherText =
      'hozly, ay xomo ws worm kinaeb onn W aw hechixu trs febtscnkzidm op hhsg cyapybexh.';
    const expectedPlainText =
      'hello, my name is marc widmer and I am testing the funtionality of this component.';
    const plainText = vignereDecrypt(cipherText, vignereKey);
    expect(plainText).toMatch(expectedPlainText);
  });

  test('basic test encrypt - one character key', () => {
    const vignereKey = 'h';
    const plainText =
      'hello, my name is marc widmer and I am testing the funtionality of this component.';
    const expectedCipherText =
      'olssv, tf uhtl pz thyj dpktly huk P ht alzapun aol mbuapvuhspaf vm aopz jvtwvulua.';
    const cipherText = vignereEncrypt(plainText, vignereKey);
    expect(cipherText).toMatch(expectedCipherText);
  });

  test('basic test decrypt - one character key', () => {
    const vignereKey = 'h';
    const cipherText =
      'olssv, tf uhtl pz thyj dpktly huk P ht alzapun aol mbuapvuhspaf vm aopz jvtwvulua.';
    const expectedPlainText =
      'hello, my name is marc widmer and I am testing the funtionality of this component.';
    const plainText = vignereDecrypt(cipherText, vignereKey);
    expect(plainText).toMatch(expectedPlainText);
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

  test('encrypt - upper case vignere key', () => {
    for (let i = 0; i < 10; i++) {
      const testPlainText = getRandomString(getRandomInt(20, 200));
      const vignereKey = getRandomVignereKey(getRandomInt(1, 50), alphabet.toUpperCase());
      expect(vignereDecrypt(vignereEncrypt(testPlainText, vignereKey), vignereKey)).toMatch(
        testPlainText
      );
    }
  });

  test('encrypt - lower case vignere key', () => {
    for (let i = 0; i < 10; i++) {
      const testPlainText = getRandomString(getRandomInt(20, 200));
      const vignereKey = getRandomVignereKey(getRandomInt(1, 50), alphabet);
      expect(vignereDecrypt(vignereEncrypt(testPlainText, vignereKey), vignereKey)).toMatch(
        testPlainText
      );
    }
  });

  test('encrypt - invalid vignere key', () => {
    const plainText =
      'hello, my name is marc widmer and I am testing the funtionality of this component.';
    expect(() => vignereEncrypt(plainText, '')).toThrowError('vignere key invalid');
    expect(() => vignereEncrypt(plainText, '1231819')).toThrowError('vignere key invalid');
    expect(() => vignereEncrypt(plainText, 'hello this text contains spaces and :!$')).toThrowError(
      'vignere key invalid'
    );
    expect(() => vignereEncrypt(plainText, 'a89q3(8opu:{22jl')).toThrowError('vignere key invalid');
  });

  test('decrypt - invalid vignere key', () => {
    const cipherText =
      'hello, my name is marc widmer and I am testing the funtionality of this component.';
    expect(() => vignereDecrypt(cipherText, '')).toThrowError('vignere key invalid');
    expect(() => vignereDecrypt(cipherText, '1231819')).toThrowError('vignere key invalid');
    expect(() =>
      vignereDecrypt(cipherText, 'hello this text contains spaces and :!$')
    ).toThrowError('vignere key invalid');
    expect(() => vignereDecrypt(cipherText, 'a89q3(8opu:{22jl')).toThrowError(
      'vignere key invalid'
    );
  });
});
