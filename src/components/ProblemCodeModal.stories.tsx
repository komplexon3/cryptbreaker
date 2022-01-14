// Button.stories.ts|tsx

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProblemCodeModal from './ProblemCodeModal';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Problem Code Modal',
  component: ProblemCodeModal,
} as ComponentMeta<typeof ProblemCodeModal>;

export const Basic: ComponentStory<typeof ProblemCodeModal> = () => (
  <ProblemCodeModal
    isOpen={true}
    onClose={() => {}}
    onEnter={(pc) => {
      alert('Problem Code Entered: ' + pc);
    }}
  />
);
