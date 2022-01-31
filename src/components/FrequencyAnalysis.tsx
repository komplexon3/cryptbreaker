import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ComputeRelativeFrequency, useLanguageFromQueryParams } from '@/utils';
import { Card } from '@/components';
import { AnalysisProps } from '@/types';
import { problemLanguagesEnableMap } from '@/data/problems/problems';

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

export const FrequencyAnalysis: React.FC<AnalysisProps> = ({ text, onClose }) => {
  // only compute on first render - after that we don't want to mess
  // with dis/enabled languages programatically anymore
  const problemLng = useLanguageFromQueryParams();
  const enabledMap = problemLanguagesEnableMap(problemLng);

  const data = {
    labels,
    datasets: [
      {
        label: 'Relative Frequency DE',
        data: frequencies.de,
        backgroundColor: 'red',
        hidden: !enabledMap.de,
      },
      {
        label: 'Relative Frequency EN',
        data: frequencies.en,
        backgroundColor: 'green',
        hidden: !enabledMap.en,
      },
      {
        label: 'Relative Frequency Cipher Text',
        data: ComputeRelativeFrequency(text),
        backgroundColor: 'blue',
      },
    ],
  };

  return (
    <Card title='Frequency Analysis' onClose={onClose}>
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
    </Card>
  );
};
