export const isLetter = (c: string) => {
  if (c.length !== 1) {
    throw Error('isLetter expects exactly one character - too few or too many provided');
  }

  return c.match(/[a-zA-Z]/i);
};

/**
 * Note: Doesn't support full UTF-8/Unicode but this is okay as we only expect ASCII characters here.
 * Will throw InvalidCharacterError DOMException if the string contains unsupported characters.
 * @param s
 * @returns
 */
export const encParam = (s: string): string => {
  return encodeURIComponent(window.btoa(s));
};

export const decParam = (s: string): string => {
  return window.atob(decodeURIComponent(s));
};