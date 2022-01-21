import i18n from '@/i18n';
import { Button } from '@chakra-ui/react';

const toggleLng = () => {
  const changeTo = i18n.resolvedLanguage === 'en' ? 'de' : 'en';
  i18n.changeLanguage(changeTo);
};

export const LanguageSwitcher = () => (
  <Button
    onClick={(e) => {
      e.preventDefault();
      toggleLng();
    }}
  >
    Toggle
  </Button>
);
