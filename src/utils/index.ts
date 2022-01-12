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
