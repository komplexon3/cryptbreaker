import { useEffect, useState } from 'react';

export const usePagination = (numOfPages: number, defaultValue?: number) => {
  const [page, setPage] = useState(defaultValue ?? 1);

  const incPage = () => {
    if (page < numOfPages) {
      setPage(page + 1);
    }
  };

  const decPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const onPageChange = (value: number) => {
    if (value <= numOfPages && value >= 1) {
      setPage(value);
    }
  };

  // in case numberOfPages changes and the page number is not too big
  useEffect(() => {
    if (page > numOfPages) {
      setPage(numOfPages);
    }
  }, [numOfPages, page]);

  return {
    page,
    incPage,
    decPage,
    setPage: onPageChange,
  };
};
