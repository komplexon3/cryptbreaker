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
import { ComputeRelativeFrequency } from '../../util';
import { Card } from '../../../../components';
import { AnalysisProps } from './Analysis.ds';

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
  'Z',
  'Z',
];

// TODO: Relplace with well sourced values and add their souce
const frequenciesDE = [
  0.06108, 0.02184, 0.02735, 0.04798, 0.16278, 0.01863, 0.03116, 0.04322, 0.07884, 0.00302, 0.01562,
  0.03851, 0.02845, 0.09825, 0.02729, 0.01067, 0.00028, 0.07869, 0.06451, 0.06477, 0.03886, 0.00934,
  0.01451, 0.00052, 0.00109, 0.01258,
];

export const FrequencyAnalysis: React.FC<AnalysisProps> = ({ text, onClose }) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Relative Frequency DE',
        data: frequenciesDE,
        backgroundColor: 'red',
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

export default FrequencyAnalysis;
