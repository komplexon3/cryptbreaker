import { ProblemTypes, useProblemsOfCipher } from '@/data';
import { problemPath } from '../utils';
import { Center, Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { MenuCard } from '@/components';

export const CipherProblems: React.FC = () => {
  let { cipher } = useParams();
  cipher = cipher ? cipher.toLocaleLowerCase() : '';
  // defaulting to Ceasar but actually rendering 404 if the cast doesn't work - cannot conditionally call hooks...
  const problems = useProblemsOfCipher((cipher as ProblemTypes) || ProblemTypes.CEASAR);

  if (cipher in ProblemTypes) {
    return <div>404</div>;
  }

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
            <MenuCard key={v.title} title={v.title} link={problemPath(v.cipherText, v.language)} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};
