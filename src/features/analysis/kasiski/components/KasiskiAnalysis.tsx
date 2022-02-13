import { Card, IntegerInput } from '@/components';
import { AnalysisProps } from '@/types';
import { HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { KasiskiProvider, useKasiskiContext } from '../contexts';
import { KasiskiPopover } from './KasiskiPopover';
import { KasinskiText } from './KasiskiText';

export const KasiskiAnalysis: React.FC<AnalysisProps> = ({ onClose }) => {
  const KA = () => {
    const { t } = useTranslation();
    const { segmentLenght, setSegmentLength } = useKasiskiContext();

    return (
      <Card
        title={t('AnalysisTools.Kasiski.titleLong')}
        explanationHeader={t('AnalysisTools.Kasiski.explanationHeader')}
        explanationBody={
          <Trans i18nKey='AnalysisTools.Kasiski.explanationBody' components={[<br />]} />
        }
        onClose={onClose}
      >
        <VStack>
          <HStack>
            <Text>{t('AnalysisTools.Kasiski.SegmentLength')}</Text>
            <IntegerInput
              minValue={2}
              maxValue={10}
              defaultValue={segmentLenght}
              onValueChange={(v) => {
                setSegmentLength(v);
              }}
            />
          </HStack>
          <KasinskiText />
          <KasiskiPopover />
          <Text color={'gray.600'}>{t('AnalysisTools.Kasiski.NoteGrey')}</Text>
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
