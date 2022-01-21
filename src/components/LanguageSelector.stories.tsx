// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LanguageSelector } from './LanguageSelector';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Language Selector',
  component: LanguageSelector,
} as ComponentMeta<typeof LanguageSelector>;

export const Basic: ComponentStory<typeof LanguageSelector> = () => (
  <LanguageSelector onChange={(l) => {}} />
);
