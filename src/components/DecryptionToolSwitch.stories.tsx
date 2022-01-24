// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DecryptionTools } from '@/types';
import { DecryptionToolSwitch } from './DecryptionToolSwitch';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Decryption Tool Switch',
  component: DecryptionToolSwitch,
  argTypes: {
    tool: {
      options: [
        DecryptionTools.CEASAR,
        DecryptionTools.SUBSTITUTION,
        DecryptionTools.TABLE,
        DecryptionTools.VIGNERE,
      ],
      control: {
        type: 'radio',
        labels: {
          1: 'Ceasar',
          2: 'Substitution',
          3: 'Table',
          4: 'Vignere',
        },
      },
    },
  },
  args: {
    text: 'hello',
    tool: DecryptionTools.CEASAR,
    setDecipheredText: (s) => {},
  },
} as ComponentMeta<typeof DecryptionToolSwitch>;

const Template: ComponentStory<typeof DecryptionToolSwitch> = (args) => (
  <DecryptionToolSwitch {...args} />
);

export const Ceasar = Template.bind({});
