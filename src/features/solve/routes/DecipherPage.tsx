import { Button, Center, Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import {
  CipherTextBox,
  FrequencyAnalysis,
  FriedmannAnalysis,
  KasiskiAnalysis,
  TableAnalysis,
} from '..';
import { DecipherTools } from '../components/DecipherTools/Decipher.ds';
import DecipherToolOrSelect from '../components/DecipherTools/DecipherToolOrSelect';

interface DecipherPageProps {
  match: {
    text: string;
  };
}

const DecipherPage: React.FC<DecipherPageProps> = ({ match }) => {
  const text =
    'hello, my name is marc widmer and I am testing the funtionality of this component. I am extending this text so that the analysis tools can be tested a bit more.';
  const [analysisTools, setAnalysisTools] = useState({
    friedmann: false,
    table: false,
    frequency: false,
    kasiski: false,
  });
  const [decipherTool, setDecipherTool] = useState(DecipherTools.UNSPECIFIED);
  const [decipheredText, setDecipheredText] = useState('');

  return (
    <Container maxW={'3xl'} minH='90vh'>
      <Stack spacing={6}>
        <Center>
          <Heading as='h1' size='4xl' marginTop={6}>
            Crypt Breaker
          </Heading>
        </Center>
        <SimpleGrid>
          <Button
            onClick={() =>
              setAnalysisTools({ ...analysisTools, friedmann: !analysisTools.friedmann })
            }
          >
            Friedmann
          </Button>
          <Button
            onClick={() => setAnalysisTools({ ...analysisTools, table: !analysisTools.table })}
          >
            Table
          </Button>
          <Button
            onClick={() =>
              setAnalysisTools({ ...analysisTools, frequency: !analysisTools.frequency })
            }
          >
            Frequency
          </Button>
          <Button
            onClick={() => setAnalysisTools({ ...analysisTools, kasiski: !analysisTools.kasiski })}
          >
            Kasiski
          </Button>
        </SimpleGrid>
        <CipherTextBox text={text} />
        {analysisTools.frequency && <FrequencyAnalysis text={text} />}
        {analysisTools.table && <TableAnalysis text={text} />}
        {analysisTools.friedmann && <FriedmannAnalysis text={text} />}
        {analysisTools.kasiski && <KasiskiAnalysis text={text} />}
        <DecipherToolOrSelect text={text} setDecipheredText={setDecipheredText} />
        <CipherTextBox text={decipheredText} />
      </Stack>
    </Container>
  );
};

export default DecipherPage;
