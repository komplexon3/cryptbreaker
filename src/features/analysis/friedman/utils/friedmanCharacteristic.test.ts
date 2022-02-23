import { alphabet } from '@/utils';
import { ComputeFriedmanCharacteristic } from './friedmanCharacteristic';

describe('Compute Strided Friedman Characteristic', () => {
  test('basic test - full alphabet, key 1', () => {
    expect(ComputeFriedmanCharacteristic(alphabet, 1)).toBeCloseTo(0.0);
  });
  test('basic test - full alphabet, key 2', () => {
    expect(ComputeFriedmanCharacteristic(alphabet, 2)).not.toBeCloseTo(0.0);
  });
  test('basic test - full alphabet * 3 strided, key 1', () => {
    expect(
      ComputeFriedmanCharacteristic(
        alphabet
          .split('')
          .map((c) => c + c + c)
          .join(''),
        1
      )
    ).toBeCloseTo(0.0);
  });
  test('basic test - full alphabet * 3 strided, key 3', () => {
    expect(
      ComputeFriedmanCharacteristic(
        alphabet
          .split('')
          .map((c) => c + c + c)
          .join(''),
        3
      )
    ).toBeCloseTo(0.0);
  });
  test('key <1 should return error', () => {
    expect(() => ComputeFriedmanCharacteristic('aaaaaaaaaaaaaaaaaaaa', 0)).toThrowError();
    expect(() => ComputeFriedmanCharacteristic('', 0)).toThrowError();
    expect(() => ComputeFriedmanCharacteristic('aaaaaaaaaaaaaaaaaaaa', -7)).toThrowError();
    expect(() => ComputeFriedmanCharacteristic('', -2)).toThrowError();
  });

  test('empty string should return 1', () => {
    expect(ComputeFriedmanCharacteristic('', 1)).toBeCloseTo(0.0);
    expect(ComputeFriedmanCharacteristic('', 17)).toBeCloseTo(0.0);
  });
});
