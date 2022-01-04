import { BasicBox } from '../../../../components/BasicBox';
import { Table, Tbody, Tr, Td, VStack, HStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { IntegerInput } from '..';

interface TableAnalysisProps {
  text: string;
}

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

export const TableAnalysis: React.FC<TableAnalysisProps> = ({ text }) => {
  const maxValue = text.length / 2;

  const [rows, setRows] = useState(5);
  const [columns, setColumns] = useState(5);

  return (
    <BasicBox>
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
    </BasicBox>
  );
};

export default TableAnalysis;
