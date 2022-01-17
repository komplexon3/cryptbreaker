// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ShareProblemCard } from './ShareProblemCard';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Share Problem Card',
  component: ShareProblemCard,
} as ComponentMeta<typeof ShareProblemCard>;

const Template: ComponentStory<typeof ShareProblemCard> = (args) => <ShareProblemCard {...args} />;

export const NoText = Template.bind({});
NoText.args = {
  cipherText: '',
};

export const WithText = Template.bind({});
WithText.args = {
  cipherText: 'Hello - you can copy this.',
};
