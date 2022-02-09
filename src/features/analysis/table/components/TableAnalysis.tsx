import { Card, TableDimensionInput } from '@/components';
import { useDecryptionContext } from '@/contexts';
import {
  absoluteMaxColumns,
  tableDimensionsSeachSpace,
} from '@/features/ciphers/table/utils/table';
import { AnalysisProps } from '@/types';
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
  let { rowsMin, rowsMax, columnsMin, columnsMax } = tableDimensionsSeachSpace(cipherText.length);
  // widen the search space as the correct value is most certainly one of the original "corners"
  const delta = 2;
  rowsMin = rowsMin - delta >= 1 ? rowsMin - delta : 1;
  rowsMax = rowsMax + 2;
  columnsMin = columnsMin - delta >= 1 ? columnsMin - delta : 1;
  columnsMax = columnsMax + delta <= absoluteMaxColumns ? columnsMax + delta : absoluteMaxColumns;

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
