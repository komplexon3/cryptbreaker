import { VStack, Text, HStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, IntegerInput } from '@/components';
import { kasiski, kasiskiItem } from '@/utils/kasiskiAnalysis';
import { AnalysisProps } from '@/types';

export const KasiskiAnalysis: React.FC<AnalysisProps> = ({ text, onClose }) => {
  // elements sorted by interval start
  const [segmentLenght, setSegmentLength] = useState(2);
  const [kasinskiItems, setKasinskiItems] = useState([] as kasiskiItem[]);
  const [kasinskiGroups, setKasinskiGroups] = useState([] as string[]);
  const [enabledKasiskiGroup, setEneabledKasiskiGroup] = useState('');
  const colors = [
    '#e53e3e',
    '#2f855a',
    '#2b6cb0',
    '#6b46c1',
    '#d53f8c',
    '#dd6b20',
    '#285e61',
    '#319795',
    '#975a16',
  ];
  const colorMap = new Map(kasinskiGroups.map((v, i) => [v, colors[i]]));

  useEffect(() => {
    console.log(enabledKasiskiGroup);
  }, [enabledKasiskiGroup]);

  useEffect(() => {
    const [newKasiskiItems, newKasiskiGroups] = kasiski(text, segmentLenght);
    setKasinskiItems(newKasiskiItems);
    setKasinskiGroups(newKasiskiGroups);
    console.log(newKasiskiItems);
  }, [text, segmentLenght]);

  const useKasiskiItem = (item: kasiskiItem) => {
    const groups = item.groups;
    const defaultColor = (() => {
      if (groups.length === 1) {
        return colorMap.get(groups[0]);
      } else if (groups.length > 1) {
        return '#4A5568';
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
    }, [defaultColor, groups]);

    let onFocusEnter = () => {};
    let onFocusLeave = () => {};

    if (groups.length === 1) {
      onFocusEnter = () => {
        setEneabledKasiskiGroup(groups[0]);
      };
      onFocusLeave = () => {
        setEneabledKasiskiGroup('');
      };
    }

    return {
      character: item.character,
      color: color,
      enabled: enabled,
      onFocusEnter: onFocusEnter,
      onFocusLeave: onFocusLeave,
    };
  };

  interface KasiskiItemProps {
    kasiskiItem: kasiskiItem;
  }

  const KasiskiItem: React.FC<KasiskiItemProps> = ({ kasiskiItem }) => {
    const { character, color, enabled, onFocusEnter, onFocusLeave } = useKasiskiItem(kasiskiItem);

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
      >
        {character}
      </span>
    );
    return enabled ? <b>{element}</b> : element;
  };

  const KasinskiText = () => {
    return (
      <Text style={{ wordWrap: 'break-word', maxWidth: '100%' }}>
        {kasinskiItems.map((v, i) => (
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
