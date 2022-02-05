/**
 * Cleans the input string from all characters that are not in a-zA-Z.
 * Umlaute are replaced with the <a,o,u>e version.
 * @param s string
 * @returns string
 */
export const cleanText = (s: string) => {
  console.log(s);
  return stripUmlaute(s).replaceAll(/[^a-zA-Z]/g, '');
};

/**
 * Replaces all umlaute (ä, ö,ü)
 * @param s string
 * @returns string
 */
const stripUmlaute = (s: string) => {
  return s.replaceAll('ä', 'ae').replaceAll('ö', 'oe').replaceAll('ü', 'ue');
};
