// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DecryptionToolOrSelect } from './DecryptionToolOrSelect';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Decryption Tool Or Select',
  component: DecryptionToolOrSelect,
  args: {
    text: 'hello',
    setDecipheredText: (s) => {},
  },
} as ComponentMeta<typeof DecryptionToolOrSelect>;

const Template: ComponentStory<typeof DecryptionToolOrSelect> = (args) => (
  <DecryptionToolOrSelect {...args} />
);

export const Basic = Template.bind({});
