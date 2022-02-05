import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface ProblemCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnter: (pc: string) => void;
}

const verifyInput = (pc: string): boolean => {
  // TODO: check that the redirect created from problem code is valid
  // maybe we can just check whether decodeParam fails...
  return pc !== '';
};

const parseInputToProblemURL = (pc: string): string => {
  try {
    const problemURL = new URL(pc);
    return problemURL.pathname ?? '';
  } catch {
    return '/solve/' + pc;
  }
};

export const ProblemCodeModal: React.FC<ProblemCodeModalProps> = ({ isOpen, onClose, onEnter }) => {
  const [input, setInput] = useState('');
  const [valid, setValid] = useState(true);
  // whether or not anything has been entered (so the "empty" error isn't shown before text entry)
  const [used, setUsed] = useState(false);

  // make sure everything is cleared when it is first rendered
  useEffect(() => {
    setInput('');
    setUsed(false);
  }, []);

  useEffect(() => {
    if (used) {
      setValid(verifyInput(input));
    }
  }, [used, input]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Problem Code</ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingX={6} paddingTop='0' paddingBottom='6'>
            <VStack>
              <FormControl isInvalid={!valid}>
                <FormLabel htmlFor='problem-code'>Problem Code</FormLabel>
                <Input
                  id='problem-code'
                  placeholder='Problem Code'
                  onChange={(e) => {
                    e.preventDefault();
                    setUsed(true);
                    setInput(e.target.value);
                  }}
                />
                <FormErrorMessage>Problem code must not be empty.</FormErrorMessage>
              </FormControl>
              <HStack>
                <Button
                  type='reset'
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type='submit'
                  bg='uiBorder'
                  disabled={!used || !valid}
                  onClick={(e) => {
                    e.preventDefault();
                    onEnter(parseInputToProblemURL(input));
                  }}
                >
                  Enter
                </Button>
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
