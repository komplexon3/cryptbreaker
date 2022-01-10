import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BasicBox } from './BasicBox';

interface CardProps {
  title?: string;
  borderColor?: string;
  titleColor?: string;
  children?: ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, borderColor, titleColor, children }) => {
  return (
    <BasicBox>
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
        </Box>
      )}
      <Box padding='5'>{children}</Box>
    </BasicBox>
  );
};

Card.defaultProps = {
  borderColor: 'primary.200',
  titleColor: 'black',
};

export default Card;
