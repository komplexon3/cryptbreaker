import { Card, IntegerInput, PaginationButtons } from '@/components';
import { useDecryptionContext } from '@/contexts';
import { problemLanguagesEnableMap } from '@/data';
import { usePagination } from '@/hooks';
import { AnalysisProps } from '@/types';
import { HStack, Text, VStack } from '@chakra-ui/react';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Trans, useTranslation } from 'react-i18next';
import { ComputeStridedRelativeFrequency } from '../utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// TODO: Relplace with well sourced values and add their souce
// Source english: http://mathcenter.oxford.emory.edu/site/math125/englishLetterFreqs/
const frequencies = {
  de: [
    0.06108, 0.02184, 0.02735, 0.04798, 0.16278, 0.01863, 0.03116, 0.04322, 0.07884, 0.00302,
    0.01562, 0.03851, 0.02845, 0.09825, 0.02729, 0.01067, 0.00028, 0.07869, 0.06451, 0.06477,
    0.03886, 0.00934, 0.01451, 0.00052, 0.00109, 0.01258,
  ],
  en: [
    0.08167, 0.01492, 0.02782, 0.04253, 0.12702, 0.02228, 0.02015, 0.06094, 0.06966, 0.00153,
    0.00772, 0.04025, 0.02406, 0.06749, 0.07507, 0.01929, 0.00095, 0.05987, 0.06327, 0.09056,
    0.02758, 0.00978, 0.0236, 0.0015, 0.01974, 0.00074,
  ],
};

const useStridedRelaticeFrequency = (text: string, defaultStride?: number) => {
  const [stride, setStride] = useState(defaultStride ?? 1);
  const [relativeFrequencies, setRelativeFrequencies] = useState([] as number[][]);

  useEffect(() => {
    setRelativeFrequencies(ComputeStridedRelativeFrequency(text, stride));
  }, [stride, text]);

  const onStrideChange = (value: number) => {
    if (value >= 0) {
      setStride(value);
    }
  };

  return {
    relativeFrequencies,
    stride,
    setStride: onStrideChange,
  };
};

export const FrequencyAnalysis: React.FC<AnalysisProps> = ({ onClose }) => {
  const { t } = useTranslation();
  // only compute on first render - after that we don't want to mess
  // with dis/enabled languages programatically anymore
  const { cipherText, language } = useDecryptionContext();

  const enabledMap = problemLanguagesEnableMap(language);
  const { relativeFrequencies, stride, setStride } = useStridedRelaticeFrequency(cipherText, 1);
  const { page, incPage, decPage } = usePagination(stride);

  const data = {
    labels,
    datasets: [
      {
        label: t('AnalysisTools.Frequency.RelFreqDe'),
        data: frequencies.de,
        backgroundColor: 'red',
        hidden: !enabledMap.de,
      },
      {
        label: t('AnalysisTools.Frequency.RelFreqEn'),
        data: frequencies.en,
        backgroundColor: 'green',
        hidden: !enabledMap.en,
      },
      {
        label: t('AnalysisTools.Frequency.RelFreqInText'),
        data: relativeFrequencies[page - 1],
        backgroundColor: 'blue',
      },
    ],
  };

  return (
    <Card
      title={t('AnalysisTools.Frequency.titleLong')}
      explanationHeader={t('AnalysisTools.Frequency.explanationHeader')}
      explanationBody={
        <Trans i18nKey='AnalysisTools.Frequency.explanationBody' components={[<br />, <i />]} />
      }
      onClose={onClose}
    >
      <VStack>
        <HStack>
          <Text>{t('AnalysisTools.Frequency.Stride')}</Text>
          <IntegerInput defaultValue={1} minValue={1} onValueChange={(v) => setStride(v)} />
        </HStack>
        <Bar
          data={data}
          options={{
            plugins: {
              title: {
                display: false,
              },
              legend: {
                display: true,
              },
            },
          }}
        />
        <PaginationButtons
          page={page}
          numberOfPages={stride}
          onDecrement={decPage}
          onIncrement={incPage}
        />
      </VStack>
    </Card>
  );
};
