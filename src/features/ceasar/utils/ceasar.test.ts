import { alphabet } from '@/utils';
import { ceasarDecrypt, ceasarEncrypt, computeCeasarShift } from './ceasar';

const getRandomShiftValue = () => Math.floor(Math.random() * 100);
const getRandomString = (len: number) =>
  [...Array(len).fill('')]
    .map((_) => String.fromCharCode(35 + Math.floor(Math.random() * 638)))
    .join('');

describe('computeCeasarShiftInUnicode', () => {
  test('basic test - lower case stays lower case', () => {
    alphabet.split('').forEach((v) => {
      expect(computeCeasarShift(v, getRandomShiftValue())).toMatch(/[a-z]/);
    });
  });

  test('basic test - upper case stays upper case', () => {
    alphabet
      .toUpperCase()
      .split('')
      .forEach((v) => {
        expect(computeCeasarShift(v, getRandomShiftValue())).toMatch(/[A-Z]/);
      });
  });

  test('throws error on empty string', () => {
    expect(() => computeCeasarShift('', getRandomShiftValue())).toThrowError(/too few/);
  });

  test('throws error on more than one character', () => {
    expect(() => computeCeasarShift('test', getRandomShiftValue())).toThrowError(/too many/);
  });
});

describe('CeasarEncrypt, CeasarDecrypt', () => {
  test('basic test encrypt - simple text with special characters and whitespaces', () => {
    expect(
      ceasarEncrypt(
        'Hello, this is a test of my CeasarEncrypt/CeasarDecrypt functions. I hope they work as expected - here are some special characters &*"|]>/!+ and 1382 is a cool number.',
        3
      )
    ).toMatch(
      'Khoor, wklv lv d whvw ri pb FhdvduHqfubsw/FhdvduGhfubsw ixqfwlrqv. L krsh wkhb zrun dv hashfwhg - khuh duh vrph vshfldo fkdudfwhuv &*"|]>/!+ dqg 1382 lv d frro qxpehu.'
    );
  });

  test('basic test decrypt - simple text with special characters, numbers, and whitespaces', () => {
    expect(
      ceasarDecrypt(
        'Khoor, wklv lv d whvw ri pb FhdvduHqfubsw/FhdvduGhfubsw ixqfwlrqv. L krsh wkhb zrun dv hashfwhg - khuh duh vrph vshfldo fkdudfwhuv &*"|]>/!+ dqg 1382 lv d frro qxpehu.',
        3
      )
    ).toMatch(
      'Hello, this is a test of my CeasarEncrypt/CeasarDecrypt functions. I hope they work as expected - here are some special characters &*"|]>/!+ and 1382 is a cool number.'
    );
  });

  test('basic test - upper case stays upper case', () => {
    alphabet
      .toUpperCase()
      .split('')
      .forEach((v) => {
        expect(computeCeasarShift(v, getRandomShiftValue())).toMatch(/[A-Z]/);
      });
  });

  test('arbitrary strings - encrypt and decrypt', () => {
    for (let i = 0; i < 200; i++) {
      const shiftValue = getRandomShiftValue();
      const testPlainText = getRandomString(20);
      expect(ceasarDecrypt(ceasarEncrypt(testPlainText, shiftValue), shiftValue)).toMatch(
        testPlainText
      );
    }
  });
});
