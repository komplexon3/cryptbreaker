import { Container, Select, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { EncryptionToolSwitch, ShareProblemCard, TextCard, TextEntryCard } from '@/components';
import { EncryptionTools } from '@/types';

// TODO: write code that cleans text (e.g. ä -> ae)
const cleanText = (s: string) => {
  return s;
};

export const EncryptionPage: React.FC = () => {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [tool, setTool] = useState(EncryptionTools.UNSPECIFIED);

  return (
    <Container maxW={'3xl'} minH='90vh'>
      <Stack spacing={6}>
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
        {tool !== EncryptionTools.UNSPECIFIED && (
          <EncryptionToolSwitch text={plainText} tool={tool} setCipherText={setCipherText} />
        )}
        <TextCard title='Cipher Text' text={cipherText} skeletonIfEmpty />
        <ShareProblemCard cipherText={cipherText} />
      </Stack>
    </Container>
  );
};
