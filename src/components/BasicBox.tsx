import { Box } from '@chakra-ui/react';

export const BasicBox: React.FC = ({ children }) => {
  return (
    <Box padding={5} borderWidth='1px' borderRadius='lg' overflow='hidden'>
      {children}
    </Box>
  );
};
