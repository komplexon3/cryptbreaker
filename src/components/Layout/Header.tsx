import { Center, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '@/components';

export const Header = () => {
  return (
    <>
      <LanguageSwitcher />
      <Center>
        <Link to='/'>
          <Heading as='h1' size='4xl' marginY='10'>
            Crypt Breaker
          </Heading>
        </Link>
      </Center>
    </>
  );
};
