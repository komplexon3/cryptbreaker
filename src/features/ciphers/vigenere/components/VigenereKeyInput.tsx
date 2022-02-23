import { FormControl, FormErrorMessage, HStack, Input, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { verifyVigenereKey } from '../utils/vigenere';

interface VigenereKeyInputProps {
  onChange: (v: string) => void;
}

// Note: onChange only called if current input is valid
export const VigenereKeyInput: React.FC<VigenereKeyInputProps> = ({ onChange }) => {
  const [inputValue, setInputValue] = useState('ABC');
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    if (!isInvalid) {
      onChange(inputValue);
    }
  }, [isInvalid, inputValue, onChange]);

  const handleChange = (v: string) => {
    setInputValue(v.toUpperCase());
    setIsInvalid(!verifyVigenereKey(v));
  };

  return (
    <VStack>
      <HStack>
        <Text>Vigenere Key</Text>
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
