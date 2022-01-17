import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Center, Container, Heading } from '@chakra-ui/react';
import { Footer } from '@/components';
import { About, CipherProblems, DecipherPage, EncryptionPage, Home } from '@/routes';

function App() {
  return (
    <Container maxW='3xl' minH='90vh'>
      <Center>
        <Heading as='h1' size='4xl' marginY='6'>
          Crypt Breaker
        </Heading>
      </Center>
      <Routes>
        <Route path='problems/:cipher' element={<CipherProblems />} />
        <Route path='about' element={<About />} />
        <Route path='solve/:encCiphertext' element={<DecipherPage />} />
        <Route path='problems/:cipher' element={<CipherProblems />} />
        <Route path='create' element={<EncryptionPage />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
