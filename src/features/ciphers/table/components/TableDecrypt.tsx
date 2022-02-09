import { Card, TableDimensionInput } from '@/components';
import { DecryptionProps } from '@/types';
import { VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { absoluteMaxColumns, tableDecrypt, tableDimensionsSeachSpace } from '../utils/table';

export const TableDecrypt: React.FC<DecryptionProps> = ({ text, setDecipheredText, onClose }) => {
  let { rowsMin, rowsMax, columnsMin, columnsMax } = tableDimensionsSeachSpace(text.length);
  // widen the search space as the correct value is most certainly one of the original "corners"
  const delta = 2;
  rowsMin = rowsMin - delta >= 1 ? rowsMin - delta : 1;
  rowsMax = rowsMax + 2;
  columnsMin = columnsMin - delta >= 1 ? columnsMin - delta : 1;
  columnsMax = columnsMax + delta <= absoluteMaxColumns ? columnsMax + delta : absoluteMaxColumns;

  const [rows, setRows] = useState(rowsMin);
  const [columns, setColumns] = useState(columnsMin);

  useEffect(() => {
    setDecipheredText(tableDecrypt(text, rows, columns));
  }, [rows, columns, text, setDecipheredText]);

  return (
    <Card title='Table Key Entry' onClose={onClose}>
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
      </VStack>
    </Card>
  );
};
