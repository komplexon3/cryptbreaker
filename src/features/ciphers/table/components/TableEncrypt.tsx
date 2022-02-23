import { Card, TableDimensionInput } from '@/components';
import { EncryptProps } from '@/types';
import { VStack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { maxColumns, maxRows, minColumns, minRows, tableEncrypt } from '../utils/table';

export const TableEncrypt: React.FC<EncryptProps> = ({ text, setCipherText, onClose }) => {
  const [rows, setRows] = useState(minRows);
  const [columns, setColumns] = useState(minColumns);
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
    setCipherText(tableEncrypt(text, rows, columns));
  }, [rows, columns, text, setCipherText]);

  return (
    <Card title='Encrypt with table' onClose={onClose}>
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
        {error !== '' && <Text color='red'>{error}</Text>}
      </VStack>
    </Card>
  );
};
