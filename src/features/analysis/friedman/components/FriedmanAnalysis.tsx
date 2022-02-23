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
import { Trans, useTranslation } from 'react-i18next';
import { ComputeFriedmanCharacteristic } from '../utils';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// TODO: Replace with properly sourced values (and add source)
// Source german: "Daten verwalten, schützen und auswerten", Klett und Balmer - IBSN: 978-3-264-84597-6
// English computed from the relative frequencies in @/features/analysis/frequency/utils/frequencyAnalysis.ts
const friedmanCharicteristic = {
  en: 0.027,
  de: 0.0385,
};

export const FriedmanAnalysis: React.FC<AnalysisProps> = ({ onClose }) => {
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
        label: t('AnalysisTools.Friedman.FCforKL'),
        data: labels.map((v) => ComputeFriedmanCharacteristic(text, v)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: t('AnalysisTools.Friedman.FCde'),
        data: Array(labels.length).fill(friedmanCharicteristic.de),
        borderColor: 'rgb(0, 255, 0)',
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        hidden: !enableMap.de,
      },
      {
        label: t('AnalysisTools.Friedman.FCen'),
        data: Array(labels.length).fill(friedmanCharicteristic.en),
        borderColor: 'rgb(0, 0, 255)',
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
        hidden: !enableMap.en,
      },
    ],
  };

  return (
    <Card
      title={t('AnalysisTools.Friedman.titleLong')}
      explanationHeader={t('AnalysisTools.Friedman.explanationHeader')}
      explanationBody={
        <Trans i18nKey='AnalysisTools.Friedman.explanationBody' components={[<br />, <i />]} />
      }
      onClose={onClose}
    >
      <VStack>
        <HStack>
          <Text>{t('AnalysisTools.Friedman.KeyLength')}</Text>
          <Input {...maxKeySize} />
          <Button {...decMaxKeySize}>-</Button>
          <Button {...incMaxKeySize}>+</Button>
        </HStack>
        <Line data={data} options={options} />
      </VStack>
    </Card>
  );
};
