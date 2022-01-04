import { HStack, VStack, Text, Grid, Input, InputLeftAddon, InputGroup } from '@chakra-ui/react';
import { useState } from 'react';
import { BasicBox } from '../../../../components/BasicBox';
import { DecipherProps } from './Decipher.ds';

export const SubstitutionDecipher: React.FC<DecipherProps> = ({ text, setDecipheredText }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  const [substitutionKey, setSubstitutionKey] = useState(alphabet);
  return (
    <BasicBox>
      <VStack>
        <Text>Substitution Decipher</Text>
        <Grid templateColumns='repeat(4,1fr)' gap='4'>
          {alphabet.map((v, i) => (
            <InputGroup>
              <InputLeftAddon width='3rem' justifyContent='center'>
                {v}
              </InputLeftAddon>
              <Input
                width='3rem'
                textAlign='center'
                defaultValue={v}
                onChange={(e) =>
                  setSubstitutionKey(
                    (() => {
                      substitutionKey[i] = e.target.value;
                      return substitutionKey;
                    })()
                  )
                }
              />
            </InputGroup>
          ))}
        </Grid>
      </VStack>
    </BasicBox>
  );
};

export default SubstitutionDecipher;
