import { AddButton } from '../../../../components';
import { useState } from 'react';
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
import { AnalysisTools } from './Analysis.ds';
import AnalysisToolSwitch from './AnalysisToolSwitch';

interface AnalysisToolsAndSelectProps {
  text: string;
  setDecipheredText: (s: string) => void;
}

const AnalysisToolsAndSelect: React.FC<AnalysisToolsAndSelectProps> = ({
  text,
  setDecipheredText,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // value of AnalysisTools.UNSPECIFIED indicated a removed tool
  const [tools, setTools] = useState([] as AnalysisTools[]);

  const addTool = (tool: AnalysisTools) => {
    setTools([...tools, tool]);
  };

  const removeTool = (toolKey: number) => {
    if (toolKey >= tools.length || tools[toolKey] === AnalysisTools.UNSPECIFIED) {
      throw Error('toolKey %s cannot be removed as it is not registered');
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
                bg='uiBorder'
                onClick={() => {
                  onClose();
                  addTool(AnalysisTools.FREQUENCY);
                }}
              >
                Frequency
              </Button>
              <Button
                bg='uiBorder'
                onClick={() => {
                  onClose();
                  addTool(AnalysisTools.FRIEDMANN);
                }}
              >
                Friedmann
              </Button>
              <Button
                bg='uiBorder'
                onClick={() => {
                  onClose();
                  addTool(AnalysisTools.KASISKI);
                }}
              >
                Kasiski
              </Button>
              <Button
                bg='uiBorder'
                onClick={() => {
                  onClose();
                  addTool(AnalysisTools.TABLE);
                }}
              >
                Table
              </Button>
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>

      <SimpleGrid>
        {tools
          .filter((v) => v !== AnalysisTools.UNSPECIFIED)
          .map((v, k) => {
            return (
              <AnalysisToolSwitch
                key={k}
                text={text}
                tool={v}
                onClose={() => {
                  removeTool(k);
                }}
              />
            );
          })}

        <Center width='100%'>
          <AddButton onClick={onOpen} />
        </Center>
      </SimpleGrid>
    </>
  );
};

export default AnalysisToolsAndSelect;
