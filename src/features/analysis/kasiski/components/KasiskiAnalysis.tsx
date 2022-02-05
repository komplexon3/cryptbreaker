import { Card, IntegerInput } from '@/components';
import { AnalysisProps } from '@/types';
import { HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { KasiskiProvider, useKasiskiContext } from '../contexts';
import { KasiskiPopover } from './KasiskiPopover';
import { KasinskiText } from './KasiskiText';

export const KasiskiAnalysis: React.FC<AnalysisProps> = ({ onClose }) => {
  const KA = () => {
    const { segmentLenght, setSegmentLength } = useKasiskiContext();

    return (
      <Card title='Kasiski Analysis' onClose={onClose}>
        <VStack>
          <HStack>
            <Text>Segment Length</Text>
            <IntegerInput
              minValue={2}
              maxValue={10}
              value={segmentLenght}
              onValueChange={(v) => {
                setSegmentLength(v);
              }}
            />
          </HStack>
          <KasinskiText />
          <KasiskiPopover />
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
