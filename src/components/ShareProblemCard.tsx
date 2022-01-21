import { Button, HStack, Text, useClipboard, VStack } from '@chakra-ui/react';

import { Card } from '@/components';
import { encParam, problemPath } from '@/utils';
import { ProblemLanguages } from '@/data';

interface ShareProblemCardProps {
  cipherText: string;
  language: ProblemLanguages;
}

export const ShareProblemCard: React.FC<ShareProblemCardProps> = ({ cipherText, language }) => {
  const problemCode = encParam(cipherText) + '?lng=' + language;
  const urlToProblem = window.location.origin.toString() + problemPath(cipherText, language);

  const { hasCopied: hasCopiedProblemCode, onCopy: onCopyProblemCode } = useClipboard(problemCode);
  const { hasCopied: hasCopiedURL, onCopy: onCopyURL } = useClipboard(urlToProblem);

  return (
    <Card title='Share Problem'>
      <HStack>
        <VStack>
          <Text>Copy link to problem</Text>
          <Button onClick={onCopyURL} disabled={cipherText.length === 0}>
            {hasCopiedURL ? 'Copied' : 'Copy'}
          </Button>
        </VStack>
        <VStack>
          <Text>Copy problem code</Text>
          <Button onClick={onCopyProblemCode} disabled={cipherText.length === 0}>
            {hasCopiedProblemCode ? 'Copied' : 'Copy'}
          </Button>
        </VStack>
      </HStack>
    </Card>
  );
};
