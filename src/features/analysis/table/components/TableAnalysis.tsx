import { Card, TableDimensionInput } from '@/components';
import { useDecryptionContext } from '@/contexts';
import { AnalysisProps } from '@/types';
import { acceptedTableDimensions } from '@/utils';
import { Table, Tbody, Td, Tr, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const buildTable = (text: string, rows: number, columns: number) => {
  if (columns < 1) {
    throw new Error('must have at least one column');
  }
  const textRows = text.match(new RegExp('.{1,' + columns + '}', 'g'));

  return (
    <Table variant={'unstyled'} size={'sm'}>
      <Tbody>
        {textRows?.map((r, i) => {
          if (i < rows) {
            return buildTableRow(r);
          }
          return <></>;
        })}
      </Tbody>
    </Table>
  );
};

const buildTableRow = (textRow: string) => {
  return (
    <Tr>
      {textRow.split('').map((c) => (
        <Td css={{ textAlign: 'center', fontFamily: 'monospace' }}>{c}</Td>
      ))}
    </Tr>
  );
};

export const TableAnalysis: React.FC<AnalysisProps> = ({ onClose }) => {
  const { cipherText } = useDecryptionContext();
  const { rowsMin, rowsMax, columnsMin, columnsMax } = acceptedTableDimensions(cipherText.length);

  const [rows, setRows] = useState(rowsMin);
  const [columns, setColumns] = useState(columnsMin);

  return (
    <Card title='Table Analysis' onClose={onClose}>
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
        {buildTable(cipherText, rows, columns)}
      </VStack>
    </Card>
  );
};
