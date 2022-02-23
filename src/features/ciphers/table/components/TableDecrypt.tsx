import { Card, TableDimensionInput } from '@/components';
import { DecryptionProps } from '@/types';
import { VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { maxColumns, maxRows, minColumns, minRows, tableDecrypt } from '../utils/table';

export const TableDecrypt: React.FC<DecryptionProps> = ({ text, setDecipheredText, onClose }) => {
  const [rows, setRows] = useState(minRows);
  const [columns, setColumns] = useState(minColumns);

  useEffect(() => {
    setDecipheredText(tableDecrypt(text, rows, columns));
  }, [rows, columns, text, setDecipheredText]);

  return (
    <Card title='Table Key Entry' onClose={onClose}>
      <VStack>
        <TableDimensionInput
          minRowsValue={minRows}
          maxRowsValue={maxRows}
          defaultRowsValue={minRows}
          minColumnsValue={minColumns}
          maxColumnsValue={maxColumns}
          defaultColumnsValue={minColumns}
          onRowsValueChange={(v) => setRows(v)}
          onColumnsValueChange={(v) => setColumns(v)}
        />
      </VStack>
    </Card>
  );
};
