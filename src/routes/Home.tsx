import { encParam } from '../utils';
import { Center, Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import MenuCard from '../components/MenuCard';
import {
  CipherTextBox,
  PlainTextBox,
  FriedmannAnalysis,
  TableAnalysis,
  FrequencyAnalysis,
  SubstitutionDecipher,
  VignereDecipher,
  KasiskiAnalysis,
} from '../features/solve';
import { CeasarDecipher, TableDecipher } from '../features/solve';
import { allProblems } from '../data/problems';

const randomProblem = () => allProblems[Math.floor(allProblems.length * Math.random())];

const Home: React.FC = () => {
  const text = "hello, this is a test string that I am coming up with as I'm typing";
  const [decipheredText, setDecipheredText] = useState('');

  return (
    <Container maxW={'3xl'} minH='90vh'>
      <Stack spacing={6}>
        <Center>
          <Heading as='h1' size='4xl' marginTop={6}>
            Crypt Breaker
          </Heading>
        </Center>
        <SimpleGrid columns={3} spacing={10}>
          <MenuCard
            title='Random Problem'
            description='A random ciphertext to be deciphered by you'
            link={'/solve/' + encParam(randomProblem().cipherText)}
          />
          <MenuCard
            title='hello'
            description='best decryption tool in the world'
            link='http://google.com'
          />
          <MenuCard
            title='hello'
            description='best decryption tool in the world'
            link='http://google.com'
          />
        </SimpleGrid>
        <Center>
          <Heading as='h2' size='2xl'>
            Problems for Ciphers
          </Heading>
        </Center>
        <SimpleGrid columns={3} spacing={10}>
          <MenuCard
            title='hello'
            description='best decryption tool in the world'
            link='http://google.com'
          />
          <MenuCard
            title='hello'
            description='best decryption tool in the world'
            link='http://google.com'
          />
          <MenuCard
            title='hello'
            description='best decryption tool in the world'
            link='http://google.com'
          />
          <MenuCard
            title='hello'
            description='best decryption tool in the world'
            link='http://google.com'
          />
          <MenuCard
            title='hello'
            description='best decryption tool in the world'
            link='http://google.com'
          />
        </SimpleGrid>
        <CipherTextBox text={text} />
        <FrequencyAnalysis text={text} />
        <FriedmannAnalysis text={text} />
        <TableAnalysis text={text} />
        <KasiskiAnalysis text={text} />
        <CeasarDecipher text={text} setDecipheredText={setDecipheredText} />
        <TableDecipher text={text} setDecipheredText={setDecipheredText} />
        <SubstitutionDecipher text={text} setDecipheredText={setDecipheredText} />
        <VignereDecipher text={text} setDecipheredText={setDecipheredText} />
        <PlainTextBox text={decipheredText} />
      </Stack>
    </Container>
  );
};

export default Home;
