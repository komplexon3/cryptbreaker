import { Box, CloseButton } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  borderColor?: string;
  titleColor?: string;
  onClose?: () => void;
  children?: ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  borderColor,
  titleColor,
  onClose,
  children,
}) => {
  return (
    <Box borderWidth='1px' borderRadius='lg' borderColor='uiBorder' overflow='hidden'>
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
      <Box padding='5'>{children}</Box>
    </Box>
  );
};

Card.defaultProps = {
  borderColor: 'primary.200',
  titleColor: 'black',
};

export default Card;
