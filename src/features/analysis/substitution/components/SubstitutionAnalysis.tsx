import { Card } from '@/components';
import { useDecryptionContext } from '@/contexts';
import { AnalysisProps } from '@/types';
import { VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { SubstitutionAnalysisProvider } from '../contexts';
import { SubstitutionAnalysisKeyInput } from './SubstitutionAnalysisKeyInput';
import { SubstitutionAnalysisText } from './SubstitutionAnalysisText';

export const SubstitutionAnalysis: FC<AnalysisProps> = ({ onClose }) => {
  const { cipherText } = useDecryptionContext();

  return (
    <Card title='Substitution Anlaysis' onClose={onClose}>
      <SubstitutionAnalysisProvider>
        <VStack>
          <SubstitutionAnalysisKeyInput></SubstitutionAnalysisKeyInput>
          <SubstitutionAnalysisText text={cipherText} />
        </VStack>
      </SubstitutionAnalysisProvider>
    </Card>
  );
};