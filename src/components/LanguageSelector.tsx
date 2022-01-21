import { ProblemLanguages } from '@/data';
import { languages, useLng } from '@/i18n';
import { Select } from '@chakra-ui/react';

interface LanguageSelectorProbs {
  onChange: (l: ProblemLanguages) => void;
  size?: string;
  maxWidth?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProbs> = ({ onChange, size, maxWidth }) => {
  const lng = useLng();
  return (
    <Select
      defaultValue={lng}
      onChange={(e) => {
        e.preventDefault();
        onChange(e.target.value as ProblemLanguages);
      }}
      size={size}
      maxWidth={maxWidth}
    >
      {Object.entries(languages).map(([k, v]) => (
        <option key={k} value={k}>
          {v.nativeName}
        </option>
      ))}
    </Select>
  );
};

LanguageSelector.defaultProps = {
  maxWidth: '10rem',
};
