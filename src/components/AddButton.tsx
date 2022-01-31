import { AddIcon } from '@chakra-ui/icons';
import { Circle } from '@chakra-ui/react';

interface AddButtonProps {
  onClick: () => void;
  backgroundColor?: string;
  iconColor?: string;
}

export const AddButton: React.FC<AddButtonProps> = ({ onClick, backgroundColor, iconColor }) => (
  <Circle size='80px' bg={backgroundColor} onClick={onClick}>
    <AddIcon w='50px' h='50px' color={iconColor} />
  </Circle>
);

AddButton.defaultProps = {
  backgroundColor: 'uiBorder',
  iconColor: 'white',
};
