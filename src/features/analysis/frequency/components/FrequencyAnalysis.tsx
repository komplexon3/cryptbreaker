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

// Source german: "Daten verwalten, schützen und auswerten", Klett und Balmer - IBSN: 978-3-264-84597-6
// Source english: http://mathcenter.oxford.emory.edu/site/math125/englishLetterFreqs/
const frequencies = {
  de: [
    0.0643, 0.0185, 0.0326, 0.0512, 0.1774, 0.0156, 0.0269, 0.0522, 0.076, 0.0023, 0.014, 0.0349,
    0.0275, 0.1001, 0.0239, 0.0064, 0.0001, 0.0698, 0.0688, 0.0594, 0.0427, 0.0064, 0.0173, 0.0002,
    0.0004, 0.011,
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
