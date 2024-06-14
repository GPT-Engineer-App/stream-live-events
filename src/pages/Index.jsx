import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center">Easily stream live events from multiple angles</Heading>
        <Text fontSize="xl" textAlign="center">Musicians who want to be more accessible and earn more money</Text>
        <Box boxSize="sm">
          <Image src="/images/landing-image.jpg" alt="Camthis product" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;