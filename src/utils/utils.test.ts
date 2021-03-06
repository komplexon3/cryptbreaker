import { alphabet, digits } from '@/utils';
import { isLetter } from './utils';

describe('isLetter', () => {
  test('check entire alphabet', () => {
    (alphabet + alphabet.toUpperCase()).split('').forEach((v) => {
      expect(isLetter(v)).toBeTruthy();
    });
  });

  test('check special characters', () => {
    '!@#$%^&*())_{:"|}}{<>?~˙´®¥¨˝ˍ©ƒðßˀ.¸ˇ˘˜˛ø'.split('').forEach((v) => {
      expect(isLetter(v)).toBeFalsy();
    });
  });

  test('check numbers', () => {
    digits.split('').forEach((v) => {
      expect(isLetter(v)).toBeFalsy();
    });
  });

  test('throws error on empty string', () => {
    expect(() => isLetter('')).toThrowError(/too few/);
  });

  test('throws error on more than one character', () => {
    expect(() => isLetter('test')).toThrowError(/too many/);
  });
});
