import { HStack, VStack, Text, Input, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Card } from '@/components';
import { verifyVignereKey, vignereDecrypt } from '../utils/vignere';
import { DecipherProps } from '@/types';

export const VignereDecipher: React.FC<DecipherProps> = ({ text, setDecipheredText, onClose }) => {
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
    <Card title='Vignere Key Entry' onClose={onClose}>
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
    </Card>
  );
};
