import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { FC } from 'react';

interface ExplanationModalProps {
  header: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const ExplanationModal: FC<ExplanationModalProps> = ({
  header,
  isOpen,
  onClose,
  children,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingX={6} paddingTop='0' paddingBottom='6'>
            {children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
