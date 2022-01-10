import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Footer from './components/Footer';
import CipherProblems from './routes/CipherProblems';
import DecipherPage from './features/solve/routes/DecipherPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='problems/:cipher' element={<CipherProblems />} />
        <Route path='about' element={<About />} />
        <Route path='solve' element={<DecipherPage match={{ text: 'bla' }} />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
