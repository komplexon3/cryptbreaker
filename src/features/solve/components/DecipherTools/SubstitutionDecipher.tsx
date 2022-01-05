import {
  HStack,
  VStack,
  Text,
  Grid,
  Input,
  InputLeftAddon,
  InputGroup,
  GridItem,
  FormControl,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BasicBox } from '../../../../components/BasicBox';
import { DecipherProps } from './Decipher.ds';

export const SubstitutionDecipher: React.FC<DecipherProps> = ({ text, setDecipheredText }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  const [substitutionKey, setSubstitutionKey] = useState(alphabet);
  const [isFieldInvalid, setIsFieldInvalid] = useState(Array(26).fill(false) as boolean[]);
  const [isInvalid, setIsInvalid] = useState(false);
  return (
    <BasicBox>
      <VStack>
        <Text>Substitution Decipher</Text>
        <Grid autoFlow='column' templateRows='repeat(7, 1fr)' gap='4'>
          {alphabet.map((v, i) => (
            <GridItem key={i}>
              <FormControl isInvalid={isFieldInvalid[i] || isInvalid}>
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
                      const val = e.target.value.toUpperCase();
                      e.target.value = val;
                      const match = val.match('[a-zA-Z]');
                      isFieldInvalid[i] = !match || match.length != 1;
                      setIsFieldInvalid([...isFieldInvalid]);
                      if (isFieldInvalid[i]) {
                        setSubstitutionKey(
                          (() => {
                            substitutionKey[i] = val.toUpperCase();
                            return substitutionKey;
                          })()
                        );
                      }
                    }}
                  />
                </InputGroup>
              </FormControl>
            </GridItem>
          ))}
        </Grid>
        {isInvalid && (
          <FormErrorMessage>
            The entered key isn't a permutation of the alphabet. Make sure you don't have any
            duplicates.{' '}
          </FormErrorMessage>
        )}
        <Button onClick={() => setIsInvalid(!isInvalid)}>Toggle Invalid</Button>
      </VStack>
    </BasicBox>
  );
};

export default SubstitutionDecipher;
