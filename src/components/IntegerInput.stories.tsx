// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IntegerInput } from './IntegerInput';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Integer Input',
  component: IntegerInput,
} as ComponentMeta<typeof IntegerInput>;

const Template: ComponentStory<typeof IntegerInput> = (args) => <IntegerInput {...args} />;

export const Basic = Template.bind({});
