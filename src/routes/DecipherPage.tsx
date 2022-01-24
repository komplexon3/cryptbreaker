import { decParam } from '@/utils';
import { Container, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  AnalysisToolsAndSelect,
  DecipherToolOrSelect,
  TextEntryCard,
  TextCard,
} from '@/components';

export const DecipherPage: React.FC = () => {
  const [cipherText, setCipherText] = useState('');
  const [decipheredText, setDecipheredText] = useState('');
  const { encCiphertext: encCipherText } = useParams();

  useEffect(() => {
    if (encCipherText) {
      setCipherText(decParam(encCipherText));
    }
  }, [encCipherText]);

  return (
    <Container maxW={'3xl'} minH='90vh'>
      <Stack spacing={6}>
        {encCipherText ? (
          <TextCard title='Cipher Text' text={cipherText} />
        ) : (
          <TextEntryCard
            title='Cipher Text'
            onChange={(e) => {
              e.preventDefault();
              setCipherText(e.target.value);
            }}
            placeholderText='Enter cipher text...'
          />
        )}
        <AnalysisToolsAndSelect text={cipherText} />
        <DecipherToolOrSelect text={cipherText} setDecipheredText={setDecipheredText} />
        <TextCard title='Deciphered Text' text={decipheredText} skeletonIfEmpty />
      </Stack>
    </Container>
  );
};
