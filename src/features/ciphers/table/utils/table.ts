import { alphabet, getRandomInt } from '@/utils';

// confif values used accross table elements
export const absoluteMaxColumns = 15;
export const absoluteMinColumns = 8;

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
  if (!verifyDimensions(plainText, rows, columns)) {
    throw Error(`invalid table dimensions`);
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

/**
 * Verifies that the dimensions used are in the permitted range given the text.
 * @param text
 * @param rows
 * @param columns
 * @param columns
 * @returns
 */
export const verifyDimensions = (text: string, rows: number, columns: number) => {
  const { rowsMin, rowsMax, columnsMin, columnsMax } = acceptedTableDimensions(text.length);

  return !(
    rows > rowsMax ||
    rows < rowsMin ||
    columns > columnsMax ||
    columns < columnsMin ||
    rows * columns < text.length
  );
};

/**
 * Computes a range of reasonable table dimensions when encrypting
 * @param textLength
 * @returns
 */
export const acceptedTableDimensions = (textLength: number) => {
  const columnsDelta = 3;

  let dimensionBase = ~~Math.sqrt(textLength);
  dimensionBase = dimensionBase > absoluteMinColumns ? dimensionBase : absoluteMinColumns;
  dimensionBase = dimensionBase < absoluteMaxColumns ? dimensionBase : absoluteMaxColumns;

  const columnsMin =
    dimensionBase - columnsDelta > absoluteMinColumns
      ? dimensionBase - columnsDelta
      : absoluteMinColumns;
  const columnsMax =
    dimensionBase + columnsDelta < absoluteMaxColumns
      ? dimensionBase + columnsDelta
      : absoluteMaxColumns;

  const rowsMin = ~~(textLength / columnsMax);
  const rowsMax = ~~(textLength / columnsMin);

  return {
    rowsMin,
    rowsMax,
    columnsMin,
    columnsMax,
  };
};

/**
 * Computes a reasonable search space for the table dimensions given a text
 * @param textLength - Expected not to be prime as it shoulw be cols * rows from encryption table
 * @returns
 */
export const tableDimensionsSeachSpace = (textLength: number) => {
  const primeFactors = (n: number) => {
    const factors = [];
    let divisor = 2;

    while (n >= 2) {
      if (n % divisor === 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  };
  const factors = primeFactors(textLength);
  let candidates = [
    ...new Set(
      factors
        .reduce(
          // computing all subsets of factors (with 1 added to them)
          (subsets: number[][], value: number) =>
            subsets.concat(subsets.map((set: number[]) => [value, ...set])),
          [[1]]
        )
        // products for each subset
        .map((s: number[]) => {
          return s.reduce((acc, curr) => acc * curr, 1);
        })
    ),
  ]
    // was wrapped in set to remove duplicates
    // compute corresponsing factor to get correct product
    .map((v: number) => {
      return { rows: v, columns: textLength / v };
    })
    // filter out values violating constraints
    .filter((v) => v.columns <= absoluteMaxColumns && v.columns >= absoluteMinColumns);

  let rowsMin, rowsMax, columnsMin, columnsMax: number;

  // failsafe in case the text lenght is prime or always out of accepted column range
  if (candidates.length === 0) {
    rowsMin = 1;
    rowsMax = textLength;
    columnsMin = 1;
    columnsMax = absoluteMaxColumns;
  } else {
    rowsMin = candidates.reduce((acc, curr) => (curr.rows < acc ? curr.rows : acc), textLength);
    rowsMax = candidates.reduce((acc, curr) => (curr.rows > acc ? curr.rows : acc), 1);
    columnsMin = candidates.reduce(
      (acc, curr) => (curr.columns < acc ? curr.columns : acc),
      absoluteMaxColumns
    );
    columnsMax = candidates.reduce((acc, curr) => (curr.columns > acc ? curr.columns : acc), 1);
  }

  return {
    rowsMin,
    rowsMax,
    columnsMin,
    columnsMax,
  };
};

/**
 * Generate random but valid table dimensions to encrypt a text with table encryption
 * @param textLength
 * @returns
 */
export const getRandomTableKey = (textLength: number): { rows: number; columns: number } => {
  const { rowsMin, rowsMax, columnsMin, columnsMax } = acceptedTableDimensions(textLength);
  let rows = getRandomInt(rowsMin, rowsMax),
    columns = getRandomInt(columnsMin, columnsMax);
  while (columns * rows < textLength) {
    if (columns < rows && columns < columnsMax) {
      columns++;
    } else if (rows < rowsMax) {
      rows++;
    } else {
      rows = getRandomInt(rowsMin, rowsMax);
      columns = getRandomInt(columnsMin, columnsMax);
    }
  }

  return { rows, columns };
};
