import { AddButton, Card } from '../../../../components';
import { DecipherTools } from './Decipher.ds';
import { useEffect, useState } from 'react';
import DecipherToolSwitch from './DecipherToolSwitch';
import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
} from '@chakra-ui/react';

interface DecipherToolOrSelectProps {
  text: string;
  setDecipheredText: (s: string) => void;
}

export const DecipherToolOrSelect: React.FC<DecipherToolOrSelectProps> = ({
  text,
  setDecipheredText,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tool, setTool] = useState(DecipherTools.UNSPECIFIED);

  useEffect(() => {
    if (tool === DecipherTools.UNSPECIFIED) {
      setDecipheredText('');
    }
  }, [tool, setDecipheredText]);

  if (tool === DecipherTools.UNSPECIFIED) {
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Select Decipher Tool</ModalHeader>
            <ModalCloseButton />
            <ModalBody padding={6}>
              <SimpleGrid spacingY={3}>
                <Button
                  bg='uiBorder'
                  onClick={() => {
                    onClose();
                    setTool(DecipherTools.CEASAR);
                  }}
                >
                  Ceasar
                </Button>
                <Button
                  bg='uiBorder'
                  onClick={() => {
                    onClose();
                    setTool(DecipherTools.SUBSTITUTION);
                  }}
                >
                  Substitution
                </Button>
                <Button
                  bg='uiBorder'
                  onClick={() => {
                    onClose();
                    setTool(DecipherTools.TABLE);
                  }}
                >
                  Table
                </Button>
                <Button
                  bg='uiBorder'
                  onClick={() => {
                    onClose();
                    setTool(DecipherTools.VIGNERE);
                  }}
                >
                  Vignere
                </Button>
              </SimpleGrid>
            </ModalBody>
          </ModalContent>
        </Modal>

        <Card borderColor='transparent'>
          <Center width='100%'>
            <AddButton onClick={onOpen} />
          </Center>
        </Card>
      </>
    );
  }

  return (
    <DecipherToolSwitch
      text={text}
      tool={tool}
      setDecipheredText={setDecipheredText}
      onClose={() => setTool(DecipherTools.UNSPECIFIED)}
    />
  );
};

export default DecipherToolOrSelect;
