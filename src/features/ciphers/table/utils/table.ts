import { alphabet, getRandomInt } from '@/utils';

// confif values used accross table elements
export const maxColumns = 10;
export const minColumns = 5;
export const maxRows = 10;
export const minRows = 1;

/**
 * Utility function selecting an arbitrary character out of
 * 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 .,:;'
 * @returns Character choosen
 */
const selectRandomCharacter = () => {
  const randomSelectionAlphabet = alphabet.toUpperCase().split('');
  return randomSelectionAlphabet[Math.floor(Math.random() * randomSelectionAlphabet.length)];
};

/**
 * Decrypts a text that has been encrypted with the table method.
 * @param plainText Text to be encrypted.
 * @param rows Number of rows to be used in the encryption table. Must be at least 1.
 * @param columns Number of columns to be used in the encryption table. Must be at least 1.
 * @returns Text encrtypted with the given parameters.
 */
export const tableEncrypt = (plainText: string, rows: number, columns: number): string => {
  if (rows < 1) {
    throw Error('rows must be at least 1');
  }
  if (columns < 1) {
    throw Error('columns must be at least 1');
  }

  const length = plainText.length;
  const tablesRequired = Math.ceil(length / (rows * columns));
  const cipherTextArr = new Array(tablesRequired * rows * columns);

  console.log('encrypt');
  console.log(tablesRequired);

  let k = 0;

  for (let t = 0; t < tablesRequired; t++) {
    for (let c = 0; c < columns; c++) {
      for (let r = 0; r < rows; r++) {
        if (t * rows * columns + r * columns + c >= length) {
          cipherTextArr[k++] = selectRandomCharacter();
        }
        cipherTextArr[k++] = plainText[t * rows * columns + r * columns + c];
      }
    }
  }

  return cipherTextArr.join('');
};

/**
 * Decrypts a text that has been encrypted with the table method.
 * @param cipherText Text encrypted with the table method.
 * @param rows Number of rows used in the encryption table. Must be at least 1.
 * @param columns Number of columns used in the encryption table. Must be at least 1.
 * @returns Text decrypted with the given parameters.
 */
export const tableDecrypt = (cipherText: string, rows: number, columns: number): string => {
  if (rows < 1) {
    throw Error('rows must be at least 1');
  }
  if (columns < 1) {
    throw Error('columns must be at least 1');
  }

  const length = cipherText.length;
  const tablesRequired = Math.ceil(length / (rows * columns));
  const plainTextArr = new Array(length);

  console.log('decrypt');
  console.log(tablesRequired);

  let k = 0;
  for (let t = 0; t < tablesRequired; t++) {
    for (let c = 0; c < columns; c++) {
      for (let r = 0; r < rows; r++) {
        if (t * rows * columns + r * columns + c >= length) {
          continue;
        }
        plainTextArr[t * rows * columns + r * columns + c] = cipherText[k++];
      }
    }
  }

  return plainTextArr.join('');
};

export const getRandomTableKey = (
  rowsMin: number,
  rowsMax: number,
  columnsMin: number,
  columnsMax: number
): { rows: number; columns: number } => {
  let rows = getRandomInt(rowsMin, rowsMax),
    columns = getRandomInt(columnsMin, columnsMax);
  return { rows, columns };
};
