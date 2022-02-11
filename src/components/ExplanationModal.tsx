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
  text: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ExplanationModal: FC<ExplanationModalProps> = ({ header, text, isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingX={6} paddingTop='0' paddingBottom='6'>
            {text}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
