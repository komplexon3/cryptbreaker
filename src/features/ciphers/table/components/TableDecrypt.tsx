import { Card, TableDimensionInput } from '@/components';
import { DecryptionProps } from '@/types';
import { VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { tableDecrypt } from '../utils/table';

export const TableDecrypt: React.FC<DecryptionProps> = ({ text, setDecipheredText, onClose }) => {
  const [rows, setRows] = useState(5);
  const [columns, setColumns] = useState(5);
  const maxValue = text.length / 2;

  useEffect(() => {
    setDecipheredText(tableDecrypt(text, rows, columns));
  }, [rows, columns, text, setDecipheredText]);

  return (
    <Card title='Table Key Entry' onClose={onClose}>
      <VStack>
        <TableDimensionInput
          maxRowsValue={maxValue}
          maxColumnsValue={maxValue}
          onRowsValueChange={(v) => setRows(v)}
          onColumnsValueChange={(v) => setColumns(v)}
        />
      </VStack>
    </Card>
  );
};
