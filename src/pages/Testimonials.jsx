import { Box, Heading, Text, Avatar, VStack } from "@chakra-ui/react";

const Testimonials = () => {
  return (
    <Box>
      <Heading>What Our Clients Say</Heading>
      <VStack spacing={8} mt={8} align="stretch">
        <Box bg="gray.100" p={6} borderRadius="md">
          <Text fontSize="xl" mb={4}>
            "Brisbane Rendering did an amazing job on our home's exterior. The team was professional, efficient, and the result exceeded our expectations. We highly recommend their services!"
          </Text>
          <Avatar name="John Doe" src="" />
          <Text fontWeight="bold">John Doe</Text>
        </Box>
        <Box bg="gray.100" p={6} borderRadius="md">
          <Text fontSize="xl" mb={4}>
            "We are thrilled with the interior rendering work done by Brisbane Rendering. The team's attention to detail and craftsmanship have transformed our living room into a beautiful, inviting space. Thank you!"
          </Text>
          <Avatar name="Jane Smith" src="" />
          <Text fontWeight="bold">Jane Smith</Text>
        </Box>
        <Box bg="gray.100" p={6} borderRadius="md">
          <Text fontSize="xl" mb={4}>
            "Brisbane Rendering provided exceptional service from start to finish. They helped us choose the perfect texture for our feature wall and delivered outstanding results. We couldn't be happier with their work!"
          </Text>
          <Avatar name="Mark Johnson" src="" />
          <Text fontWeight="bold">Mark Johnson</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Testimonials;
