import { Card } from './../../../components';
import { Box } from '@chakra-ui/react';

interface CipherTextBoxProps {
  text: string;
}

export const CipherTextBox: React.FC<CipherTextBoxProps> = ({ text }) => {
  return <Card title='Cipher Text'>{text}</Card>;
};
