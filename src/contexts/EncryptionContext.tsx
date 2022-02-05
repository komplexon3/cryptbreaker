import { ProblemLanguages } from '@/data';
import React, { createContext, useContext, useState } from 'react';

interface Encryption {
  plainText: string;
  setPlainText: React.Dispatch<React.SetStateAction<string>>;
  cipherText: string;
  setCipherText: React.Dispatch<React.SetStateAction<string>>;
  language: ProblemLanguages;
  setLanguage: React.Dispatch<React.SetStateAction<ProblemLanguages>>;
}

const EncryptionContext = createContext<Encryption | undefined>(undefined);

export const EncryptionProvider = (props: any) => {
  const [cipherText, setCipherText] = useState('');
  const [plainText, setPlainText] = useState('');
  const [language, setLanguage] = useState(ProblemLanguages.EN);

  const value = {
    plainText,
    setPlainText,
    cipherText,
    setCipherText,
    language,
    setLanguage,
  };

  return <EncryptionContext.Provider value={value} {...props} />;
};

export const useEncryptionContext = (): Encryption => {
  const context = useContext(EncryptionContext);

  if (!context) {
    throw new Error('useEncryptionContext must be used inside a EncryptionProvider');
  }

  return context;
};
