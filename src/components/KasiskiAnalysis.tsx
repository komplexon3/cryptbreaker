import { VStack, Text, HStack } from '@chakra-ui/react';
import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { useState } from 'react';
import { Card, IntegerInput } from '@/components';
import { kasiski, kasiskiItem } from '@/utils/kasiskiAnalysis';
import { AnalysisProps } from '@/types';
import { useDecryptionContext } from '@/contexts';

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

  useEffect(() => {
    console.log(colorMap);
  }, [colorMap]);

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

const useKasiskiContext = (): Kasiski => {
  const context = useContext(KasiskiContext);

  if (!context) {
    throw new Error('useKasiskiContext must be used inside a KasiskiProvider');
  }

  return context;
};

const useKasiskiItem = (item: kasiskiItem) => {
  const {
    enabledKasiskiGroup,
    setEnabledKasiskiGroup,
    focusPersistent,
    setFocusPersistent,
    colorMap,
  } = useKasiskiContext();

  const groups = item.groups;
  const defaultColor = (() => {
    if (groups.length === 1) {
      return colorMap.get(groups[0]);
    } else if (groups.length > 1) {
      return '#4a5568'; // gray
    }
    return 'black';
  })();
  const [color, setColor] = useState(defaultColor);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    for (const group of groups) {
      if (enabledKasiskiGroup === group) {
        setEnabled(true);
        setColor(colorMap.get(group));
        return;
      }
    }
    // none of it's group were enabled -> needs to be set to the default
    setEnabled(false);
    setColor(defaultColor);
  }, [defaultColor, groups, enabledKasiskiGroup, colorMap]);

  let onFocusEnter = () => {};
  let onFocusLeave = () => {};
  let onClick = () => {};

  if (groups.length === 1) {
    onFocusEnter = () => {
      focusPersistent || setEnabledKasiskiGroup(groups[0]);
    };
    onFocusLeave = () => {
      focusPersistent || setEnabledKasiskiGroup('');
    };
    onClick = () => {
      if (groups.includes(enabledKasiskiGroup)) {
        setFocusPersistent(!focusPersistent);
      }
    };
  }

  return {
    character: item.character,
    color: color,
    enabled: enabled,
    onFocusEnter: onFocusEnter,
    onFocusLeave: onFocusLeave,
    onClick: onClick,
  };
};

export const KasiskiAnalysis: React.FC<AnalysisProps> = ({ onClose }) => {
  const { kasiskiItems, setSegmentLength } = useKasiskiContext();

  interface KasiskiItemProps {
    kasiskiItem: kasiskiItem;
  }

  const KasiskiItem: React.FC<KasiskiItemProps> = ({ kasiskiItem }) => {
    const { character, color, enabled, onFocusEnter, onFocusLeave, onClick } =
      useKasiskiItem(kasiskiItem);

    const element = (
      <span
        style={{ color: color }}
        onMouseEnter={(e) => {
          e.preventDefault();
          onFocusEnter();
        }}
        onMouseLeave={(e) => {
          e.preventDefault();
          onFocusLeave();
        }}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {color === 'black' ? character : <b>{character}</b>}
      </span>
    );
    return enabled ? <span style={{ backgroundColor: '#F6E05E' }}>{element}</span> : element;
  };

  const KasinskiText = () => {
    return (
      <Text style={{ wordWrap: 'break-word', maxWidth: '100%' }}>
        {kasiskiItems.map((v, i) => (
          <KasiskiItem
            key={i} // okay to use index as key as the list is never mutated or reordered
            kasiskiItem={v}
          />
        ))}
      </Text>
    );
  };

  return (
    <Card title='Kasiski Analysis' onClose={onClose}>
      <VStack>
        <HStack>
          <Text>Segment Length</Text>
          <IntegerInput
            minValue={2}
            maxValue={10}
            defaultValue={2}
            onValueChange={(v) => {
              setSegmentLength(v);
            }}
          />
        </HStack>
        <KasinskiText />
        <Text color={'gray.600'}>Note: Grey characters are part of multiple segments.</Text>
      </VStack>
    </Card>
  );
};
