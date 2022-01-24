import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { CipherProblems, DecryptionPage, EncryptionPage, Home } from '@/routes';
import { Layout } from '@/components/Layout';
import '@/i18n';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='problems/:cipher' element={<CipherProblems />} />
        <Route path='solve/:encCiphertext' element={<DecryptionPage />} />
        <Route path='solve' element={<DecryptionPage />} />
        <Route path='problems/:cipher' element={<CipherProblems />} />
        <Route path='create' element={<EncryptionPage />} />
      </Route>
    </Routes>
  );
}

export default App;
