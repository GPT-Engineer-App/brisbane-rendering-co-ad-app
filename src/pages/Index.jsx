import React from "react";
import { Box, Button, Heading, Text, VStack, Image, SimpleGrid } from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";
import { FaQuoteLeft, FaPhone, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {}
      <Box bgImage="url('https://i.ebayimg.com/images/g/oVQAAOSwxzxkDPGX/s-l800.webp')" bgPosition="center" bgRepeat="no-repeat" bgSize="cover" h={["40vh", "60vh"]} display="flex" alignItems="center" justifyContent="center" textAlign="center" color="white">
        <VStack spacing={6}>
          <Heading as="h1" size="2xl">
            Brisbane Rendering - Quality You Can Trust
          </Heading>
          <Text fontSize="xl">Rendering Services for All Types of Projects</Text>
          <Button colorScheme="blue" size="lg">
            Get a Free Quote
          </Button>
        </VStack>
      </Box>

      {}
      <Box maxWidth="1200px" margin="auto" padding={8}>
        <Heading textAlign="center" mb={8}>
          Our Services
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          <Box>
            <Image src="exterior.jpg" alt="Exterior Rendering" borderRadius="md" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Exterior Rendering
            </Heading>
            <Text>Transform the exterior of your property with our professional rendering services.</Text>
          </Box>
          <Box>
            <Image src="interior.jpg" alt="Interior Rendering" borderRadius="md" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Interior Rendering
            </Heading>
            <Text>Elevate your interior spaces with our expert interior rendering services.</Text>
          </Box>
          <Box>
            <Image src="texture.jpg" alt="Texture Coating" borderRadius="md" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Texture Coating
            </Heading>
            <Text>Add depth and character to your walls with our texture coating services.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {}
      <Box bg="gray.100" py={16}>
        <Box maxWidth="1200px" margin="auto">
          <Heading textAlign="center" mb={8}>
            Why Choose Us?
          </Heading>
          <SimpleGrid columns={[1, 2, 4]} spacing={8} textAlign="center">
            <Box>
              <Heading as="h3" size="lg">
                15+ Years Experience
              </Heading>
            </Box>
            <Box>
              <Heading as="h3" size="lg">
                Quality Workmanship
              </Heading>
            </Box>
            <Box>
              <Heading as="h3" size="lg">
                Competitive Pricing
              </Heading>
            </Box>
            <Box>
              <Heading as="h3" size="lg">
                Excellent Service
              </Heading>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      {}
      <Box maxWidth="1200px" margin="auto" mt={16} mb={8}>
        <Heading textAlign="center" mb={8}>
          What Our Clients Say
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <Text fontSize="xl" mb={4}>
              "Brisbane Rendering did an amazing job on our home's exterior. The team was professional, efficient, and the result exceeded our expectations. We highly recommend their services!"
            </Text>
            <Text fontWeight="bold">John Doe</Text>
          </Box>
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <Text fontSize="xl" mb={4}>
              "We are thrilled with the interior rendering work done by Brisbane Rendering. The team's attention to detail and craftsmanship have transformed our living room into a beautiful, inviting space. Thank you!"
            </Text>
            <Text fontWeight="bold">Jane Smith</Text>
          </Box>
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <Text fontSize="xl" mb={4}>
              "Brisbane Rendering provided exceptional service from start to finish. They helped us choose the perfect texture for our feature wall and delivered outstanding results. We couldn't be happier with their work!"
            </Text>
            <Text fontWeight="bold">Mark Johnson</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {}
      <Box bg="blue.600" py={16} textAlign="center">
        <Box maxWidth="600px" margin="auto" color="white">
          <Heading as="h2" size="xl" mb={4}>
            Ready to Transform Your Space?
          </Heading>
          <Text fontSize="xl" mb={8}>
            Contact us today for a free, no-obligation quote!
          </Text>
          <Button colorScheme="white" size="lg">
            Get Started
          </Button>
        </Box>
      </Box>

      {}
      <Box maxWidth="800px" margin="auto" my={16}>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default Index;
