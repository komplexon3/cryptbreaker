import { alphabet } from '@/utils';

/**
 * Computer relative frequency for letters [a-z] in the provided string.
 * If a character doesn't appear in the string, its relative frequency is defined to be 0.
 * @param s lower-case string, sanitized from umlauts etc.
 * @returns array of relative frequencies of the input string in alphabetical order.
 */
export const ComputeRelativeFrequency = (s: string): number[] => {
  let absoluteFrequency: { [id: string]: number } = {};
  let totalCount = 0;
  s.toLowerCase()
    .split('')
    .forEach((s) => {
      if (s >= 'a' && s <= 'z') {
        absoluteFrequency[s] = absoluteFrequency[s] ? absoluteFrequency[s] + 1 : 1;
        totalCount++;
      }
    });

  let relativeFrequencies: number[] = [];
  let i = 0;
  alphabet.split('').forEach((c) => {
    if (absoluteFrequency[c]) {
      relativeFrequencies[i] = absoluteFrequency[c] / totalCount;
    } else {
      relativeFrequencies[i] = 0;
    }
    i++;
  });

  return relativeFrequencies;
};

/**
 * Computer relative frequency for letters [a-z] in the provided string considering a stride.
 * If a character doesn't appear in the string, its relative frequency is defined to be 0.
 * @param s lower-case string, sanitized from umlauts etc.
 * @param stride stride, must be >= 1
 * @returns array of relative frequencies for each segment in the stride
 */

export const ComputeStridedRelativeFrequency = (s: string, stride: number): number[][] => {
  if (stride < 1) {
    throw Error('invalid stride - must be >= 1');
  }

  let stridedText: string[] = new Array(stride).fill('');
  s.split('').forEach((v, i) => (stridedText[i % stride] += v));
  return stridedText.map((v) => ComputeRelativeFrequency(v));
};
