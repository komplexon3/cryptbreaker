import { BasicBox } from '../../../../components/BasicBox';
import {
  Table,
  Tbody,
  Tr,
  Td,
  useNumberInput,
  VStack,
  HStack,
  Text,
  Button,
  Input,
} from '@chakra-ui/react';

interface TableAnalysisProps {
  text: string;
}

const buildTable = (text: string, columns: number) => {
  if (columns < 1) {
    throw new Error('must have at least one column');
  }
  const textRows = text.match(new RegExp('.{1,' + columns + '}', 'g'));

  return (
    <Table variant={'unstyled'} size={'sm'}>
      <Tbody>{textRows?.map((r) => buildTableRow(r))}</Tbody>
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
  // Setup columns selection
  const { valueAsNumber, getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 5,
      min: 1,
      max: 15,
      precision: 0,
      inputMode: 'numeric',
      pattern: '[0-9]*',
    });

  const incColumns = getIncrementButtonProps();
  const decColumns = getDecrementButtonProps();
  const inputColumns = getInputProps({ readOnly: true });

  return (
    <BasicBox>
      <VStack>
        <HStack>
          <Text>Columns</Text>
          <Input {...inputColumns} />
          <Button {...decColumns}>-</Button>
          <Button {...incColumns}>+</Button>
        </HStack>
        {buildTable(text, valueAsNumber)}
      </VStack>
    </BasicBox>
  );
};

export default TableAnalysis;
