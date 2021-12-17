import { Box } from '@chakra-ui/react';
import UnlockIcon from '@chakra-ui/icon';

interface MenuCardProps {
  title: string;
  description: string;
  link: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, description, link }) => {
  return (
    <Box
      maxW='sm'
      padding={5}
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      _hover={{ bg: 'gray.100' }}
    >
      <UnlockIcon />

      <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
        {title}
      </Box>

      <Box>{description}</Box>
    </Box>
  );
};

export default MenuCard;
