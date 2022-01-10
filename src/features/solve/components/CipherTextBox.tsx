import { Card } from './../../../components';
import { Skeleton, Text } from '@chakra-ui/react';

interface CipherTextBoxProps {
  text: string;
}

export const CipherTextBox: React.FC<CipherTextBoxProps> = ({ text }) => {
  return (
    <Card title='Cipher Text'>
      {text ? (
        text
      ) : (
        <>
          <Skeleton marginY='0.5rem'>
            <Text>filler</Text>
          </Skeleton>
          <Skeleton marginY='0.5rem'>
            <Text>filler</Text>
          </Skeleton>
          <Skeleton marginY='0.5rem'>
            <Text>filler</Text>
          </Skeleton>
        </>
      )}
    </Card>
  );
};
