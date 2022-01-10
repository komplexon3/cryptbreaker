import React from 'react';
import { addDecorator } from '@storybook/react';
import { Center, Container } from '@chakra-ui/react';
import theme from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme: theme,
  },
};

addDecorator((storyFn) => (
  <Center>
    <Container width='48rem'>{storyFn()}</Container>
  </Center>
));
