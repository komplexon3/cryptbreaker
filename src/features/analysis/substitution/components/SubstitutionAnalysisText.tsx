import { Text } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { useSubstitutionAnlaysisElementReference } from '../hooks';

interface SubstitutionAnalysisTextProps {
  text: string;
}

export const SubstitutionAnalysisText: FC<SubstitutionAnalysisTextProps> = ({ text }) => {
  return (
    <Text
      style={{ wordWrap: 'break-word', maxWidth: '100%' }}
      fontFamily={'monospace'}
      fontSize={'1rem'}
    >
      {text.split('').map((v, i) => (
        <SubstitutionAnalysisItem
          key={i} // okay to use index as key as the list is never mutated or reordered
          character={v}
        />
      ))}
    </Text>
  );
};

const SubstitutionAnalysisItem: FC<{ character: string }> = ({ character }) => {
  const { cipherTextCharacter, plainTextCharacter, isMapped, enabled, onFocusEnter, onFocusLeave } =
    useSubstitutionAnlaysisElementReference(character);

  const element = (
    <span
      style={{ color: isMapped ? 'black' : '#CBD5E0' }}
      onMouseEnter={(e) => {
        e.preventDefault();
        onFocusEnter();
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        onFocusLeave();
      }}
    >
      {isMapped ? plainTextCharacter : cipherTextCharacter}
    </span>
  );
  return enabled ? <span style={{ backgroundColor: '#F6E05E' }}>{element}</span> : element;
};
