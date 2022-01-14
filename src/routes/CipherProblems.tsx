import { problemsOfCipher, ProblemTypes } from '../data/problems';
import { encParam } from '../utils';
import { Center, Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import MenuCard from '../components/MenuCard';

const CipherProblems: React.FC = () => {
  let { cipher } = useParams();
  cipher = cipher ? cipher.toLocaleLowerCase() : '';

  if (cipher in ProblemTypes) {
    return <div>404</div>;
  }

  const problems = problemsOfCipher(cipher as ProblemTypes);

  return (
    <Container maxW={'3xl'} minH='90vh'>
      <Stack spacing={6}>
        <Center>
          <Heading as='h2' size='2xl'>
            {cipher} Problems
          </Heading>
        </Center>
        <SimpleGrid columns={3} spacing={10}>
          {problems.map((v) => (
            <MenuCard key={v.title} title={v.title} link={'/solve/' + encParam(v.cipherText)} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default CipherProblems;
