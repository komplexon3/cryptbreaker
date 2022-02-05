import { decParam } from '@/utils';
import { Container, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  AnalysisToolsAndSelect,
  DecryptionToolOrSelect,
  TextEntryCard,
  TextCard,
} from '@/components';
import { DecryptionProvider, useDecryptionContext } from '@/contexts';
import { useLanguageFromQueryParams } from '@/hooks';

export const DecryptionPage: React.FC = () => {
  const DcPage = () => {
    const { encCiphertext: encCipherText } = useParams();
    const problemLanguage = useLanguageFromQueryParams();
    const { cipherText, setCipherText, decipheredText, setDecipheredText, setLanguage } =
      useDecryptionContext();

    useEffect(() => {
      if (encCipherText) {
        setCipherText(decParam(encCipherText));
      }
    }, [encCipherText, setCipherText]);

    useEffect(() => {
      setLanguage(problemLanguage);
    }, [problemLanguage, setLanguage]);

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
          <AnalysisToolsAndSelect />
          <DecryptionToolOrSelect text={cipherText} setDecipheredText={setDecipheredText} />
          <TextCard title='Deciphered Text' text={decipheredText} skeletonIfEmpty />
        </Stack>
      </Container>
    );
  };
  return (
    <DecryptionProvider>
      <DcPage />
    </DecryptionProvider>
  );
};
