// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ChakraProvider } from '@chakra-ui/react';
import VignereDecipher from './VignereDecipher';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'VignereDecipher',
  component: VignereDecipher,
} as ComponentMeta<typeof VignereDecipher>;

export const Basic: ComponentStory<typeof VignereDecipher> = () => (
  <ChakraProvider>
    <VignereDecipher
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
  officia deserunt mollit anim id est laborum.'
      setDecipheredText={(s: string) => {}}
    />
  </ChakraProvider>
);
