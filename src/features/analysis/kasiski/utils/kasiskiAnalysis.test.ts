import { findAllMatchesOfLength, findStringMatches, kasiski } from './kasiskiAnalysis';

describe('findStringMatches', () => {
  test('basic test', () => {
    expect(findStringMatches('abcaaaabc', 'abc')).toStrictEqual([0, 6]);
    expect(findStringMatches('abcaaaabc', 'aa')).toStrictEqual([3, 4, 5]);
  });
  test('no hit', () => {
    expect(findStringMatches('abcaaaabc', 'uvw')).toStrictEqual([]);
    expect(findStringMatches('abcaaaabc', 'abcd')).toStrictEqual([]);
  });
});

describe('findAllMatchesOfLength', () => {
  test('basic test', () => {
    expect(findAllMatchesOfLength('abcaaaabc', 3)).toStrictEqual(
      new Map([
        ['ABC', [0, 6]],
        ['AAA', [3, 4]],
      ])
    );
    expect(findAllMatchesOfLength('abcaaaabc', 2)).toStrictEqual(
      new Map([
        ['AA', [3, 4, 5]],
        ['AB', [0, 6]],
        ['BC', [1, 7]],
      ])
    );
    expect(findAllMatchesOfLength('abcaaaabc', 1)).toStrictEqual(
      new Map([
        ['A', [0, 3, 4, 5, 6]],
        ['B', [1, 7]],
        ['C', [2, 8]],
      ])
    );
  });
  test('no hit', () => {
    expect(findAllMatchesOfLength('abcaaaabc', 4)).toStrictEqual(new Map());
    expect(findAllMatchesOfLength('abcaaaabc', 5)).toStrictEqual(new Map());
  });
});

describe('kasiski', () => {
  test('basic test', () => {
    expect(kasiski('abcaaaabc', 3)).toStrictEqual([
      [
        {
          character: 'a',
          index: 0,
          groups: ['ABC'],
        },
        {
          character: 'b',
          index: 1,
          groups: ['ABC'],
        },
        {
          character: 'c',
          index: 2,
          groups: ['ABC'],
        },
        {
          character: 'a',
          index: 3,
          groups: ['AAA'],
        },
        {
          character: 'a',
          index: 4,
          groups: ['AAA'],
        },
        {
          character: 'a',
          index: 5,
          groups: ['AAA'],
        },
        {
          character: 'a',
          index: 6,
          groups: ['ABC', 'AAA'],
        },
        {
          character: 'b',
          index: 7,
          groups: ['ABC'],
        },
        {
          character: 'c',
          index: 8,
          groups: ['ABC'],
        },
      ],
      [
        { segment: 'ABC', positions: [0, 6] },
        { segment: 'AAA', positions: [3, 4] },
      ],
    ]);
    expect(kasiski('abcaaaabc', 2)).toEqual([
      [
        {
          character: 'a',
          index: 0,
          groups: ['AB'],
        },
        {
          character: 'b',
          index: 1,
          groups: ['AB', 'BC'],
        },
        {
          character: 'c',
          index: 2,
          groups: ['BC'],
        },
        {
          character: 'a',
          index: 3,
          groups: ['AA'],
        },
        {
          character: 'a',
          index: 4,
          groups: ['AA'],
        },
        {
          character: 'a',
          index: 5,
          groups: ['AA'],
        },
        {
          character: 'a',
          index: 6,
          groups: ['AB', 'AA'],
        },
        {
          character: 'b',
          index: 7,
          groups: ['AB', 'BC'],
        },
        {
          character: 'c',
          index: 8,
          groups: ['BC'],
        },
      ],
      [
        { segment: 'AB', positions: [0, 6] },
        { segment: 'BC', positions: [1, 7] },
        { segment: 'AA', positions: [3, 4, 5] },
      ],
    ]);
    expect(kasiski('abcaaaabc', 1)).toStrictEqual([
      [
        {
          character: 'a',
          index: 0,
          groups: ['A'],
        },
        {
          character: 'b',
          index: 1,
          groups: ['B'],
        },
        {
          character: 'c',
          index: 2,
          groups: ['C'],
        },
        {
          character: 'a',
          index: 3,
          groups: ['A'],
        },
        {
          character: 'a',
          index: 4,
          groups: ['A'],
        },
        {
          character: 'a',
          index: 5,
          groups: ['A'],
        },
        {
          character: 'a',
          index: 6,
          groups: ['A'],
        },
        {
          character: 'b',
          index: 7,
          groups: ['B'],
        },
        {
          character: 'c',
          index: 8,
          groups: ['C'],
        },
      ],
      [
        { segment: 'A', positions: [0, 3, 4, 5, 6] },
        { segment: 'B', positions: [1, 7] },
        { segment: 'C', positions: [2, 8] },
      ],
    ]);
  });
  test('no hit', () => {
    expect(kasiski('abcaaaabc', 4)).toStrictEqual([
      [
        {
          character: 'a',
          index: 0,
          groups: [],
        },
        {
          character: 'b',
          index: 1,
          groups: [],
        },
        {
          character: 'c',
          index: 2,
          groups: [],
        },
        {
          character: 'a',
          index: 3,
          groups: [],
        },
        {
          character: 'a',
          index: 4,
          groups: [],
        },
        {
          character: 'a',
          index: 5,
          groups: [],
        },
        {
          character: 'a',
          index: 6,
          groups: [],
        },
        {
          character: 'b',
          index: 7,
          groups: [],
        },
        {
          character: 'c',
          index: 8,
          groups: [],
        },
      ],
      [],
    ]);
    expect(kasiski('abcaaaabc', 5)).toStrictEqual([
      [
        {
          character: 'a',
          index: 0,
          groups: [],
        },
        {
          character: 'b',
          index: 1,
          groups: [],
        },
        {
          character: 'c',
          index: 2,
          groups: [],
        },
        {
          character: 'a',
          index: 3,
          groups: [],
        },
        {
          character: 'a',
          index: 4,
          groups: [],
        },
        {
          character: 'a',
          index: 5,
          groups: [],
        },
        {
          character: 'a',
          index: 6,
          groups: [],
        },
        {
          character: 'b',
          index: 7,
          groups: [],
        },
        {
          character: 'c',
          index: 8,
          groups: [],
        },
      ],
      [],
    ]);
  });
});
