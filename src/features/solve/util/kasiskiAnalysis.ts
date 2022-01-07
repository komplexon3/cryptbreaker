export interface kasiskiItem {
  segment: string;
  interval: interval;
}

export const kasiski = (s: string, segLen: number): kasiskiItem[] => {
  const kasinskiItems: kasiskiItem[] = [];
  findAllMatchesOfLength(s, segLen).forEach((v, k) =>
    joinOverlappingAdjacentIntervals(createIntervals(v, segLen)).forEach((e) =>
      kasinskiItems.push({ segment: k, interval: e })
    )
  );
  return kasinskiItems;
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
    const hits = findStringMatches(s, searchString);
    if (hits.length > 1 && !matches.has(searchString)) {
      matches.set(searchString, hits);
    }
  }
  return matches;
};

interface interval {
  start: number;
  end: number;
}

export const createIntervals = (startPositions: number[], length: number): interval[] => {
  const intervals = startPositions.map((v) => ({ start: v, end: v + length - 1 }));
  return intervals;
};

export const joinOverlappingAdjacentIntervals = (intervals: interval[]): interval[] => {
  const len = intervals.length;
  const joinedIntervals = [];

  let j = 0,
    k = 0;
  for (let i = 0; i < len; i = j) {
    const start = intervals[i].start;
    let end = intervals[i].end;
    while (++j < len && intervals[j].start <= end + 1) {
      end = intervals[j].end;
    }
    joinedIntervals[k++] = { start: start, end: end };
  }
  return joinedIntervals;
};
