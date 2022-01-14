// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AnalysisTools } from '@/types';
import { AnalysisToolSwitch } from './AnalysisToolSwitch';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Analysis Tool Switch',
  component: AnalysisToolSwitch,
  argTypes: {
    tool: {
      options: [
        AnalysisTools.FREQUENCY,
        AnalysisTools.FRIEDMANN,
        AnalysisTools.KASISKI,
        AnalysisTools.TABLE,
      ],
      control: {
        type: 'radio',
        labels: {
          1: 'Frequency',
          2: 'Friedmann',
          3: 'Kasiski',
          4: 'Table',
        },
      },
    },
  },
  args: {
    text: 'hello',
    tool: AnalysisTools.FREQUENCY,
  },
} as ComponentMeta<typeof AnalysisToolSwitch>;

const Template: ComponentStory<typeof AnalysisToolSwitch> = (args) => (
  <AnalysisToolSwitch {...args} />
);

export const Ceasar = Template.bind({});
