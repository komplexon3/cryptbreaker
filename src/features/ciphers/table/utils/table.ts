import { alphabet } from '../../../../utils/alphabet.js';

/**
 * Utility function selecting an arbitrary character out of
 * 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 .,:;'
 * @returns Character choosen
 */
const selectRandomCharacter = () => {
  const randomSelectionAlphabet = (alphabet + alphabet.toUpperCase() + ' .,:;').split('');
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
  const cipherTextArr = new Array(rows * columns);

  let k = 0;
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      if (j * columns + i >= length) {
        cipherTextArr[k++] = selectRandomCharacter();
      }
      cipherTextArr[k++] = plainText[j * columns + i];
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
    throw Error('rows too small - must be at least 1');
  }
  if (columns < 1) {
    throw Error('columns too small - must be at least 1');
  }

  const length = cipherText.length;
  const plainTextArr = new Array(length);

  let k = 0;
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      plainTextArr[j * columns + i] = cipherText[k++];
    }
  }

  return plainTextArr.join('');
};
