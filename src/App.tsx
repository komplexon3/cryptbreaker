import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import { About, CipherProblems, DecipherPage, EncryptionPage, Home } from '@/routes';
import { Layout } from '@/components/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='problems/:cipher' element={<CipherProblems />} />
        <Route path='about' element={<About />} />
        <Route path='solve/:encCiphertext' element={<DecipherPage />} />
        <Route path='problems/:cipher' element={<CipherProblems />} />
        <Route path='create' element={<EncryptionPage />} />
      </Route>
    </Routes>
  );
}

export default App;
