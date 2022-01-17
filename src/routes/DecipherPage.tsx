import { decParam } from '../utils';
import { Center, Container, Heading, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AnalysisToolsAndSelect, DecipherToolOrSelect, CipherTextBox } from '@/components';

export const DecipherPage: React.FC = () => {
  const [decipheredText, setDecipheredText] = useState('');

  const { encCiphertext } = useParams();

  if (!encCiphertext) {
    return <div>404</div>;
  }

  const text = decParam(encCiphertext);
  console.log(text);

  return (
    <Container maxW={'3xl'} minH='90vh'>
      <Stack spacing={6}>
        <CipherTextBox text={text} />
        <AnalysisToolsAndSelect text={text} />
        <DecipherToolOrSelect text={text} setDecipheredText={setDecipheredText} />
        <CipherTextBox text={decipheredText} />
      </Stack>
    </Container>
  );
};