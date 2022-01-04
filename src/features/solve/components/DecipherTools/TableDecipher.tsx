import { HStack, VStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { IntegerInput } from '..';
import { BasicBox } from '../../../../components/BasicBox';
import { CeasarDecrypt, tableDecrypt } from '../../util';
import { DecipherProps } from './Decipher.ds';

export const TableDecipher: React.FC<DecipherProps> = ({ text, setDecipheredText }) => {
  const [rows, setRows] = useState(5);
  const [columns, setColumns] = useState(5);
  const maxValue = text.length / 2;

  const handleValueChange = (r?: number, c?: number) => {
    if (r) {
      setRows(r);
    }
    if (c) {
      setColumns(c);
    }
    setDecipheredText(tableDecrypt(text, rows, columns));
  };

  return (
    <BasicBox>
      <VStack>
        <HStack>
          <Text>Table Rows</Text>
          <IntegerInput
            minValue={1}
            maxValue={maxValue}
            defaultValue={5}
            onValueChange={(v) => handleValueChange(rows)}
          />
        </HStack>
        <HStack>
          <Text>Table Columns</Text>
          <IntegerInput
            minValue={1}
            maxValue={maxValue}
            defaultValue={5}
            onValueChange={(v) => handleValueChange(undefined, columns)}
          />
        </HStack>
      </VStack>
    </BasicBox>
  );
};

export default TableDecipher;
