import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Footer from './components/Footer';
import CipherProblems from './routes/CipherProblems';
import DecipherPage from './features/solve/routes/DecipherPage';
import { Center, Container, Heading } from '@chakra-ui/react';

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
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
