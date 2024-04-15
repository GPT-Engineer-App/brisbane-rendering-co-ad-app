import { Box, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";

const Gallery = () => {
  return (
    <Box>
      <Heading>Our Gallery</Heading>
      <Text>Check out some of our recent rendering projects:</Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={8}>
        <Image src="https://i.ebayimg.com/images/g/yc4AAOSwDMxkDPGY/s-l800.webp" alt="Rendered House 1" borderRadius="md" />
        <Image src="https://i.ebayimg.com/images/g/L6AAAOSwkvxkDPGZ/s-l800.webp" alt="Rendered House 2" borderRadius="md" />
        <Image src="https://i.ebayimg.com/images/g/oVQAAOSwxzxkDPGX/s-l800.webp" alt="Rendered House 3" borderRadius="md" />
      </SimpleGrid>
    </Box>
  );
};

export default Gallery;
