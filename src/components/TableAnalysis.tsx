import { Card, IntegerInput } from '@/components';
import { Table, Tbody, Tr, Td, VStack, HStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { AnalysisProps } from '@/types';

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

export const TableAnalysis: React.FC<AnalysisProps> = ({ text, onClose }) => {
  const maxValue = text.length / 2;

  const [rows, setRows] = useState(5);
  const [columns, setColumns] = useState(5);

  return (
    <Card title='Table Analysis' onClose={onClose}>
      <VStack>
        <HStack>
          <Text>Rows</Text>
          <IntegerInput
            minValue={1}
            maxValue={maxValue}
            defaultValue={5}
            onValueChange={(v) => setRows(v)}
          />
        </HStack>
        <HStack>
          <Text>Columns</Text>
          <IntegerInput
            minValue={1}
            maxValue={maxValue}
            defaultValue={5}
            onValueChange={(v) => setColumns(v)}
          />
        </HStack>
        {buildTable(text, rows, columns)}
      </VStack>
    </Card>
  );
};
