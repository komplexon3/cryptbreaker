import { AddButton, Card, DecryptionToolSwitch } from '@/components';
import { DecryptionTools } from '@/types';
import { useEffect, useState } from 'react';
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

interface DecryptionToolOrSelectProps {
  text: string;
  setDecipheredText: (s: string) => void;
}

export const DecryptionToolOrSelect: React.FC<DecryptionToolOrSelectProps> = ({
  text,
  setDecipheredText,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tool, setTool] = useState(DecryptionTools.UNSPECIFIED);

  useEffect(() => {
    if (tool === DecryptionTools.UNSPECIFIED) {
      setDecipheredText('');
    }
  }, [tool, setDecipheredText]);

  if (tool === DecryptionTools.UNSPECIFIED) {
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
                    setTool(DecryptionTools.CEASAR);
                  }}
                >
                  Ceasar
                </Button>
                <Button
                  bg='uiBorder'
                  onClick={() => {
                    onClose();
                    setTool(DecryptionTools.SUBSTITUTION);
                  }}
                >
                  Substitution
                </Button>
                <Button
                  bg='uiBorder'
                  onClick={() => {
                    onClose();
                    setTool(DecryptionTools.TABLE);
                  }}
                >
                  Table
                </Button>
                <Button
                  bg='uiBorder'
                  onClick={() => {
                    onClose();
                    setTool(DecryptionTools.VIGNERE);
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
    <DecryptionToolSwitch
      text={text}
      tool={tool}
      setDecipheredText={setDecipheredText}
      onClose={() => setTool(DecryptionTools.UNSPECIFIED)}
    />
  );
};
