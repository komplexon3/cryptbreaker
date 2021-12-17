import { Center, Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import MenuCard from '../components/MenuCard';

const Home: React.FC = () => {
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
      </Stack>
    </Container>
  );
};

export default Home;
