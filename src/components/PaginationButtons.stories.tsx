// Button.stories.ts|tsx

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PaginationButtons } from './PaginationButtons';
import { usePagination } from '@/hooks';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Pagination Buttons',
  component: PaginationButtons,
} as ComponentMeta<typeof PaginationButtons>;

export const Basic: ComponentStory<typeof PaginationButtons> = () => {
  const { page, incPage, decPage } = usePagination(5);

  return (
    <PaginationButtons page={page} numberOfPages={5} onIncrement={incPage} onDecrement={decPage} />
  );
};
