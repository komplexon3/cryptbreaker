import { LanguageSwitcher } from '@/components';
import { Center, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { t } = useTranslation();
  return (
    <>
      <LanguageSwitcher />
      <Center w='100%'>
        <Link to='/'>
          <Heading as='h1' size='4xl' marginY='10' width='100%' textAlign='center'>
            {t('Header')}
          </Heading>
        </Link>
      </Center>
    </>
  );
};
