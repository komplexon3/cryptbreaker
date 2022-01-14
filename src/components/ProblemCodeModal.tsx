import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  ButtonGroup,
  Flex,
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

interface ProblemCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const verifyProblemCode = (pc: string): boolean => {
  // TODO: check that the redirect created from problem code is valid
  // maybe we can just check whether decodeParam fails...
  return pc !== '';
};

export const ProblemCodeModal: React.FC<ProblemCodeModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [problemCode, setProblemCode] = useState('');
  const [valid, setValid] = useState(true);
  // whether or not anything has been entered (so the "empty" error isn't shown before text entry)
  const [used, setUsed] = useState(false);

  // make sure everything is cleared when it is first rendered
  useEffect(() => {
    setProblemCode('');
    setUsed(false);
  }, []);

  useEffect(() => {
    if (used) {
      setValid(verifyProblemCode(problemCode));
    }
  }, [used, problemCode]);

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
                    setProblemCode(e.target.value);
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
                    navigate('/solve/' + problemCode);
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

export default ProblemCodeModal;
