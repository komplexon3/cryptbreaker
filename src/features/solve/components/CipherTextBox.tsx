import { Box } from '@chakra-ui/react';

interface CipherTextBoxProps {
  text: string;
}

export const CipherTextBox: React.FC<CipherTextBoxProps> = ({ text }) => {
  return (
    <Box maxW='sm' padding={5} borderWidth='1px' borderRadius='lg' overflow='hidden'>
      {text}
    </Box>
  );
};
