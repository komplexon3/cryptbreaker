/**
 * Computer relative frequency for letters [a-z] in the provided string.
 * If a character doesn't appear in the string, its relative frequency is defined to be 0.
 * @param s lower-case string, sanitizes from umlauts etc.
 * @returns array of relative frequencies of the input string in alphabetical order.
 */
export const ComputeRelativeFrequency = (s: string): number[] => {
  let absoluteFrequency: { [id: string]: number } = {};
  let totalCount = 0;
  s.split('').forEach((s) => {
    if (s >= 'a' && s <= 'z') {
      absoluteFrequency[s] = absoluteFrequency[s] ? absoluteFrequency[s] + 1 : 1;
      totalCount++;
    }
  });

  let relativeFrequencies: number[] = [];
  let i = 0;
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach((c) => {
    if (absoluteFrequency[c]) {
      relativeFrequencies[i] = absoluteFrequency[c] / totalCount;
    } else {
      relativeFrequencies[i] = 0;
    }
    i++;
  });

  return relativeFrequencies;
};
