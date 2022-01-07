import { findAllMatchesOfLength, findStringMatches, kasiski } from '.';

describe('findStringMatches', () => {
  test('basic test', () => {
    expect(findStringMatches('abcaaaabc', 'abc')).toStrictEqual([0, 6]);
    expect(findStringMatches('abcaaaabc', 'aa')).toStrictEqual([3, 5]);
  });
  test('no hit', () => {
    expect(findStringMatches('abcaaaabc', 'uvw')).toStrictEqual([]);
    expect(findStringMatches('abcaaaabc', 'abcd')).toStrictEqual([]);
  });
});

describe('findAllMatchesOfLength', () => {
  test('basic test', () => {
    expect(findAllMatchesOfLength('abcaaaabc', 3)).toStrictEqual(new Map([['abc', [0, 6]]]));
    expect(findAllMatchesOfLength('abcaaaabc', 2)).toStrictEqual(
      new Map([
        ['aa', [3, 5]],
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
      {
        segment: 'abc',
        interval: { start: 0, end: 2 },
      },
      {
        segment: 'abc',
        interval: { start: 6, end: 8 },
      },
    ]);
    expect(kasiski('abcaaaabc', 2)).toEqual([
      {
        segment: 'ab',
        interval: { start: 0, end: 1 },
      },
      {
        segment: 'ab',
        interval: { start: 6, end: 7 },
      },
      {
        segment: 'bc',
        interval: { start: 1, end: 2 },
      },
      {
        segment: 'bc',
        interval: { start: 7, end: 8 },
      },
      {
        segment: 'aa',
        interval: { start: 3, end: 6 },
      },
    ]);
    expect(kasiski('abcaaaabc', 1)).toStrictEqual([
      {
        segment: 'a',
        interval: { start: 0, end: 0 },
      },
      {
        segment: 'a',
        interval: { start: 3, end: 6 },
      },
      {
        segment: 'b',
        interval: { start: 1, end: 1 },
      },
      {
        segment: 'b',
        interval: { start: 7, end: 7 },
      },
      {
        segment: 'c',
        interval: { start: 2, end: 2 },
      },
      {
        segment: 'c',
        interval: { start: 8, end: 8 },
      },
    ]);
  });
  test('no hit', () => {
    expect(kasiski('abcaaaabc', 4)).toStrictEqual([]);
    expect(kasiski('abcaaaabc', 5)).toStrictEqual([]);
  });
});
