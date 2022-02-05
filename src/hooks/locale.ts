import i18n from '@/i18n';
import { useEffect, useState } from 'react';

/**
 * useLng provides the current language
 * Will not change if the language is changed - unless rerendered.
 * @returns string
 */
export const useLng = () => {
  const [lng, setLng] = useState(i18n.resolvedLanguage);
  useEffect(() => {
    setLng(i18n.resolvedLanguage);
  }, []);
  return lng;
};
