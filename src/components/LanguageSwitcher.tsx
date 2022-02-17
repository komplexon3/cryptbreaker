import i18n from '@/i18n';
import { Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const toggleLng = () => {
  const changeTo = i18n.resolvedLanguage === 'en' ? 'de' : 'en';
  i18n.changeLanguage(changeTo);
};

export const LanguageSwitcher = () => {
  const { t } = useTranslation();
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        toggleLng();
      }}
    >
      {t('toggleLanguage')}
    </Button>
  );
};
