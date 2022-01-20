import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { useEffect, useState } from 'react';

i18n.use(LanguageDetector).use(initReactI18next).use(Backend).init({
  debug: true,
  fallbackLng: 'en',
});

export const languages: { [id: string]: { nativeName: string } } = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
};

export const useLng = () => {
  // useTranslation to subscribe to language changes
  const { t } = useTranslation();
  const [lng, setLng] = useState(i18n.resolvedLanguage);
  useEffect(() => {
    setLng(i18n.resolvedLanguage);
  }, [i18n.resolvedLanguage]);
  return lng;
};

export default i18n;
