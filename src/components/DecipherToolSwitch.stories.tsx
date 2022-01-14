// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DecipherTools } from '@/types';
import { DecipherToolSwitch } from './DecipherToolSwitch';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Decipher Tool Switch',
  component: DecipherToolSwitch,
  argTypes: {
    tool: {
      options: [
        DecipherTools.CEASAR,
        DecipherTools.SUBSTITUTION,
        DecipherTools.TABLE,
        DecipherTools.VIGNERE,
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
    tool: DecipherTools.CEASAR,
    setDecipheredText: (s) => {},
  },
} as ComponentMeta<typeof DecipherToolSwitch>;

const Template: ComponentStory<typeof DecipherToolSwitch> = (args) => (
  <DecipherToolSwitch {...args} />
);

export const Ceasar = Template.bind({});
