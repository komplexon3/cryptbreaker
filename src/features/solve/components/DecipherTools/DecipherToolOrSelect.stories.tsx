// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DecipherTools } from './Decipher.ds';
import DecipherToolOrSelect from './DecipherToolOrSelect';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Decipher Tool Or Select',
  component: DecipherToolOrSelect,
  args: {
    text: 'hello',
    setDecipheredText: (s) => {},
  },
} as ComponentMeta<typeof DecipherToolOrSelect>;

const Template: ComponentStory<typeof DecipherToolOrSelect> = (args) => (
  <DecipherToolOrSelect {...args} />
);

export const Basic = Template.bind({});
