import { Box, useDisclosure } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { ExplanationModal, HelpButton, CloseButton } from '.';

interface CardProps {
  title?: string;
  borderColor?: string;
  titleColor?: string;
  backgroundColor?: string;
  explanationHeader?: string;
  explanationText?: string;
  onClose?: () => void;
  children?: ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  borderColor,
  titleColor,
  backgroundColor,
  explanationHeader,
  explanationText,
  onClose,
  children,
}) => {
  const {
    isOpen: isOpenExplanation,
    onOpen: onOpenExplanation,
    onClose: onCloseExplanation,
  } = useDisclosure();
  return (
    <>
      {explanationHeader && explanationText && (
        <ExplanationModal
          header={explanationHeader}
          text={explanationText}
          isOpen={isOpenExplanation}
          onClose={onCloseExplanation}
        />
      )}
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
            {onClose && <CloseButton float='right' onClick={onClose} />}
            {explanationHeader && explanationText && (
              <HelpButton float='right' marginX='0.5rem' onClick={onOpenExplanation} />
            )}
          </Box>
        )}
        {!title && onClose && <CloseButton onClick={onClose} />}
        <Box bg={backgroundColor} padding='5'>
          {children}
        </Box>
      </Box>
    </>
  );
};

Card.defaultProps = {
  backgroundColor: 'white',
  borderColor: 'primary.200',
  titleColor: 'black',
};
