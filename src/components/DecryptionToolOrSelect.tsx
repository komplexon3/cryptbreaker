import { AddButton, Card, DecryptionToolSwitch } from '@/components';
import { DecryptionTools } from '@/types';
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
import { useEffect, useState } from 'react';

interface DecryptionToolOrSelectProps {
  text: string;
  setDecipheredText: (s: string) => void;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  iconBackgroundColor?: string;
  iconColor?: string;
}

export const DecryptionToolOrSelect: React.FC<DecryptionToolOrSelectProps> = ({
  text,
  setDecipheredText,
  buttonBackgroundColor,
  buttonTextColor,
  iconBackgroundColor,
  iconColor,
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
                  color={buttonTextColor}
                  bg={buttonBackgroundColor}
                  onClick={() => {
                    onClose();
                    setTool(DecryptionTools.CEASAR);
                  }}
                >
                  Ceasar
                </Button>
                <Button
                  color={buttonTextColor}
                  bg={buttonBackgroundColor}
                  onClick={() => {
                    onClose();
                    setTool(DecryptionTools.SUBSTITUTION);
                  }}
                >
                  Substitution
                </Button>
                <Button
                  color={buttonTextColor}
                  bg={buttonBackgroundColor}
                  onClick={() => {
                    onClose();
                    setTool(DecryptionTools.TABLE);
                  }}
                >
                  Table
                </Button>
                <Button
                  color={buttonTextColor}
                  bg={buttonBackgroundColor}
                  onClick={() => {
                    onClose();
                    setTool(DecryptionTools.VIGENERE);
                  }}
                >
                  Vigenere
                </Button>
              </SimpleGrid>
            </ModalBody>
          </ModalContent>
        </Modal>

        <Card borderColor='transparent'>
          <Center width='100%'>
            <AddButton
              backgroundColor={iconBackgroundColor}
              iconColor={iconColor}
              onClick={onOpen}
            />
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

DecryptionToolOrSelect.defaultProps = {
  buttonBackgroundColor: 'uiBorder',
  buttonTextColor: 'black',
  iconBackgroundColor: 'uiBorder',
  iconColor: 'white',
};
