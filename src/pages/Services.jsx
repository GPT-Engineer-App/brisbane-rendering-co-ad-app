import { Box, Heading, Text } from "@chakra-ui/react";

const Services = () => {
  return (
    <Box>
      <Heading>Our Services</Heading>
      <Text>Brisbane Rendering offers a comprehensive range of rendering services, including:</Text>
      <Heading as="h2" size="xl" mt={8}>
        Exterior Rendering
      </Heading>
      <Text>Transform the exterior of your property with our professional rendering services. We use high-quality materials and techniques to create a durable, attractive finish that enhances your home's curb appeal and protects it from the elements.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Interior Rendering
      </Heading>
      <Text>Elevate your interior spaces with our expert interior rendering services. From feature walls to complete room makeovers, we can help you achieve the perfect look and feel for your home or business.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Texture Coating
      </Heading>
      <Text>Add depth and character to your walls with our texture coating services. We offer a variety of textures and finishes to suit your style and preferences, from smooth and subtle to bold and dramatic.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Feature Walls
      </Heading>
      <Text>Create a stunning focal point in any room with our feature wall rendering. We can design and install custom feature walls that showcase your unique style and complement your interior décor.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Remedial Repairs
      </Heading>
      <Text>If your existing render is damaged or in need of repair, our team can help. We provide expert remedial repair services to restore the integrity and appearance of your rendered surfaces.</Text>
    </Box>
  );
};

export default Services;
