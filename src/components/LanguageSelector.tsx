import { ProblemLanguages } from '@/data';
import { languages } from '@/i18n';
import { Select } from '@chakra-ui/react';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

interface LanguageSelectorProbs {
  onChange: (l: ProblemLanguages) => void;
  defaultValue: 'en' | 'de';
  size?: string;
  maxWidth?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProbs> = ({
  onChange,
  defaultValue,
  size,
  maxWidth,
}) => {
  const { t } = useTranslation();
  return (
    <Select
      defaultValue={defaultValue}
      onChange={(e) => {
        e.preventDefault();
        onChange(e.target.value as ProblemLanguages);
      }}
      size={size}
      maxWidth={maxWidth}
    >
      <option value='en'>{t('Languages.English')}</option>
      <option value='de'>{t('Languages.German')}</option>
    </Select>
  );
};

LanguageSelector.defaultProps = {
  maxWidth: '10rem',
};
