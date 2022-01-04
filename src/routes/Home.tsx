import { Center, Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import MenuCard from '../components/MenuCard';
import {
  CipherTextBox,
  FriedmannAnalysis,
  TableAnalysis,
  FrequencyAnalysis,
} from '../features/solve';
import { CeasarDecipher, TableDecipher } from '../features/solve';

const Home: React.FC = () => {
  const text = 'hello, my name is marc widmer and I am testing the funtionality of this component.';
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
        <CeasarDecipher text={text} setDecipheredText={setDecipheredText} />
        <TableDecipher text={text} setDecipheredText={setDecipheredText} />
        <CipherTextBox text={decipheredText} />
      </Stack>
    </Container>
  );
};

export default Home;
