import { Center, Container, Select, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { EncryptionToolSwitch, ShareProblemCard, TextCard, TextEntryCard } from '@/components';
import { EncryptionTools } from '@/types';
import { ProblemLanguages } from '@/data';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useLng } from '@/hooks';
import { EncryptionProvider, useEncryptionContext } from '@/contexts';
import { cleanText } from '@/utils';
import { useTranslation } from 'react-i18next';

export const EncryptionPage: React.FC = () => {
  const EcPage = () => {
    const { t } = useTranslation();
    const lng = useLng();
    const { setPlainText, cipherText, setCipherText, language, setLanguage } =
      useEncryptionContext();
    const [tool, setTool] = useState(EncryptionTools.UNSPECIFIED);

    useEffect(() => {
      setLanguage((lng as ProblemLanguages) || ProblemLanguages.EN);
    }, [lng, setLanguage]);

    return (
      <Container maxW={'3xl'} minH='90vh'>
        <Stack spacing={6}>
          <Center>
            <Text marginRight='1rem'>{t('EncryptionPage.SetLanguage')}</Text>
            <LanguageSelector onChange={(l) => setLanguage(l)} defaultValue={language} />
          </Center>
          <TextEntryCard
            title='Plain Text'
            placeholderText='Enter plain text to be encrypted.'
            onChange={(e) => {
              e.preventDefault();
              const cleanedText = cleanText(e.target.value).toUpperCase();
              e.target.value = cleanedText;
              setPlainText(cleanedText);
            }}
          />
          <Text>{t('EncryptionPage.EncryptWith')}</Text>
          <Select
            placeholder={t('EncryptionPage.SelectEncryptionTool')}
            onChange={(e) => {
              e.preventDefault();
              if (e.target.value as EncryptionTools) {
                setTool(e.target.value as EncryptionTools);
              } else {
                setTool(EncryptionTools.UNSPECIFIED);
                setCipherText('');
              }
            }}
          >
            <option value={EncryptionTools.CEASAR}>{t('Ciphers.ceasar')}</option>;
            <option value={EncryptionTools.TABLE}>{t('Ciphers.table')}</option>;
            <option value={EncryptionTools.VIGNERE}>{t('Ciphers.Vignere')}</option>;
            <option value={EncryptionTools.SUBSTITUTION}>{t('Ciphers.substitution')}</option>;
          </Select>
          {tool !== EncryptionTools.UNSPECIFIED && <EncryptionToolSwitch tool={tool} />}
          <TextCard title='Cipher Text' text={cipherText} skeletonIfEmpty />
          <ShareProblemCard cipherText={cipherText} language={language} />
        </Stack>
      </Container>
    );
  };
  return (
    <EncryptionProvider>
      <EcPage />
    </EncryptionProvider>
  );
};
