import { CeasarDecrypt, CeasarEncrypt, computeCeasarShift, tableDecrypt, tableEncrypt } from '.';

const getRandomInt = (min: number, max: number) => Math.floor(min + Math.random() * (max + 1));
const getRandomString = (len: number) =>
  [...Array(len).fill('')]
    .map((_) => String.fromCharCode(35 + Math.floor(Math.random() * 638)))
    .join('');

describe('CeasarEncrypt, CeasarDecrypt', () => {
  test('basic test encrypt', () => {
    const plainText =
      'hello, my name is marc widmer and I am testing the funtionality of this component.';
    const cipherText = tableEncrypt(plainText, 17, 5);
    expect(tableDecrypt(cipherText, 17, 5)).toMatch(plainText);
  });

  test('arbitrary strings - encrypt and decrypt', () => {
    for (let i = 0; i < 20; i++) {
      const textLength = getRandomInt(20, 200);
      const testPlainText = getRandomString(textLength);
      // set dimensions randomly but big enough for the entire text to fit
      let rows = getRandomInt(0.5 * textLength ** 0.3, 2 * textLength ** 0.5),
        cols = getRandomInt(0.5 * textLength ** 0.3, 2 * textLength ** 0.5);
      while (cols * rows < textLength) {
        if (cols < rows) {
          cols++;
        } else {
          rows++;
        }
      }
      expect(tableDecrypt(tableEncrypt(testPlainText, rows, cols), rows, cols)).toMatch(
        testPlainText
      );
    }
  });
});
