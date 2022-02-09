import { Text } from '@chakra-ui/react';
import { useKasiskiContext } from '../contexts';
import { KasiskiItem } from './KasiskiItem';

export const KasinskiText = () => {
  const { kasiskiItems } = useKasiskiContext();

  return (
    <Text
      style={{ wordWrap: 'break-word', maxWidth: '100%' }}
      fontFamily={'monospace'}
      fontSize={'1rem'}
    >
      {kasiskiItems.map((v, i) => (
        <KasiskiItem
          key={i} // okay to use index as key as the list is never mutated or reordered
          kasiskiItem={v}
        />
      ))}
    </Text>
  );
};
