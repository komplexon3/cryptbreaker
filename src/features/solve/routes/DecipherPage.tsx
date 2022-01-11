import { Center, Container, Heading, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { CipherTextBox } from '..';
import { AnalysisToolsAndSelect } from '../components/AnalysisTools';
import { DecipherToolOrSelect } from '../components/DecipherTools';

interface DecipherPageProps {
  match: {
    text: string;
  };
}

const DecipherPage: React.FC<DecipherPageProps> = ({ match }) => {
  const text =
    'hello, my name is marc widmer and I am testing the funtionality of this component. I am extending this text so that the analysis tools can be tested a bit more.';
  const [decipheredText, setDecipheredText] = useState('');

  return (
    <Container maxW={'3xl'} minH='90vh'>
      <Stack spacing={6}>
        <Center>
          <Heading as='h1' size='4xl' marginTop={6}>
            Crypt Breaker
          </Heading>
        </Center>
        <CipherTextBox text={text} />
        <AnalysisToolsAndSelect text={text} />
        <DecipherToolOrSelect text={text} setDecipheredText={setDecipheredText} />
        <CipherTextBox text={decipheredText} />
      </Stack>
    </Container>
  );
};

export default DecipherPage;
