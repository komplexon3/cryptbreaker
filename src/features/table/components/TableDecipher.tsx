import { VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Card, TableDimensionInput } from '@/components';
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
        <TableDimensionInput
          maxRowsValue={maxValue}
          maxColumnsValue={maxValue}
          onRowsValueChange={(v) => handleValueChange(v)}
          onColumnsValueChange={(v) => handleValueChange(undefined, v)}
        />
      </VStack>
    </Card>
  );
};
