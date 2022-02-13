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
const frequencies = {
  de: [
    0.06108, 0.02184, 0.02735, 0.04798, 0.16278, 0.01863, 0.03116, 0.04322, 0.07884, 0.00302,
    0.01562, 0.03851, 0.02845, 0.09825, 0.02729, 0.01067, 0.00028, 0.07869, 0.06451, 0.06477,
    0.03886, 0.00934, 0.01451, 0.00052, 0.00109, 0.01258,
  ],
  en: [
    0.08549, 0.01599, 0.03159, 0.03869, 0.12098, 0.02179, 0.02089, 0.04959, 0.07329, 0.00219,
    0.00809, 0.04209, 0.02529, 0.07169, 0.07469, 0.02069, 0.00099, 0.06329, 0.06729, 0.08939,
    0.02679, 0.01059, 0.01829, 0.00189, 0.01719, 0.00109,
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
