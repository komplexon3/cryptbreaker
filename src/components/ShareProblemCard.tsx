import { Button, HStack, Text, useClipboard, VStack } from '@chakra-ui/react';

import { Card } from '@/components';
import { encParam } from '@/utils';

interface ShareProblemCardProps {
  cipherText: string;
}

export const ShareProblemCard: React.FC<ShareProblemCardProps> = ({ cipherText }) => {
  const encodedText = encParam(cipherText);
  const urlToProblem = window.location.origin.toString() + '/solve/' + encodedText;

  const { hasCopied: hasCopiedEncodedCipherText, onCopy: onCopyEncodedCipherText } =
    useClipboard(encodedText);
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
          <Button onClick={onCopyEncodedCipherText} disabled={cipherText.length === 0}>
            {hasCopiedEncodedCipherText ? 'Copied' : 'Copy'}
          </Button>
        </VStack>
      </HStack>
    </Card>
  );
};
