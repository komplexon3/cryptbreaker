import { Card, TableDimensionInput } from '@/components';
import { useDecryptionContext } from '@/contexts';
import { maxColumns, maxRows, minColumns, minRows } from '@/features/ciphers';
import { AnalysisProps } from '@/types';
import { Table, Tbody, Td, Tr, VStack, Text } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

export const TableAnalysis: React.FC<AnalysisProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const { cipherText } = useDecryptionContext();
  const [rows, setRows] = useState(minRows);
  const [columns, setColumns] = useState(minColumns);

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
    <Card
      title={t('AnalysisTools.Table.titleLong')}
      explanationHeader={t('AnalysisTools.Table.explanationHeader')}
      explanationBody={t('AnalysisTools.Table.explanationBody')}
      onClose={onClose}
    >
      <VStack>
        <TableDimensionInput
          minRowsValue={minRows}
          maxRowsValue={maxRows}
          defaultRowsValue={minRows}
          minColumnsValue={minColumns}
          maxColumnsValue={maxColumns}
          defaultColumnsValue={minColumns}
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
