import { Center, Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import MenuCard from '../components/MenuCard';

const CipherProblems: React.FC = () => {
  let { cipher } = useParams();

  return (
    <Container maxW={'3xl'} minH='90vh'>
      <Stack spacing={6}>
        <Center>
          <Heading as='h2' size='2xl'>
            {cipher} Problems
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
      </Stack>
    </Container>
  );
};

export default CipherProblems;
