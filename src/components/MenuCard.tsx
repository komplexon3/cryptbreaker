import { Box, Link } from '@chakra-ui/react';

interface MenuCardProps {
  title: string;
  description?: string;
  link?: string;
  onClick?: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, description, link, onClick }) => {
  return (
    <Box
      maxW='sm'
      padding={5}
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      _hover={{ bg: 'gray.100' }}
      as={Link}
      href={link}
      onClick={
        onClick
          ? (e) => {
              e.preventDefault();
              onClick();
            }
          : undefined
      }
    >
      <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
        {title}
      </Box>

      <Box>{description}</Box>
    </Box>
  );
};

export default MenuCard;
