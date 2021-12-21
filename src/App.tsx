import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Footer from './components/Footer';
import CipherProblems from './routes/CipherProblems';

function App() {
  return (
    <>
      <Routes>
        <Route path='problems/:cipher' element={<CipherProblems />} />
        <Route path='about' element={<About />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
