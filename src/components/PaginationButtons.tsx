import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { HStack, IconButton, Text } from '@chakra-ui/react';

interface PaginationButtonsProps {
  page: number;
  numberOfPages: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  page,
  numberOfPages,
  onIncrement,
  onDecrement,
}) => {
  return (
    <HStack>
      <IconButton
        icon={<ChevronLeftIcon />}
        aria-label='Previous Element'
        disabled={page === 1}
        onClick={(e) => {
          e.preventDefault();
          onDecrement();
        }}
      />
      <Text>
        {page} / {numberOfPages}
      </Text>
      <IconButton
        icon={<ChevronRightIcon />}
        aria-label='Next Element'
        disabled={page === numberOfPages}
        onClick={(e) => {
          e.preventDefault();
          onIncrement();
        }}
      />
    </HStack>
  );
};
