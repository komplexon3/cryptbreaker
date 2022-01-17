import { Box, Link } from '@chakra-ui/react';

interface MenuCardProps {
  title: string;
  description?: string;
  link?: string;
  onClick?: () => void;
  color?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  borderColor?: string;
}

export const MenuCard: React.FC<MenuCardProps> = ({
  title,
  description,
  link,
  onClick,
  color,
  backgroundColor,
  hoverBackgroundColor,
  borderColor,
}) => {
  return (
    <Box
      maxW='sm'
      padding={5}
      color={color}
      borderWidth='1px'
      borderRadius='lg'
      borderColor={borderColor}
      overflow='hidden'
      backgroundColor={backgroundColor}
      _hover={{ bg: hoverBackgroundColor }}
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

MenuCard.defaultProps = {
  backgroundColor: 'white',
  hoverBackgroundColor: 'gray.100',
};
