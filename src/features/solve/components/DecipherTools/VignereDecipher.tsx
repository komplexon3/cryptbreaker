import { HStack, VStack, Text, Input, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BasicBox } from '../../../../components/BasicBox';
import { verifyVignereKey, vignereDecrypt } from '../../util';

interface VignereDecipherProps {
  text: string;
  setDecipheredText: (s: string) => void;
}

export const VignereDecipher: React.FC<VignereDecipherProps> = ({ text, setDecipheredText }) => {
  const [inputValue, setInputValue] = useState('abc');
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    if (!isInvalid) {
      setDecipheredText(vignereDecrypt(text, inputValue));
    }
  }, [isInvalid, inputValue, setDecipheredText]);

  const handleChange = (v: string) => {
    setInputValue(v.toUpperCase());
    setIsInvalid(!verifyVignereKey(v));
    const valid = !verifyVignereKey(v);
    console.log(valid);
    console.log(v);
  };

  return (
    <BasicBox>
      <VStack>
        <HStack>
          <Text>Vignere Key</Text>
          <FormControl isInvalid={isInvalid}>
            <Input
              value={inputValue}
              onChange={(e) => {
                e.preventDefault();
                handleChange(e.target.value);
              }}
            />
            {inputValue === '' ? (
              <FormErrorMessage>Must not be empty.</FormErrorMessage>
            ) : (
              <FormErrorMessage>Must only be letters.</FormErrorMessage>
            )}
          </FormControl>
        </HStack>
      </VStack>
    </BasicBox>
  );
};

export default VignereDecipher;
