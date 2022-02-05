import { useDecryptionContext } from '@/contexts';
import React, { createContext, useContext, useMemo, useState } from 'react';
import { useDebugValue } from 'react';
import { kasiskiGroup, kasiskiItem } from '../types';
import { kasiski } from '../utils';

interface Kasiski {
  segmentLenght: number;
  setSegmentLength: React.Dispatch<React.SetStateAction<number>>;
  kasiskiItems: kasiskiItem[];
  kasiskiGroups: kasiskiGroup[];
  enabledKasiskiGroup: string;
  setEnabledKasiskiGroup: React.Dispatch<React.SetStateAction<string>>;
  selectedKasikiItem: kasiskiItem;
  setSelectedKasikiItem: React.Dispatch<React.SetStateAction<kasiskiItem | undefined>>;
  colorMap: Map<string, string>;
  kasiskiGroupsToPositionsMap: Map<string, number[]>;
}

const KasiskiContext = createContext<Kasiski | undefined>(undefined!);

export const KasiskiProvider = (props: any) => {
  const { cipherText: text } = useDecryptionContext();
  const [segmentLenght, setSegmentLength] = useState(2);
  const [enabledKasiskiGroup, setEnabledKasiskiGroup] = useState('');
  const [selectedKasikiItem, setSelectedKasikiItem] = useState<kasiskiItem | undefined>(undefined);

  const [kasiskiItems, kasiskiGroups] = useMemo(() => {
    return kasiski(text, segmentLenght);
  }, [text, segmentLenght]);

  const colorMap: Map<string, string> = useMemo(() => {
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

  const kasiskiGroupsToPositionsMap: Map<string, number[]> = useMemo(
    () => new Map(kasiskiGroups.map((v) => [v.segment, v.positions])),
    [kasiskiGroups]
  );

  const value = {
    segmentLenght,
    setSegmentLength,
    kasiskiItems,
    kasiskiGroups,
    enabledKasiskiGroup,
    setEnabledKasiskiGroup,
    selectedKasikiItem,
    setSelectedKasikiItem,
    colorMap,
    kasiskiGroupsToPositionsMap,
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
