// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AnalysisToolsAndSelect from './AnalysisToolsAndSelect';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Analysis Tools And Select',
  component: AnalysisToolsAndSelect,
  args: {
    text: 'hello',
  },
} as ComponentMeta<typeof AnalysisToolsAndSelect>;

const Template: ComponentStory<typeof AnalysisToolsAndSelect> = (args) => (
  <AnalysisToolsAndSelect {...args} />
);

export const Basic = Template.bind({});
