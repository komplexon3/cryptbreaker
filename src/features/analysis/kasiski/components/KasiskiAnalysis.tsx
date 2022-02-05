import { VStack, Text, HStack } from '@chakra-ui/react';
import React from 'react';
import { Card, IntegerInput } from '@/components';
import { AnalysisProps } from '@/types';
import { KasiskiProvider, useKasiskiContext } from '../contexts';
import { KasinskiText } from './KasiskiText';

export const KasiskiAnalysis: React.FC<AnalysisProps> = ({ onClose }) => {
  const KA = () => {
    const { setSegmentLength } = useKasiskiContext();

    return (
      <Card title='Kasiski Analysis' onClose={onClose}>
        <VStack>
          <HStack>
            <Text>Segment Length</Text>
            <IntegerInput
              minValue={2}
              maxValue={10}
              defaultValue={2}
              onValueChange={(v) => {
                setSegmentLength(v);
              }}
            />
          </HStack>
          <KasinskiText />
          <Text color={'gray.600'}>Note: Grey characters are part of multiple segments.</Text>
        </VStack>
      </Card>
    );
  };

  return (
    <KasiskiProvider>
      <KA />
    </KasiskiProvider>
  );
};
