import { Box, Text, Heading, Image } from "@chakra-ui/react";

const Features = () => (
  <Box p={4}>
    <Heading as="h2" size="xl" mb={4}>Features</Heading>
    <Text fontSize="lg" mb={6}>Camthis offers a range of features to make live streaming easy and effective.</Text>
    <Box boxSize="lg">
      <Image src="/images/features-image.jpg" alt="Camthis Features" />
    </Box>
  </Box>
);

export default Features;