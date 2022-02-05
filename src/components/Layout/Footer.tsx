import { Box, Container, Image, Stack, Text } from '@chakra-ui/react';

const ethLogoPath = '/assets/logos/ethz_logo_black.svg';
const inkfLogoPath = '/assets/logos/eth_dinfk_logo_pos.png';
const abzLogoPath = '/assets/logos/abz_web_logo.png';

export const Footer = () => {
  return (
    <Box as='footer' marginTop='10' bg={'gray.50'} color={'gray.700'}>
      <Container
        as={Stack}
        py={6}
        direction={{ base: 'column', md: 'row' }}
        spacing={8}
        justify={{ base: 'center' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Image src={ethLogoPath} width={'10em'} />
        <Image src={abzLogoPath} width={'10em'} />
        <Image src={inkfLogoPath} width={'10em'} />
      </Container>
      <Box borderTopWidth={1} borderStyle={'solid'} borderColor={'gray.200'}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>
            © Ausbildungs- und Beratungszentrum für Informatikunterricht 2021. All rights reserved.
          </Text>
          <Text>
            Created by <a href='https://www.linkedin.com/in/marc-widmer-k3/'>Marc Widmer</a>
          </Text>
        </Container>
      </Box>
    </Box>
  );
};
