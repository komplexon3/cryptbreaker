import { AddButton, AnalysisToolSwitch, Card } from '@/components';
import { AnalysisTools } from '@/types';
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
import { useState } from 'react';

interface AnalysisToolsAndSelectProps {
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  iconBackgroundColor?: string;
  iconColor?: string;
}

export const AnalysisToolsAndSelect: React.FC<AnalysisToolsAndSelectProps> = ({
  buttonBackgroundColor,
  buttonTextColor,
  iconBackgroundColor,
  iconColor,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // value of AnalysisTools.UNSPECIFIED indicated a removed tool
  const [tools, setTools] = useState([] as AnalysisTools[]);

  const addTool = (tool: AnalysisTools) => {
    setTools([...tools, tool]);
  };

  const removeTool = (toolKey: number) => {
    if (toolKey >= tools.length || tools[toolKey] === AnalysisTools.UNSPECIFIED) {
      throw Error('toolKey ' + toolKey + ' cannot be removed as it is not registered');
    }
    tools[toolKey] = AnalysisTools.UNSPECIFIED;
    setTools([...tools]);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Analysis Tool</ModalHeader>
          <ModalCloseButton />
          <ModalBody padding={6}>
            <SimpleGrid spacingY={3}>
              <Button
                bg={buttonBackgroundColor}
                textColor={buttonTextColor}
                onClick={() => {
                  onClose();
                  addTool(AnalysisTools.FREQUENCY);
                }}
              >
                Frequency
              </Button>
              <Button
                bg={buttonBackgroundColor}
                textColor={buttonTextColor}
                onClick={() => {
                  onClose();
                  addTool(AnalysisTools.FRIEDMANN);
                }}
              >
                Friedmann
              </Button>
              <Button
                bg={buttonBackgroundColor}
                textColor={buttonTextColor}
                onClick={() => {
                  onClose();
                  addTool(AnalysisTools.KASISKI);
                }}
              >
                Kasiski
              </Button>
              <Button
                bg={buttonBackgroundColor}
                textColor={buttonTextColor}
                onClick={() => {
                  onClose();
                  addTool(AnalysisTools.TABLE);
                }}
              >
                Table
              </Button>
              <Button
                bg={buttonBackgroundColor}
                textColor={buttonTextColor}
                onClick={() => {
                  onClose();
                  addTool(AnalysisTools.SUBSTITUTION);
                }}
              >
                Substitution
              </Button>
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>

      <SimpleGrid gap={6}>
        {tools.map((v, k) => {
          if (v === AnalysisTools.UNSPECIFIED) {
            return null;
          }
          return (
            <AnalysisToolSwitch
              key={k}
              tool={v}
              onClose={() => {
                removeTool(k);
              }}
            />
          );
        })}

        <Card borderColor='transparent'>
          <Center width='100%'>
            <AddButton
              backgroundColor={iconBackgroundColor}
              iconColor={iconColor}
              onClick={onOpen}
            />
          </Center>
        </Card>
      </SimpleGrid>
    </>
  );
};

AnalysisToolsAndSelect.defaultProps = {
  buttonBackgroundColor: 'uiBorder',
  buttonTextColor: 'black',
  iconColor: 'white',
};
