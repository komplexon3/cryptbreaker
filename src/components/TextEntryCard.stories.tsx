// Button.stories.ts|tsx

import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextEntryCard } from './TextEntryCard';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Text Entry Card',
  component: TextEntryCard,
} as ComponentMeta<typeof TextEntryCard>;

export const Basic: ComponentStory<typeof TextEntryCard> = () => (
  <TextEntryCard
    title='Text Box Entry'
    onChange={(e) => e.preventDefault()}
    placeholderText='Placeholder text'
  />
);
