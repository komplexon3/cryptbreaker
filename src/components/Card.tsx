import { background, Box, CloseButton } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  borderColor?: string;
  titleColor?: string;
  backgroundColor?: string;
  onClose?: () => void;
  children?: ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  borderColor,
  titleColor,
  backgroundColor,
  onClose,
  children,
}) => {
  return (
    <Box borderWidth='1px' borderRadius='lg' borderColor={borderColor} overflow='hidden'>
      {title && (
        <Box
          paddingX='5'
          paddingY='2'
          width='100%'
          bg={borderColor}
          color={titleColor}
          fontSize='xl'
          fontWeight='semibold'
        >
          {title}
          {onClose && <CloseButton float={'right'} onClick={onClose} />}
        </Box>
      )}
      {!title && onClose && <CloseButton float={'right'} onClick={onClose} />}
      <Box bg={backgroundColor} padding='5'>
        {children}
      </Box>
    </Box>
  );
};

Card.defaultProps = {
  backgroundColor: 'white',
  borderColor: 'primary.200',
  titleColor: 'black',
};
