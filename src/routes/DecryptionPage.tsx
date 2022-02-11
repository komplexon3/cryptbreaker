import {
  AnalysisToolsAndSelect,
  DecryptionToolOrSelect,
  TextCard,
  TextEntryCard,
} from '@/components';
import { DecryptionProvider, useDecryptionContext } from '@/contexts';
import { useLanguageFromQueryParams } from '@/hooks';
import { cleanText, decParam } from '@/utils';
import { Container, Divider, Heading, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export const DecryptionPage: React.FC = () => {
  const DcPage = () => {
    const { t } = useTranslation();
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
                const cleanedText = cleanText(e.target.value).toUpperCase();
                e.target.value = cleanedText;
                setCipherText(cleanedText);
              }}
              placeholderText='Enter cipher text...'
            />
          )}
          <Divider />
          <Heading as='h2' size='xl'>
            {t('DecryptionPage.AnalysisTools')}
          </Heading>
          <AnalysisToolsAndSelect />
          <Divider />
          <Heading as='h2' size='xl'>
            {t('DecryptionPage.DecipherTool')}
          </Heading>
          <DecryptionToolOrSelect text={cipherText} setDecipheredText={setDecipheredText} />
          <Divider />
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
