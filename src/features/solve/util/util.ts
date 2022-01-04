export const isLetter = (c: string) => {
  if (c.length !== 1) {
    throw Error('isLetter expects exactly one character - too few or too many provided');
  }

  return c.match(/[a-zA-Z]/i);
};
