import { getRandomInt } from '@/utils';
import {
  acceptedTableDimensions,
  getRandomTableKey,
  tableDecrypt,
  tableDimensionsSeachSpace,
  tableEncrypt,
} from './table';

const getRandomString = (len: number) =>
  [...Array(len).fill('')]
    .map((_) => String.fromCharCode(35 + Math.floor(Math.random() * 638)))
    .join('');

describe('TableEncrypt, TableDecrypt', () => {
  test('basic test encrypt', () => {
    const plainText =
      'hello, my name is marc widmer and I am testing the funtionality of this component.';
    const cipherText = tableEncrypt(plainText, 10, 11);
    expect(tableDecrypt(cipherText, 10, 11)).toMatch(plainText);
  });

  test('arbitrary strings - encrypt and decrypt', () => {
    for (let i = 0; i < 20; i++) {
      const textLength = getRandomInt(20, 200);
      const testPlainText = getRandomString(textLength);
      // set dimensions randomly but in the valid range and big enough for the text
      const { rows, columns } = getRandomTableKey(textLength);
      expect(tableDecrypt(tableEncrypt(testPlainText, rows, columns), rows, columns)).toMatch(
        testPlainText
      );
    }
  });
});

describe('table dimension seatch space', () => {
  test('arbitrary strings - encrypt and decrypt', () => {
    for (let i = 0; i < 200; i++) {
      const textLength = getRandomInt(1, 1000000);
      // set dimensions randomly but in the valid range and big enough for the text length
      const { rowsMin, rowsMax, columnsMin, columnsMax } = acceptedTableDimensions(textLength);
      let rows = getRandomInt(rowsMin, rowsMax),
        cols = getRandomInt(columnsMin, columnsMax);
      while (cols * rows < textLength) {
        if (cols < rows && cols < columnsMax) {
          cols++;
        } else if (rows < rowsMax) {
          rows++;
        } else {
          rows = getRandomInt(rowsMin, rowsMax);
          cols = getRandomInt(columnsMin, columnsMax);
        }
      }
      const searchSpace = tableDimensionsSeachSpace(rows * cols);
      expect(rows).toBeGreaterThanOrEqual(searchSpace.rowsMin);
      expect(rows).toBeLessThanOrEqual(searchSpace.rowsMax);
      expect(cols).toBeGreaterThanOrEqual(searchSpace.columnsMin);
      expect(cols).toBeLessThanOrEqual(searchSpace.columnsMax);
    }
  });
});
