import { ComputeFriedmannCharacteristic } from './FriedmannCharacteristic';

describe('Compute Strided Friedman Characteristic', () => {
  test('basic test - full alphabet, key 1', () => {
    expect(ComputeFriedmannCharacteristic('abcdefghijklmnopqrstuvwxyz', 1)).toBeCloseTo(0.0);
  });
  test('basic test - full alphabet, key 2', () => {
    expect(ComputeFriedmannCharacteristic('abcdefghijklmnopqrstuvwxyz', 2)).not.toBeCloseTo(0.0);
  });
  test('basic test - full alphabet * 3 strided, key 1', () => {
    expect(
      ComputeFriedmannCharacteristic(
        'aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz',
        1
      )
    ).toBeCloseTo(0.0);
  });
  test('basic test - full alphabet * 3 strided, key 3', () => {
    expect(
      ComputeFriedmannCharacteristic(
        'aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz',
        3
      )
    ).toBeCloseTo(0.0);
  });
  test('key <1 should return error', () => {
    expect(() => ComputeFriedmannCharacteristic('aaaaaaaaaaaaaaaaaaaa', 0)).toThrowError();
    expect(() => ComputeFriedmannCharacteristic('', 0)).toThrowError();
    expect(() => ComputeFriedmannCharacteristic('aaaaaaaaaaaaaaaaaaaa', -7)).toThrowError();
    expect(() => ComputeFriedmannCharacteristic('', -2)).toThrowError();
  });

  test('empty string should return 1', () => {
    expect(ComputeFriedmannCharacteristic('', 1)).toBeCloseTo(0.0);
    expect(ComputeFriedmannCharacteristic('', 17)).toBeCloseTo(0.0);
  });
});
