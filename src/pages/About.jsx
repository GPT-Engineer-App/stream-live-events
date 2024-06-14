import { Box, Text, Heading, Image } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <Heading as="h2" size="xl" mb={4}>About Camthis</Heading>
    <Text fontSize="lg" mb={6}>Camthis is designed for musicians who want to be more accessible and earn more money by streaming live events from multiple angles with great audio quality.</Text>
    <Box boxSize="lg">
      <Image src="/images/about-image.jpg" alt="About Camthis" />
    </Box>
  </Box>
);

export default About;