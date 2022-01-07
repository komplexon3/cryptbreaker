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
        intervals: [
          { start: 0, end: 2 },
          { start: 6, end: 8 },
        ],
      },
    ]);
    expect(kasiski('abcaaaabc', 2)).toEqual([
      {
        segment: 'ab',
        intervals: [
          { start: 0, end: 1 },
          { start: 6, end: 7 },
        ],
      },
      {
        segment: 'bc',
        intervals: [
          { start: 1, end: 2 },
          { start: 7, end: 8 },
        ],
      },
      {
        segment: 'aa',
        intervals: [{ start: 3, end: 6 }],
      },
    ]);
    expect(kasiski('abcaaaabc', 1)).toStrictEqual([
      {
        segment: 'a',
        intervals: [
          { start: 0, end: 0 },
          { start: 3, end: 6 },
        ],
      },
      {
        segment: 'b',
        intervals: [
          { start: 1, end: 1 },
          { start: 7, end: 7 },
        ],
      },
      {
        segment: 'c',
        intervals: [
          { start: 2, end: 2 },
          { start: 8, end: 8 },
        ],
      },
    ]);
  });
  test('no hit', () => {
    expect(kasiski('abcaaaabc', 4)).toStrictEqual([]);
    expect(kasiski('abcaaaabc', 5)).toStrictEqual([]);
  });
  test('how long?', () => {
    console.log(
      kasiski(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        3
      )
    );
  });
});
