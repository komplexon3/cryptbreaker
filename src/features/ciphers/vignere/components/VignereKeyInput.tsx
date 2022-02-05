import { FormControl, FormErrorMessage, HStack, Input, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { verifyVignereKey } from '../utils/vignere';

interface VignereKeyInputProps {
  onChange: (v: string) => void;
}

// Note: onChange only called if current input is valid
export const VignereKeyInput: React.FC<VignereKeyInputProps> = ({ onChange }) => {
  const [inputValue, setInputValue] = useState('ABC');
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    if (!isInvalid) {
      onChange(inputValue);
    }
  }, [isInvalid, inputValue, onChange]);

  const handleChange = (v: string) => {
    setInputValue(v.toUpperCase());
    setIsInvalid(!verifyVignereKey(v));
  };

  return (
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
  );
};
