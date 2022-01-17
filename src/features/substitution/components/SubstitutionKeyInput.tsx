import {
  Input,
  InputLeftAddon,
  InputGroup,
  FormControl,
  FormErrorMessage,
  Center,
  SimpleGrid,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { verifySubstitutionKey } from '../utils/substitution';

interface SubstitutionKeyInputProps {
  onChange: (key: string) => void;
}

export const SubstitutionKeyInput: React.FC<SubstitutionKeyInputProps> = ({ onChange }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  const [substitutionKey, setSubstitutionKey] = useState(alphabet);
  const [isFieldInvalid, setIsFieldInvalid] = useState(Array(26).fill(false) as boolean[]);
  const [isInvalidSubstitution, setIsInvalidSubstitution] = useState(false);

  useEffect(() => {
    const substitutionKeyString = substitutionKey.join('').toLocaleLowerCase();
    const valid = verifySubstitutionKey(substitutionKeyString);
    setIsInvalidSubstitution(!valid);
    if (valid) {
      onChange(substitutionKeyString);
    }
  }, [substitutionKey, onChange]);

  const handleChange = (value: string, index: number) => {
    const match = value.match('[a-zA-Z]');
    isFieldInvalid[index] = !match || match.length !== 1;
    setIsFieldInvalid(() => {
      // verify that the entered value is exactly one character from the alphabet
      return [...isFieldInvalid];
    });
    // only change substitution key if entered value is valid
    if (!isFieldInvalid[index]) {
      setSubstitutionKey(
        (() => {
          substitutionKey[index] = value;
          return [...substitutionKey];
        })()
      );
    }
  };

  return (
    <FormControl isInvalid={isInvalidSubstitution}>
      <Center>
        <SimpleGrid autoFlow='column' templateRows='repeat(7, 1fr)' spacingX='8' spacingY='4'>
          {alphabet.map((v, i) => (
            <FormControl key={i} isInvalid={isFieldInvalid[i]}>
              <InputGroup>
                <InputLeftAddon width='3rem' justifyContent='center'>
                  {v}
                </InputLeftAddon>
                <Input
                  width='3rem'
                  textAlign='center'
                  defaultValue={v}
                  onChange={(e) => {
                    e.preventDefault();
                    // make it all upper case
                    const val = e.target.value.toUpperCase();
                    e.target.value = val;
                    handleChange(val, i);
                  }}
                />
              </InputGroup>
            </FormControl>
          ))}
        </SimpleGrid>
      </Center>
      {isInvalidSubstitution && (
        <FormErrorMessage>
          The entered key isn't a permutation of the alphabet. Make sure you don't have any
          duplicates.{' '}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};
