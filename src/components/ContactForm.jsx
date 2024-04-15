import React, { useState } from "react";
import { Box, Heading, Button, Input, Textarea, useToast, VStack } from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
   
   
    toast({
      title: "Quote Requested",
      description: "Your quote request has been submitted successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
   
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Box bg="gray.100" p={6} borderRadius="md">
      <Heading as="h2" size="xl" mb={4}>
        <FaQuoteLeft /> Get a Quote
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <Input placeholder="Your Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
          <Button type="submit" colorScheme="blue" size="lg">
            Request Quote
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ContactForm;