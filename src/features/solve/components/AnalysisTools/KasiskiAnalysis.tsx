import { VStack, Text, HStack } from '@chakra-ui/react';
import { ReactNode, useEffect } from 'react';
import { useState } from 'react';
import { IntegerInput } from '..';
import { Card } from '../../../../components';
import { kasiski, kasiskiItem, sortFnKasiskiItems } from '../../util';
import { AnalysisProps } from './Analysis.ds';

export const KasiskiAnalysis: React.FC<AnalysisProps> = ({ text, onClose }) => {
  // elements sorted by interval start
  const [segmentLenght, setSegmentLength] = useState(2);
  const [kasinskiItems, setKasinskiItems] = useState([] as kasiskiItem[]);
  const [kasinskiGroups, setKasinskiGroups] = useState([] as string[]);
  const [kasinskiGroupEnabled, setKasinskiGroupEnable] = useState([] as boolean[]);
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

  useEffect(() => {
    const [newKasiskiItems, newKasiskiGroups] = kasiski(text, segmentLenght);
    setKasinskiItems(newKasiskiItems.sort(sortFnKasiskiItems));
    setKasinskiGroups(newKasiskiGroups);
    setKasinskiGroupEnable(Array(newKasiskiGroups.length).fill(false));
  }, [text, segmentLenght]);

  const KasinskiText = () => {
    const parseItem = (v: string, i: number): ReactNode => {
      for (let j = 0; j < kasinskiItems.length; j++) {
        const item = kasinskiItems[j];
        if (item.interval.start > i) {
          return v;
        }
        if (i > item.interval.end) {
          continue;
        }

        const kIndex = kasinskiGroups.indexOf(item.segment);
        // TODO exception if not found

        return (
          <HightlightedSpan
            color={colors[kIndex]}
            highlighted={kasinskiGroupEnabled[kIndex]}
            onMouseEnter={() => {
              kasinskiGroupEnabled[kIndex] = true;
              setKasinskiGroupEnable([...kasinskiGroupEnabled]);
            }}
            onMouseLeave={() => {
              kasinskiGroupEnabled[kIndex] = false;
              setKasinskiGroupEnable([...kasinskiGroupEnabled]);
            }}
          >
            {v}
          </HightlightedSpan>
        );
      }
    };
    return <Text>{text.split('').map(parseItem)}</Text>;
  };

  return (
    <Card title='Kasiski Analysis' onClose={onClose}>
      <VStack>
        <HStack>
          <Text>Segment Length</Text>
          <IntegerInput
            minValue={2}
            maxValue={10}
            defaultValue={3}
            onValueChange={(v) => {
              setSegmentLength(v);
            }}
          />
        </HStack>
        <KasinskiText />
      </VStack>
    </Card>
  );
};

interface HightlightedSpanProps {
  color: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  highlighted?: boolean;
  children?: React.ReactNode;
}

const HightlightedSpan: React.FC<HightlightedSpanProps> = ({
  color,
  highlighted,
  onMouseEnter,
  onMouseLeave,
  children,
}) => {
  const element = (
    <span
      style={{ color: color }}
      onMouseEnter={(e) => {
        e.preventDefault();
        onMouseEnter();
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        onMouseLeave();
      }}
    >
      {children}
    </span>
  );
  return highlighted ? <b>{element}</b> : element;
};

export default KasiskiAnalysis;
