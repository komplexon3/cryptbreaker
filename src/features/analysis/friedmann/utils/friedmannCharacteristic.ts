import { ComputeRelativeFrequency } from '@/features/analysis/frequency';

export const ComputeFriedmannCharacteristic = (text: string, stride: number): number => {
  if (stride < 1) {
    throw new Error('stride too small - must be >= 1');
  }
  if (text.length === 0) {
    return 0;
  }

  return (
    splitIntoStrides(text, stride)
      .map(friedmannCharacteristic)
      .reduce((a, b) => a + b, 0.0) / stride
  );
};

const splitIntoStrides = (text: string, stride: number): string[] => {
  const textArr = text.split('');
  let slices: string[] = new Array(stride);
  slices = slices.fill('', 0, stride);

  slices = slices.map((_, i) => {
    let s = '';
    for (let j = i; j < textArr.length; j += stride) {
      s += textArr[j];
    }
    return s;
  });
  return slices;
};

const friedmannCharacteristic = (text: string): number => {
  if (text.length < 1) {
    return 0.0;
  }

  const relativeFrequencies = ComputeRelativeFrequency(text);
  const normalizedRelativeFrequencies = relativeFrequencies.map((e, _) => (e - 1 / 26.0) ** 2);
  return normalizedRelativeFrequencies.reduce((a, b) => {
    return a + b;
  }, 0.0);
};
