import { ProblemLanguages } from '@/data';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const useQueryParams = () => {
  const { search } = useLocation();
  return useMemo(() => {
    return new URLSearchParams(search);
  }, [search]);
};

export const useLanguageFromQueryParams = () => {
  const params = useQueryParams();
  return (params.get('lng') && (params.get('lng') as ProblemLanguages)) || ProblemLanguages.EN;
};
