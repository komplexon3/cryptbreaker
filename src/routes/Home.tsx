import { encParam } from '../utils';
import { Center, Heading, SimpleGrid, Stack, useDisclosure } from '@chakra-ui/react';
import { allProblems, ProblemTypes } from '@/data/problems';
import { useNavigate } from 'react-router-dom';
import { MenuCard, ProblemCodeModal } from '@/components';

const randomProblem = () => allProblems[Math.floor(allProblems.length * Math.random())];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ProblemCodeModal
        isOpen={isOpen}
        onClose={onClose}
        onEnter={(pc) => navigate('/solve/' + pc)}
      />
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
      </Stack>
    </>
  );
};

export default Home;
