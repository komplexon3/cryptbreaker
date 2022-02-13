import { Card } from '@/components';
import { useDecryptionContext } from '@/contexts';
import { problemLanguagesEnableMap } from '@/data';
import { AnalysisProps } from '@/types';
import { Button, HStack, Input, Text, useNumberInput, VStack } from '@chakra-ui/react';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { ComputeFriedmannCharacteristic } from '../utils';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// TODO: Replace with properly sourced values (and add source)
const friedmannCharicteristic = {
  en: 0.0655,
  de: 0.0762,
};

export const FriedmannAnalysis: React.FC<AnalysisProps> = ({ onClose }) => {
  const { t } = useTranslation();
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
        label: t('AnalysisTools.Friedmann.FCforKL'),
        data: labels.map((v) => ComputeFriedmannCharacteristic(text, v)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: t('AnalysisTools.Friedmann.FCde'),
        data: Array(labels.length).fill(friedmannCharicteristic.de),
        borderColor: 'rgb(0, 255, 0)',
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        hidden: !enableMap.de,
      },
      {
        label: t('AnalysisTools.Friedmann.FCde'),
        data: Array(labels.length).fill(friedmannCharicteristic.en),
        borderColor: 'rgb(0, 0, 255)',
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
        hidden: !enableMap.en,
      },
    ],
  };

  return (
    <Card title={t('AnalysisTools.Friedmann.titleLong')} onClose={onClose}>
      <VStack>
        <HStack>
          <Text>{t('AnalysisTools.Friedmann.KeyLength')}</Text>
          <Input {...maxKeySize} />
          <Button {...decMaxKeySize}>-</Button>
          <Button {...incMaxKeySize}>+</Button>
        </HStack>
        <Line data={data} options={options} />
      </VStack>
    </Card>
  );
};
