import { Box, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";

const Services = () => {
  return (
    <Box maxWidth="1200px" margin="auto" padding={8}>
      <Heading textAlign="center" mb={8}>
        Our Services
      </Heading>
      <Text fontSize="xl" textAlign="center" mb={12}>
        Brisbane Rendering offers a comprehensive range of rendering services to transform your property.
      </Text>
      <SimpleGrid columns={[1, 2]} spacing={8}>
        <Box>
          <Image src="exterior.jpg" alt="Exterior Rendering" mb={4} borderRadius="md" />
          <Heading as="h3" size="xl" mb={4}>
            Exterior Rendering
          </Heading>
          <Text fontSize="lg">Transform the exterior of your property with our professional rendering services. We use high-quality materials and techniques to create a durable, attractive finish that enhances your home's curb appeal and protects it from the elements.</Text>
        </Box>
        <Box>
          <Image src="interior.jpg" alt="Interior Rendering" mb={4} borderRadius="md" />
          <Heading as="h3" size="xl" mb={4}>
            Interior Rendering
          </Heading>
          <Text fontSize="lg">Elevate your interior spaces with our expert interior rendering services. From feature walls to complete room makeovers, we can help you achieve the perfect look and feel for your home or business.</Text>
        </Box>
        <Box>
          <Image src="texture.jpg" alt="Texture Coating" mb={4} borderRadius="md" />
          <Heading as="h3" size="xl" mb={4}>
            Texture Coating
          </Heading>
          <Text fontSize="lg">Add depth and character to your walls with our texture coating services. We offer a variety of textures and finishes to suit your style and preferences, from smooth and subtle to bold and dramatic.</Text>
        </Box>
        <Box>
          <Image src="feature.jpg" alt="Feature Walls" mb={4} borderRadius="md" />
          <Heading as="h3" size="xl" mb={4}>
            Feature Walls
          </Heading>
          <Text fontSize="lg">Create a stunning focal point in any room with our feature wall rendering. We can design and install custom feature walls that showcase your unique style and complement your interior décor.</Text>
        </Box>
        <Box>
          <Image src="repair.jpg" alt="Remedial Repairs" mb={4} borderRadius="md" />
          <Heading as="h3" size="xl" mb={4}>
            Remedial Repairs
          </Heading>
          <Text fontSize="lg">If your existing render is damaged or in need of repair, our team can help. We provide expert remedial repair services to restore the integrity and appearance of your rendered surfaces.</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Services;
