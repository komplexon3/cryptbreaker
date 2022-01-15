// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TableDimensionInput } from './TableDimensionInput';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Table Dimension Input',
  component: TableDimensionInput,
} as ComponentMeta<typeof TableDimensionInput>;

const Template: ComponentStory<typeof TableDimensionInput> = (args) => (
  <TableDimensionInput {...args} />
);

export const Basic = Template.bind({});
