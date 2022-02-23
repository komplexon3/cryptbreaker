import { alphabet } from '@/utils';
import { Center, Input, InputGroup, InputLeftAddon, SimpleGrid } from '@chakra-ui/react';
import { FC } from 'react';
import { useSubstitutionAnlaysisElementReference } from '../hooks';

export const SubstitutionAnalysisKeyInput: FC = () => {
  const alphabetArr = alphabet.toUpperCase().split('');

  return (
    <Center>
      <SimpleGrid autoFlow='column' templateRows='repeat(7, 1fr)' spacingX='8' spacingY='4'>
        {alphabetArr.map((v, i) => (
          <InputSubstitutionValue character={v} key={i} />
        ))}
      </SimpleGrid>
    </Center>
  );
};

const InputSubstitutionValue: FC<{ character: string }> = ({ character }) => {
  const { cipherTextCharacter, enabled, onFocusEnter, onSetSubstitutionValue } =
    useSubstitutionAnlaysisElementReference(character);

  return (
    <InputGroup>
      <InputLeftAddon width='3rem' justifyContent='center'>
        {cipherTextCharacter}
      </InputLeftAddon>
      <Input
        bg={enabled ? 'yellow.300' : 'white'}
        width='3rem'
        textAlign='center'
        defaultValue=''
        onFocus={(e) => {
          e.preventDefault();
          onFocusEnter();
        }}
        onChange={(e) => {
          e.preventDefault();
          // make it all upper case, only use last character
          const val = e.target.value.toUpperCase()[e.target.value.length - 1] ?? '';
          e.target.value = val;
          onSetSubstitutionValue(val);
        }}
      />
    </InputGroup>
  );
};
