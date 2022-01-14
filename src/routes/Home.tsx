import { encParam } from '../utils';
import { Center, Heading, SimpleGrid, Stack, useDisclosure } from '@chakra-ui/react';
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
import { allProblems, ProblemTypes } from '../data/problems';
import ProblemCodeModal from '../components/ProblemCodeModal';

const randomProblem = () => allProblems[Math.floor(allProblems.length * Math.random())];

const Home: React.FC = () => {
  const text = "hello, this is a test string that I am coming up with as I'm typing";
  const [decipheredText, setDecipheredText] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ProblemCodeModal isOpen={isOpen} onClose={onClose} />
      <Stack spacing={6}>
        <SimpleGrid columns={3} spacing={10}>
          <MenuCard
            title='Random Problem'
            description='A random ciphertext to be deciphered by you'
            link={'/solve/' + encParam(randomProblem().cipherText)}
          />
          <MenuCard
            title='Problem Code'
            description='Enter code for a specific problem'
            onClick={onOpen}
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
          {Object.values(ProblemTypes).map((v) => (
            <MenuCard
              title={v.toUpperCase()}
              description={'Problems for ' + v + 'ciphers.'}
              link={'/problems/' + v}
            />
          ))}
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
    </>
  );
};

export default Home;
