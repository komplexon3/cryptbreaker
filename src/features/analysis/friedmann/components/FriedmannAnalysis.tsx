import { Button, HStack, Input, useNumberInput, VStack, Text } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Card } from '@/components';
import { ComputeFriedmannCharacteristic } from '../utils';
import { AnalysisProps } from '@/types';
import { problemLanguagesEnableMap } from '@/data';
import { useDecryptionContext } from '@/contexts';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// TODO: Replace with properly sourced values (and add source)
const friedmannCharicteristic = {
  en: 0.0655,
  de: 0.0762,
};

export const FriedmannAnalysis: React.FC<AnalysisProps> = ({ onClose }) => {
  const { cipherText: text, language: problemLang } = useDecryptionContext();

  const enableMap = problemLanguagesEnableMap(problemLang);
  // Setup key size selection
  const { valueAsNumber, getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 5,
      min: 1,
      max: 15,
      precision: 0,
      inputMode: 'numeric',
      pattern: '[0-9]*',
    });

  const incMaxKeySize = getIncrementButtonProps();
  const decMaxKeySize = getDecrementButtonProps();
  const maxKeySize = getInputProps({ readOnly: true });

  // Setup line graph

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  // labels = [1,2,...,maxKeyLength]
  const labels = Array.from(Array(valueAsNumber).keys()).map((i) => i + 1);

  const data = {
    labels,
    datasets: [
      {
        label: 'Friedmann Characteristic for Key Length',
        data: labels.map((v) => ComputeFriedmannCharacteristic(text, v)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Expected for German',
        data: Array(labels.length).fill(friedmannCharicteristic.de),
        borderColor: 'rgb(0, 255, 0)',
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        hidden: !enableMap.de,
      },
      {
        label: 'Expected for English',
        data: Array(labels.length).fill(friedmannCharicteristic.en),
        borderColor: 'rgb(0, 0, 255)',
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
        hidden: !enableMap.en,
      },
    ],
  };

  return (
    <Card title='Friedmann Analysis' onClose={onClose}>
      <VStack>
        <HStack>
          <Text>Key Length</Text>
          <Input {...maxKeySize} />
          <Button {...decMaxKeySize}>-</Button>
          <Button {...incMaxKeySize}>+</Button>
        </HStack>
        <Line data={data} options={options} />
      </VStack>
    </Card>
  );
};
