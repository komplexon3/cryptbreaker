import { Card } from '@/components';
import { useDecryptionContext } from '@/contexts';
import { AnalysisProps } from '@/types';
import { VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { SubstitutionAnalysisProvider } from '../contexts';
import { SubstitutionAnalysisKeyInput } from './SubstitutionAnalysisKeyInput';
import { SubstitutionAnalysisText } from './SubstitutionAnalysisText';

export const SubstitutionAnalysis: FC<AnalysisProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const { cipherText } = useDecryptionContext();

  return (
    <Card
      title={t('AnalysisTools.Substitution.titleLong')}
      explanationHeader={t('AnalysisTools.Substitution.explanationHeader')}
      explanationBody={
        <Trans i18nKey='AnalysisTools.Substitution.explanationBody' components={[<br />]} />
      }
      onClose={onClose}
    >
      <SubstitutionAnalysisProvider>
        <VStack>
          <SubstitutionAnalysisKeyInput></SubstitutionAnalysisKeyInput>
          <SubstitutionAnalysisText text={cipherText} />
        </VStack>
      </SubstitutionAnalysisProvider>
    </Card>
  );
};
