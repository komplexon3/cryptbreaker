import { Center, Container, Select, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { EncryptionToolSwitch, ShareProblemCard, TextCard, TextEntryCard } from '@/components';
import { EncryptionTools } from '@/types';
import { ProblemLanguages } from '@/data';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useLng } from '@/i18n';
import { EncryptionProvider, useEncryptionContext } from '@/contexts';

// TODO: write code that cleans text (e.g. ä -> ae)
const cleanText = (s: string) => {
  return s;
};

export const EncryptionPage: React.FC = () => {
  const EcPage = () => {
    const lng = useLng();
    const { setPlainText, cipherText, language, setLanguage } = useEncryptionContext();
    const [tool, setTool] = useState(EncryptionTools.UNSPECIFIED);

    useEffect(() => {
      setLanguage((lng as ProblemLanguages) || ProblemLanguages.EN);
    }, [lng, setLanguage]);

    return (
      <Container maxW={'3xl'} minH='90vh'>
        <Stack spacing={6}>
          <Center>
            <Text marginRight='1rem'>Set plain text language</Text>
            <LanguageSelector onChange={(l) => setLanguage(l)} defaultValue={language} />
          </Center>
          <TextEntryCard
            title='Plain Text'
            placeholderText='Enter plain text to be encrypted.'
            onChange={(e) => {
              e.preventDefault();
              const cleanedText = cleanText(e.target.value);
              e.target.value = cleanedText;
              setPlainText(cleanedText);
            }}
          />
          <Text>Encrypt with</Text>
          <Select
            placeholder='Select encryption tool'
            onChange={(e) => {
              e.preventDefault();
              setTool(e.target.value as EncryptionTools);
            }}
          >
            {Object.values(EncryptionTools).map((v) => {
              if (v === EncryptionTools.UNSPECIFIED) {
                return <></>;
              }
              return (
                <option key={v} value={v}>
                  {v}
                </option>
              );
            })}
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
