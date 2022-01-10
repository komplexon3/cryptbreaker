import { AddIcon } from '@chakra-ui/icons';
import { Circle } from '@chakra-ui/react';

interface AddButtonProps {
  onClick: () => void;
}

export const AddButton: React.FC<AddButtonProps> = ({ onClick }) => (
  <Circle size='80px' bg='uiBorder' onClick={onClick}>
    <AddIcon w='50px' h='50px' color='white' />
  </Circle>
);
