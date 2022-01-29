export interface kasiskiItem {
  index: number;
  character: string;
  groups: string[];
}

const initKasiski = (s: string): kasiskiItem[] => {
  return s.split('').map((v, i) => {
    return {
      index: i,
      character: v,
      groups: [],
    };
  });
};

export const kasiski = (s: string, segLen: number): [kasiskiItem[], string[]] => {
  const kasinskiItems = initKasiski(s);
  const kasiskiGroups: string[] = [];
  findAllMatchesOfLength(s, segLen).forEach((v, k) => {
    kasiskiGroups.push(k);
    v.forEach((matchIndex) => {
      for (let i = 0; i < segLen; i++) {
        kasinskiItems[matchIndex + i].groups.push(k);
      }
    });
  });
  return [kasinskiItems, kasiskiGroups];
};

export const findStringMatches = (s: string, searchString: string): number[] => {
  const match = s.matchAll(RegExp(searchString, 'gi'));
  const indices: number[] = [];
  for (let m = match.next(); !m.done; m = match.next()) {
    const index = m.value.index;
    if (index === undefined) {
      continue;
    }
    indices.push(index);
  }
  return indices;
};

export const findAllMatchesOfLength = (s: string, segLen: number): Map<string, number[]> => {
  const matches = new Map<string, number[]>();

  for (let i = 0; i + segLen < s.length; i++) {
    const searchString = s.substring(i, i + segLen);
    if (/[a-z]*\s[a-z]*/.test(searchString)) {
      continue;
    }
    const hits = findStringMatches(s, searchString);
    if (hits.length > 1 && !matches.has(searchString)) {
      matches.set(searchString, hits);
    }
  }
  return matches;
};
