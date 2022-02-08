import { isLetter } from '@/utils';
import { useCallback, useEffect, useMemo } from 'react';
import { useSubstitutionAnlaysisContext } from '../contexts';

export const useSubstitutionAnlaysisElementReference = (cipherCharacter: string) => {
  useEffect(() => {
    if (!isLetter(cipherCharacter)) {
      throw Error('cipherTextCharacter must be a letter in A-Z');
    }
  }, [cipherCharacter]);

  const _cipherCharacter = useMemo(() => cipherCharacter.toUpperCase(), [cipherCharacter]);

  const { invertedKey, setInvertedKey, selectedLetter, setSelectedLetter, clearSelectedLetter } =
    useSubstitutionAnlaysisContext();

  const enabled = useMemo(
    () => selectedLetter === _cipherCharacter,
    [selectedLetter, _cipherCharacter]
  );

  const plainTextCharacter = useMemo(
    () => invertedKey.get(_cipherCharacter) ?? '',
    [invertedKey, _cipherCharacter]
  );

  const isMapped = useMemo(() => plainTextCharacter !== '', [plainTextCharacter]);

  const onSetSubstitutionValue = useCallback(
    (value: string) => {
      console.log(value);
      setInvertedKey(_cipherCharacter, value);
    },
    [setInvertedKey, _cipherCharacter]
  );

  let onFocusEnter = useCallback(() => {
    setSelectedLetter(_cipherCharacter);
  }, [setSelectedLetter, _cipherCharacter]);
  let onFocusLeave = useCallback(() => {
    clearSelectedLetter();
  }, [clearSelectedLetter]);

  return {
    cipherTextCharacter: _cipherCharacter,
    plainTextCharacter: plainTextCharacter,
    isMapped: isMapped,
    enabled: enabled,
    onFocusEnter: onFocusEnter,
    onFocusLeave: onFocusLeave,
    onSetSubstitutionValue,
  };
};
