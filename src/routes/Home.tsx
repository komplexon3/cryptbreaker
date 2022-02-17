import { problemPath } from '../utils';
import { Center, Heading, SimpleGrid, Stack, useDisclosure } from '@chakra-ui/react';
import { ProblemTypes, useRandomProblem } from '@/data';
import { useNavigate } from 'react-router-dom';
import { MenuCard, ProblemCodeModal } from '@/components';
import { useTranslation } from 'react-i18next';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const randomProblem = useRandomProblem();
  const { t } = useTranslation();

  return (
    <>
      <ProblemCodeModal isOpen={isOpen} onClose={onClose} onEnter={(pcURL) => navigate(pcURL)} />
      <Stack spacing={6}>
        <SimpleGrid columns={2} spacing={10}>
          <MenuCard
            title={t('Home.RandomProblem.title')}
            description={t('Home.RandomProblem.description')}
            link={problemPath(randomProblem.cipherText, randomProblem.language)}
          />
          <MenuCard
            title={t('Home.ProblemCode.title')}
            description={t('Home.ProblemCode.description')}
            onClick={onOpen}
          />
          <MenuCard
            title={t('Home.CustomProblem.title')}
            description={t('Home.CustomProblem.description')}
            link={problemPath()}
          />
          <MenuCard
            title={t('Home.CreateProblem.title')}
            description={t('Home.CreateProblem.description')}
            link='/create'
          />
        </SimpleGrid>
        <Center>
          <Heading as='h2' size='2xl' textAlign='center'>
            {t('Home.cipherSpecificProblems')}
          </Heading>
        </Center>
        <SimpleGrid columns={2} spacing={10}>
          {Object.values(ProblemTypes).map((v) => (
            <MenuCard
              key={v}
              title={t(`Ciphers.${v}`)}
              description={t('Home.CipherProblems.description', {
                cipher: t(`Ciphers-InText.${v}`),
              })}
              link={'/problems/' + v}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
};
