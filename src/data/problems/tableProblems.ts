import { Problem, ProblemTypes } from './types';

export const tableProblems: Problem[] = [
  {
    type: ProblemTypes.TABLE,
    title: 'Table 1',
    plainText: 'the quick brown fox jumped over the fence',
    cipherText: 'tqkofjevtfehu woudeheeibnxm ren cr  po  c',
    // encoded: dHFrb2ZqZXZ0ZmVodSB3b3VkZWhlZWlibnhtIHJlbiBjciAgcG8gIGM%3D
  },
  {
    type: ProblemTypes.TABLE,
    title: 'Table 2',
    plainText: "hello, this is a test string that I am coming up with as I'm typing",
    cipherText: "hohi tr taog h .ie,ist it mm w ltn l s esnhl iuia'yg lt astga cnptsmp",
    // encoded: aG9oaSB0ciB0YW9nIGggLmllLGlzdCBpdCBtbSB3IGx0biBsIHMgZXNuaGwgaXVpYSd5ZyBsdCBhc3RnYSBjbnB0c21w
  },
];
