// Button.stories.ts|tsx

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import MenuCard from './MenuCard';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Menu Card',
  component: MenuCard,
} as ComponentMeta<typeof MenuCard>;

export const Basic: ComponentStory<typeof MenuCard> = () => (
  <MenuCard
    title='hello'
    description='best decryption tool in the world'
    link='http://google.com'
  />
);
