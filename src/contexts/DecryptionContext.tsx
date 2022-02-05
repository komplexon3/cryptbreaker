import { ProblemLanguages } from '@/data';
import React, { createContext, useContext, useState } from 'react';

interface Decryption {
  cipherText: string;
  setCipherText: React.Dispatch<React.SetStateAction<string>>;
  decipheredText: string;
  setDecipheredText: React.Dispatch<React.SetStateAction<string>>;
  language: ProblemLanguages;
  setLanguage: React.Dispatch<React.SetStateAction<ProblemLanguages>>;
}

const DecryptionContext = createContext<Decryption | undefined>(undefined);

export const DecryptionProvider = (props: any) => {
  const [cipherText, setCipherText] = useState('');
  const [decipheredText, setDecipheredText] = useState('');
  const [language, setLanguage] = useState(ProblemLanguages.EN);

  const value = {
    cipherText,
    setCipherText,
    decipheredText,
    setDecipheredText,
    language,
    setLanguage,
  };

  return <DecryptionContext.Provider value={value} {...props} />;
};

export const useDecryptionContext = (): Decryption => {
  const context = useContext(DecryptionContext);

  if (!context) {
    throw new Error('useDecryptionContext must be used inside a DecryptionProvider');
  }

  return context;
};
