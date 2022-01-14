import { HStack, VStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { IntegerInput, Card } from '@/components';
import { tableDecrypt } from '../utils/table';
import { DecipherProps } from '@/types';

export const TableDecipher: React.FC<DecipherProps> = ({ text, setDecipheredText, onClose }) => {
  const [rows, setRows] = useState(5);
  const [columns, setColumns] = useState(5);
  const maxValue = text.length / 2;

  const handleValueChange = (r?: number, c?: number) => {
    if (r) {
      setRows(r);
    }
    if (c) {
      setColumns(c);
    }
    setDecipheredText(tableDecrypt(text, rows, columns));
  };

  return (
    <Card title='Table Key Entry' onClose={onClose}>
      <VStack>
        <HStack>
          <Text>Table Rows</Text>
          <IntegerInput
            minValue={1}
            maxValue={maxValue}
            defaultValue={5}
            onValueChange={(v) => handleValueChange(rows)}
          />
        </HStack>
        <HStack>
          <Text>Table Columns</Text>
          <IntegerInput
            minValue={1}
            maxValue={maxValue}
            defaultValue={5}
            onValueChange={(v) => handleValueChange(undefined, columns)}
          />
        </HStack>
      </VStack>
    </Card>
  );
};
