import { vignereProblems } from './vignereProblems';
import { ceasarProblems } from './ceasarProblems';
import { substitutionProblems } from './substitutionProblems';
import { tableProblems } from './tableProblems';

export const allProblems = [
  ...ceasarProblems,
  ...substitutionProblems,
  ...tableProblems,
  ...vignereProblems,
];
