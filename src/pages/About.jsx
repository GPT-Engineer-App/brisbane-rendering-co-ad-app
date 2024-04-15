import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box>
      <Heading>About Us</Heading>
      <Text>Brisbane Rendering is a leading rendering company based in Brisbane, Australia. With over 15 years of experience, we specialize in providing high-quality rendering services for residential and commercial projects. Our team of skilled professionals is dedicated to delivering exceptional results that exceed our clients' expectations.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Our Services
      </Heading>
      <Text>We offer a wide range of rendering services, including:</Text>
      <ul>
        <li>Exterior Rendering</li>
        <li>Interior Rendering</li>
        <li>Texture Coating</li>
        <li>Feature Walls</li>
        <li>Remedial Repairs</li>
      </ul>
    </Box>
  );
};

export default About;
