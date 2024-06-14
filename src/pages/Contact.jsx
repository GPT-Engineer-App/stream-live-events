import { Box, Text, Heading, Image } from "@chakra-ui/react";

const Contact = () => (
  <Box p={4}>
    <Heading as="h2" size="xl" mb={4}>Contact Us</Heading>
    <Text fontSize="lg" mb={6}>Get in touch with us to learn more about Camthis and how it can help you.</Text>
    <Box boxSize="lg">
      <Image src="/images/contact-image.jpg" alt="Contact Camthis" />
    </Box>
  </Box>
);

export default Contact;