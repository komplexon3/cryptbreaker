import { IntegerInput } from '@/components';
import { HStack, Text, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

interface TableDimensionInputProps {
  minRowsValue?: number;
  maxRowsValue?: number;
  defaultRowsValue?: number;
  minColumnsValue?: number;
  maxColumnsValue?: number;
  defaultColumnsValue?: number;
  onRowsValueChange?: (v: number) => void;
  onColumnsValueChange?: (v: number) => void;
}

export const TableDimensionInput: React.FC<TableDimensionInputProps> = ({
  minRowsValue,
  maxRowsValue,
  defaultRowsValue,
  minColumnsValue,
  maxColumnsValue,
  defaultColumnsValue,
  onRowsValueChange,
  onColumnsValueChange,
}) => {
  const { t } = useTranslation();
  return (
    <VStack>
      <HStack>
        <Text>{t('TableDimensionInput.Rows')}</Text>
        <IntegerInput
          minValue={minRowsValue}
          maxValue={maxRowsValue}
          defaultValue={defaultRowsValue}
          onValueChange={onRowsValueChange}
        />
      </HStack>
      <HStack>
        <Text>{t('TableDimensionInput.Columns')}</Text>
        <IntegerInput
          minValue={minColumnsValue}
          maxValue={maxColumnsValue}
          defaultValue={defaultColumnsValue}
          onValueChange={onColumnsValueChange}
        />
      </HStack>
    </VStack>
  );
};

TableDimensionInput.defaultProps = {
  minRowsValue: 1,
  minColumnsValue: 1,
  defaultRowsValue: 5,
  defaultColumnsValue: 5,
};
