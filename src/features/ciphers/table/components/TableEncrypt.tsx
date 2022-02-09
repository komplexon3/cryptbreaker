import { Card, TableDimensionInput } from '@/components';
import { EncryptProps } from '@/types';
import { VStack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { acceptedTableDimensions, tableEncrypt } from '../utils/table';

export const TableEncrypt: React.FC<EncryptProps> = ({ text, setCipherText, onClose }) => {
  const { rowsMin, rowsMax, columnsMin, columnsMax } = acceptedTableDimensions(text.length);
  const [rows, setRows] = useState(rowsMin);
  const [columns, setColumns] = useState(columnsMin);
  const [error, setError] = useState('');

  useEffect(() => {
    if (rows * columns < text.length) {
      setError('Dimensions too small to fit the entire text.');
    } else {
      setError('');
      setCipherText(tableEncrypt(text, rows, columns));
    }
  }, [rows, columns, text, setCipherText]);

  return (
    <Card title='Encrypt with table' onClose={onClose}>
      <VStack>
        <TableDimensionInput
          minRowsValue={rowsMin}
          maxRowsValue={rowsMax}
          defaultRowsValue={rowsMin}
          minColumnsValue={columnsMin}
          maxColumnsValue={columnsMax}
          defaultColumnsValue={columnsMin}
          onRowsValueChange={(v) => setRows(v)}
          onColumnsValueChange={(v) => setColumns(v)}
        />
        {error !== '' && <Text color='red'>{error}</Text>}
      </VStack>
    </Card>
  );
};
