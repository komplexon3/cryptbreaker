import { Card, TableDimensionInput } from '@/components';
import { Table, Tbody, Tr, Td, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { AnalysisProps } from '@/types';
import { useDecryptionContext } from '@/contexts';

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
        <Td css={{ textAlign: 'center' }}>{c}</Td>
      ))}
    </Tr>
  );
};

export const TableAnalysis: React.FC<AnalysisProps> = ({ onClose }) => {
  const { cipherText } = useDecryptionContext();

  const maxValue = cipherText.length / 2;

  const [rows, setRows] = useState(5);
  const [columns, setColumns] = useState(5);

  return (
    <Card title='Table Analysis' onClose={onClose}>
      <VStack>
        <TableDimensionInput
          maxRowsValue={maxValue}
          maxColumnsValue={maxValue}
          onRowsValueChange={(v) => setRows(v)}
          onColumnsValueChange={(v) => setColumns(v)}
        />
        {buildTable(cipherText, rows, columns)}
      </VStack>
    </Card>
  );
};
