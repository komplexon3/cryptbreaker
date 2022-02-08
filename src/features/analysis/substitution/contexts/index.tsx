import { alphabet, isLetter } from '@/utils';
import { createContext, useCallback, useContext, useState } from 'react';

interface SubstitutionAnalysis {
  invertedKey: Map<string, string>;
  setInvertedKey: (key: string, value: string) => void;
  selectedLetter: string;
  setSelectedLetter: (value: string) => void;
  clearSelectedLetter: () => void;
}

const SubstitutionAnalysisContext = createContext<SubstitutionAnalysis | undefined>(undefined!);

export const SubstitutionAnalysisProvider = (props: any) => {
  const [invertedKey, _setInvertedKey] = useState(
    new Map(alphabet.split('').map((v) => [v.toUpperCase(), '']))
  );
  const [selectedLetter, _setSelectedLetter] = useState('');

  const setInvertedKey = useCallback(
    (key: string, value: string) => {
      const _key = key.toUpperCase();
      const _value = value.toUpperCase();
      console.log('---' + value);
      if (!isLetter(_key)) {
        throw Error('key must be a single letter in A-Z');
      }
      if (_value === '') {
        _setInvertedKey(new Map(invertedKey.set(_key, '')));
      } else {
        if (!isLetter(_value)) {
          throw Error('value must be empty or a single letter in A-Z');
        }
        _setInvertedKey(new Map(invertedKey.set(_key, _value)));
      }
    },
    [_setInvertedKey, invertedKey]
  );

  const setSelectedLetter = useCallback(
    (value: string) => {
      const _value = value.toUpperCase();
      if (!isLetter(_value)) {
        throw Error('selected letter must be a single letter in A-Z');
      }

      _setSelectedLetter(_value);
    },
    [_setSelectedLetter]
  );

  const clearSelectedLetter = useCallback(() => {
    _setSelectedLetter('');
  }, [_setSelectedLetter]);

  const value = {
    invertedKey,
    setInvertedKey,
    selectedLetter,
    setSelectedLetter,
    clearSelectedLetter,
  };

  return <SubstitutionAnalysisContext.Provider value={value} {...props} />;
};

export const useSubstitutionAnlaysisContext = (): SubstitutionAnalysis => {
  const context = useContext(SubstitutionAnalysisContext);

  if (!context) {
    throw new Error('useSubstitutionAnalysisContext must be used inside a KasiskiProvider');
  }

  return context;
};
