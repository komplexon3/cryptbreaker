import { Box } from '@chakra-ui/react';

export const BasicBox: React.FC = ({ children }) => {
  return (
    <Box borderWidth='1px' borderRadius='lg' borderColor='uiBorder' overflow='hidden'>
      {children}
    </Box>
  );
};
