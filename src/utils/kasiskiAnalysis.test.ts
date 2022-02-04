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
        ['abc', [0, 6]],
        ['aaa', [3, 4]],
      ])
    );
    expect(findAllMatchesOfLength('abcaaaabc', 2)).toStrictEqual(
      new Map([
        ['aa', [3, 4, 5]],
        ['ab', [0, 6]],
        ['bc', [1, 7]],
      ])
    );
    expect(findAllMatchesOfLength('abcaaaabc', 1)).toStrictEqual(
      new Map([
        ['a', [0, 3, 4, 5, 6]],
        ['b', [1, 7]],
        ['c', [2, 8]],
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
          groups: ['abc'],
        },
        {
          character: 'b',
          index: 1,
          groups: ['abc'],
        },
        {
          character: 'c',
          index: 2,
          groups: ['abc'],
        },
        {
          character: 'a',
          index: 3,
          groups: ['aaa'],
        },
        {
          character: 'a',
          index: 4,
          groups: ['aaa'],
        },
        {
          character: 'a',
          index: 5,
          groups: ['aaa'],
        },
        {
          character: 'a',
          index: 6,
          groups: ['abc', 'aaa'],
        },
        {
          character: 'b',
          index: 7,
          groups: ['abc'],
        },
        {
          character: 'c',
          index: 8,
          groups: ['abc'],
        },
      ],
      [
        { segment: 'abc', positions: [0, 6] },
        { segment: 'aaa', positions: [3, 4] },
      ],
    ]);
    expect(kasiski('abcaaaabc', 2)).toEqual([
      [
        {
          character: 'a',
          index: 0,
          groups: ['ab'],
        },
        {
          character: 'b',
          index: 1,
          groups: ['ab', 'bc'],
        },
        {
          character: 'c',
          index: 2,
          groups: ['bc'],
        },
        {
          character: 'a',
          index: 3,
          groups: ['aa'],
        },
        {
          character: 'a',
          index: 4,
          groups: ['aa'],
        },
        {
          character: 'a',
          index: 5,
          groups: ['aa'],
        },
        {
          character: 'a',
          index: 6,
          groups: ['ab', 'aa'],
        },
        {
          character: 'b',
          index: 7,
          groups: ['ab', 'bc'],
        },
        {
          character: 'c',
          index: 8,
          groups: ['bc'],
        },
      ],
      [
        { segment: 'ab', positions: [0, 6] },
        { segment: 'bc', positions: [1, 7] },
        { segment: 'aa', positions: [3, 4, 5] },
      ],
    ]);
    expect(kasiski('abcaaaabc', 1)).toStrictEqual([
      [
        {
          character: 'a',
          index: 0,
          groups: ['a'],
        },
        {
          character: 'b',
          index: 1,
          groups: ['b'],
        },
        {
          character: 'c',
          index: 2,
          groups: ['c'],
        },
        {
          character: 'a',
          index: 3,
          groups: ['a'],
        },
        {
          character: 'a',
          index: 4,
          groups: ['a'],
        },
        {
          character: 'a',
          index: 5,
          groups: ['a'],
        },
        {
          character: 'a',
          index: 6,
          groups: ['a'],
        },
        {
          character: 'b',
          index: 7,
          groups: ['b'],
        },
        {
          character: 'c',
          index: 8,
          groups: ['c'],
        },
      ],
      [
        { segment: 'a', positions: [0, 3, 4, 5, 6] },
        { segment: 'b', positions: [1, 7] },
        { segment: 'c', positions: [2, 8] },
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
