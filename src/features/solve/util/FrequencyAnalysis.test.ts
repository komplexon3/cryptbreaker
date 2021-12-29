import { ComputeRelativeFrequency } from '.';

describe('Relative Frequencies', () => {
  test('basic test - full alphabet, no whitespaces', () => {
    const relFreqs = ComputeRelativeFrequency('abcdefghijklmnopqrstuvwxyz');
    relFreqs.forEach((e) => expect(e).toBeCloseTo(1.0 / 26));
  });

  test('basic test - full alphabet, with whitespaces', () => {
    const relFreqs = ComputeRelativeFrequency('abcde fgh  ij klmno  pqrstuv wxyz');
    relFreqs.forEach((e) => expect(e).toBeCloseTo(1.0 / 26));
  });

  test('basic test - full alphabet, with whitespaces and special characters', () => {
    const relFreqs = ComputeRelativeFrequency(
      '!ab*c!@#$%^&*())_{}|":?>de f>?gh  ~±§`ij kl=-mno  pqrstuv wxyz'
    );
    relFreqs.forEach((e) => expect(e).toBeCloseTo(1.0 / 26));
  });

  test('basic test - arbitrary string', () => {
    const testString = 'hello, this is a test.'; // lenght without special characters and whitespaces: 16
    const relFreqs = ComputeRelativeFrequency(testString);
    expect(relFreqs[16]).toBe(0); // q
    expect(relFreqs[0]).toBeCloseTo((testString.match(/a/g) || []).length / 16); // a
    expect(relFreqs[7]).toBeCloseTo((testString.match(/h/g) || []).length / 16); // h
    expect(relFreqs[18]).toBeCloseTo((testString.match(/s/g) || []).length / 16); // s
    expect(relFreqs[19]).toBeCloseTo((testString.match(/t/g) || []).length / 16); // t
  });

  test('basic test - full alphabet, with numbers', () => {
    const relFreqs = ComputeRelativeFrequency('a87bc1de4245fghijk1234567890lmnopqrstuvwxyz');
    relFreqs.forEach((e) => expect(e).toBeCloseTo(1.0 / 26));
  });

  test('edge case - empty string', () => {
    const relFreqs = ComputeRelativeFrequency('');
    relFreqs.forEach((e) => expect(e).toBe(0));
  });

  test('edge case - only special characters and numbers', () => {
    const relFreqs = ComputeRelativeFrequency('12&*%234"{}0179');
    relFreqs.forEach((e) => expect(e).toBe(0));
  });
});
