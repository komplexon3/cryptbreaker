import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Container maxW='3xl' minH='80vh'>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
