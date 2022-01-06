import {
  VStack,
  Text,
  Grid,
  Input,
  InputLeftAddon,
  InputGroup,
  GridItem,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BasicBox } from '../../../../components/BasicBox';
import { substitutionDecrypt, verifySubstitutionKey } from '../../util';
import { DecipherProps } from './Decipher.ds';

export const SubstitutionDecipher: React.FC<DecipherProps> = ({ text, setDecipheredText }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  const [substitutionKey, setSubstitutionKey] = useState(alphabet);
  const [isFieldInvalid, setIsFieldInvalid] = useState(Array(26).fill(false) as boolean[]);
  const [isInvalidSubstitution, setIsInvalidSubstitution] = useState(false);

  useEffect(() => {
    const substitutionKeyString = substitutionKey.join('').toLocaleLowerCase();
    const valid = verifySubstitutionKey(substitutionKeyString);
    setIsInvalidSubstitution(!valid);
    if (valid) {
      setDecipheredText(substitutionDecrypt(text, substitutionKeyString));
    }
  }, [substitutionKey, text, setDecipheredText]);

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
    <BasicBox>
      <VStack>
        <Text>Substitution Decipher</Text>
        <FormControl isInvalid={isInvalidSubstitution}>
          <Grid autoFlow='column' templateRows='repeat(7, 1fr)' gap='4'>
            {alphabet.map((v, i) => (
              <GridItem key={i}>
                <FormControl isInvalid={isFieldInvalid[i]}>
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
              </GridItem>
            ))}
          </Grid>
          {isInvalidSubstitution && (
            <FormErrorMessage>
              The entered key isn't a permutation of the alphabet. Make sure you don't have any
              duplicates.{' '}
            </FormErrorMessage>
          )}
        </FormControl>
      </VStack>
    </BasicBox>
  );
};

export default SubstitutionDecipher;
