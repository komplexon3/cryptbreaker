import { alphabet, getRandomInt } from '@/utils';
import { getRandomTableKey, tableDecrypt, tableEncrypt } from './table';

const getRandomString = (len: number) =>
  [...Array(len).fill('')].map((_) => alphabet[Math.floor(26 * Math.random())]).join('');

describe('TableEncrypt, TableDecrypt', () => {
  test('basic test encrypt', () => {
    const plainText =
      'hello, my name is marc widmer and I am testing the funtionality of this component.';
    const cipherText = tableEncrypt(plainText, 10, 11);
    console.log('start');
    expect(tableDecrypt(cipherText, 10, 11).substring(0, plainText.length)).toMatch(plainText);
    console.log('end');
  });

  test('arbitrary strings - encrypt and decrypt', () => {
    let run = 0;
    for (let i = 0; i < 20; i++) {
      const textLength = getRandomInt(20, 200);
      const testPlainText = getRandomString(textLength);
      // set dimensions randomly but in the valid range and big enough for the text
      console.log('prep');
      const { rows, columns } = getRandomTableKey(1, 1, 10, 10);
      console.log('run');
      console.log(run++);
      expect(tableDecrypt(tableEncrypt(testPlainText, rows, columns), rows, columns)).toMatch(
        testPlainText
      );
      console.log('done');
    }
  });
});
