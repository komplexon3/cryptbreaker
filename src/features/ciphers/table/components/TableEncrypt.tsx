import { Card, TableDimensionInput } from '@/components';
import { EncryptProps } from '@/types';
import { VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { tableEncrypt } from '../utils/table';

export const TableEncrypt: React.FC<EncryptProps> = ({ text, setCipherText, onClose }) => {
  const [rows, setRows] = useState(5);
  const [columns, setColumns] = useState(5);
  const maxValue = text.length / 2;

  useEffect(() => {
    setCipherText(tableEncrypt(text, rows, columns));
  }, [rows, columns, text, setCipherText]);

  return (
    <Card title='Encrypt with table' onClose={onClose}>
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
