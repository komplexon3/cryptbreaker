import { Card, TableDimensionInput } from '@/components';
import { useDecryptionContext } from '@/contexts';
import {
  absoluteMaxColumns,
  tableDimensionsSeachSpace,
} from '@/features/ciphers/table/utils/table';
import { AnalysisProps } from '@/types';
import { Table, Tbody, Td, Tr, VStack, Text } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

export const TableAnalysis: React.FC<AnalysisProps> = ({ onClose }) => {
  const { t } = useTranslation();
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
  const tableRows = useMemo(() => {
    let stridedText: string[] = new Array(rows).fill('');
    cipherText.split('').forEach((v, i) => (stridedText[i % rows] += v));
    return stridedText.map((v) => {
      if (v.length > columns) {
        return v.substring(0, columns);
      }
      while (v.length < columns) {
        v += '?'; // ? indicates an empty position
      }
      return v;
    });
  }, [cipherText, rows, columns]);

  return (
    <Card title={t('AnalysisTools.Table.titleLong')} onClose={onClose}>
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
        <Table variant={'unstyled'} size={'sm'}>
          <Tbody>
            {tableRows.map((r, i) => {
              return (
                <Tr>
                  {r.split('').map((c) => (
                    <Td css={{ textAlign: 'center', fontFamily: 'monospace', fontWeight: 'bold' }}>
                      {c === '?' ? <span style={{ color: '#d53f8c' }}>?</span> : c}
                    </Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <Text>
          <Trans
            i18nKey={'AnalysisTools.Table.NotePink?'}
            t={t}
            components={[<span style={{ color: '#d53f8c', fontWeight: 'bold' }}></span>]}
          />
        </Text>
      </VStack>
    </Card>
  );
};
