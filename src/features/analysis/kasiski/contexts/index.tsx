import { useDecryptionContext } from '@/contexts';
import { createContext, useContext, useMemo, useState } from 'react';
import { kasiskiItem } from '../types';
import { kasiski } from '../utils';

interface Kasiski {
  segmentLenght: number;
  setSegmentLength: React.Dispatch<React.SetStateAction<number>>;
  kasiskiItems: kasiskiItem[];
  kasiskiGroups: string[];
  enabledKasiskiGroup: string;
  setEnabledKasiskiGroup: React.Dispatch<React.SetStateAction<string>>;
  focusPersistent: boolean;
  setFocusPersistent: React.Dispatch<React.SetStateAction<boolean>>;
  colorMap: Map<string, string>;
}

const KasiskiContext = createContext<Kasiski | undefined>(undefined!);

export const KasiskiProvider = (props: any) => {
  const { cipherText: text } = useDecryptionContext();
  const [segmentLenght, setSegmentLength] = useState(2);
  const [enabledKasiskiGroup, setEnabledKasiskiGroup] = useState('');
  const [focusPersistent, setFocusPersistent] = useState(false);

  const [kasiskiItems, kasiskiGroups] = useMemo(() => {
    return kasiski(text, segmentLenght);
  }, [text, segmentLenght]);

  const colorMap = useMemo(() => {
    const colors = [
      '#e53e3e',
      '#38a169',
      '#2b6cb0',
      '#805ad5',
      '#d53f8c',
      '#dd6b20',
      '#38b2ac',
      '#975a16',
    ];
    return new Map(kasiskiGroups.map((v, i) => [v.segment, colors[i % colors.length]]));
  }, [kasiskiGroups]);

  const value = {
    segmentLenght,
    setSegmentLength,
    kasiskiItems,
    kasiskiGroups,
    enabledKasiskiGroup,
    setEnabledKasiskiGroup,
    focusPersistent,
    setFocusPersistent,
    colorMap,
  };

  return <KasiskiContext.Provider value={value} {...props} />;
};

export const useKasiskiContext = (): Kasiski => {
  const context = useContext(KasiskiContext);

  if (!context) {
    throw new Error('useKasiskiContext must be used inside a KasiskiProvider');
  }

  return context;
};
