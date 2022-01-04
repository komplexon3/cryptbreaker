import { Button, HStack, Input, useNumberInput, VStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { BasicBox } from '../../../../components/BasicBox';
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
import { ComputeFriedmannCharacteristic } from '../../util';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface FriedmannAnalysisProps {
  text: string;
}

// TODO: Replace with properly sourced values (and add source)
const fcDE = 0.0762;
const fcEN = 0.0655;

export const FriedmannAnalysis: React.FC<FriedmannAnalysisProps> = ({ text }) => {
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
    ],
  };

  return (
    <BasicBox>
      <VStack>
        <HStack>
          <Text>Key Length</Text>
          <Input {...maxKeySize} />
          <Button {...decMaxKeySize}>-</Button>
          <Button {...incMaxKeySize}>+</Button>
        </HStack>
        <Line data={data} options={options} />
      </VStack>
    </BasicBox>
  );
};

export default FriedmannAnalysis;
