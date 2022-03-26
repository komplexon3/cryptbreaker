import { Card } from '@/components';
import { ProblemLanguages } from '@/data';
import { encParam, problemPath } from '@/utils';
import { Button, Center, HStack, Text, useClipboard, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

interface ShareProblemCardProps {
  cipherText: string;
  language: ProblemLanguages;
}

export const ShareProblemCard: React.FC<ShareProblemCardProps> = ({ cipherText, language }) => {
  const problemCode = encParam(cipherText) + '?lng=' + language;
  const urlToProblem = window.location.origin.toString() + problemPath(cipherText, language);
  const { t } = useTranslation();

  const { hasCopied: hasCopiedProblemCode, onCopy: onCopyProblemCode } = useClipboard(problemCode);
  const { hasCopied: hasCopiedURL, onCopy: onCopyURL } = useClipboard(urlToProblem);

  return (
    <Card title={t('ShareProblem.title')}>
      <Center>
        <VStack>
          <HStack>
            <Button onClick={onCopyURL} disabled={cipherText.length === 0}>
              {hasCopiedURL ? t('ShareProblem.problemURLCopied') : t('ShareProblem.copyProblemURL')}
            </Button>
            <Button onClick={onCopyProblemCode} disabled={cipherText.length === 0}>
              {hasCopiedProblemCode
                ? t('ShareProblem.problemCodeCopied')
                : t('ShareProblem.copyProblemCode')}
            </Button>
          </HStack>
        </VStack>
      </Center>
    </Card>
  );
};
