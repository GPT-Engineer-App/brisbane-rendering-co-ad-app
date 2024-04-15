import React from "react";
import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";
import { FaQuoteLeft, FaPhone, FaEnvelope } from "react-icons/fa";

const Index = () => {
  

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center" color="blue.500">
          Brisbane Rendering - Quality You Can Trust
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Rendering Services for All Types of Projects
        </Text>
        <Image src="https://i.ebayimg.com/images/g/oVQAAOSwxzxkDPGX/s-l800.webp" alt="Rendered House" borderRadius="md" />
        <ContactForm />
        <Box textAlign="center">
          <Heading as="h3" size="lg" mb={4}>
            Contact Us
          </Heading>
          <Text>
            <FaPhone /> Phone: 0450 044 372
          </Text>
          <Text>
            <FaEnvelope /> Email: brisbanerendering@gmail.com
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
