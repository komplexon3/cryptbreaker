export type Problem = {
  type: string;
  title: string;
  plainText: string;
  cipherText: string;
};

export const cesarProblems: Problem[] = [
  {
    type: 'ceasar',
    title: 'Title 0',
    plainText: 'the quick brown fox jumped over the fence',
    cipherText: 'wkh txlfn eurzq ira mxpshg ryhu wkh ihqfh',
    // encoded: d2toIHR4bGZuIGV1cnpxIGlyYSBteHBzaGcgcnlodSB3a2ggaWhxZmg%3D
  },
  {
    type: 'ceasar',
    title: 'Title 1',
    plainText: "hello, this is a test string that I am coming up with as I'm typing",
    cipherText: "uryyb, guvf vf n grfg fgevat gung V nz pbzvat hc jvgu nf V'z glcvat",
    // encoded: dXJ5eWIsIGd1dmYgdmYgbiBncmZnIGZnZXZhdCBndW5nIFYgbnogcGJ6dmF0IGhjIGp2Z3UgbmYgVid6IGdsY3ZhdA%3D%3D
  },
];
