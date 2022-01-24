import { problemPath } from '../utils';
import { Center, Heading, SimpleGrid, Stack, useDisclosure } from '@chakra-ui/react';
import { ProblemTypes } from '@/data/problems';
import { useNavigate } from 'react-router-dom';
import { MenuCard, ProblemCodeModal } from '@/components';
import { useTranslation } from 'react-i18next';
import { useRandomProblem } from '@/data/problems/problems';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const randomProblem = useRandomProblem();
  const { t } = useTranslation();

  return (
    <>
      <ProblemCodeModal isOpen={isOpen} onClose={onClose} onEnter={(pcURL) => navigate(pcURL)} />
      {t('test')}
      <Stack spacing={6}>
        <SimpleGrid columns={2} spacing={10}>
          <MenuCard
            title='Random Problem'
            description='A random ciphertext to be deciphered by you'
            link={problemPath(randomProblem.cipherText, randomProblem.language)}
          />
          <MenuCard
            title='Problem Code'
            description='Enter code for a specific problem'
            onClick={onOpen}
          />
          <MenuCard
            title='Custom Problem'
            description='Decipher an arbitrary cipher text'
            link={problemPath()}
          />
          <MenuCard title='Create Problem' description='Create a new problem' link='/create' />
        </SimpleGrid>
        <Center>
          <Heading as='h2' size='2xl'>
            Problems for Ciphers
          </Heading>
        </Center>
        <SimpleGrid columns={2} spacing={10}>
          {Object.values(ProblemTypes).map((v) => (
            <MenuCard
              key={v}
              title={v.toUpperCase()}
              description={'Problems for ' + v + 'ciphers.'}
              link={'/problems/' + v}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
};
