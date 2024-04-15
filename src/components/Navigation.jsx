import { Box, Flex, Spacer, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box bg="white" py={4} position={isSticky ? "fixed" : "static"} top={0} left={0} right={0} zIndex={999} boxShadow={isSticky ? "md" : "none"} transition="all 0.3s">
      <Flex maxW="container.lg" mx="auto" align="center">
        <Link as={RouterLink} to="/" fontWeight="bold">
          Brisbane Rendering
        </Link>
        <Spacer />
        <Link as={RouterLink} to="/about" ml={4}>
          About
        </Link>
        <Link as={RouterLink} to="/services" ml={4}>
          Services
        </Link>
        <Link as={RouterLink} to="/gallery" ml={4}>
          Gallery
        </Link>
        <Link as={RouterLink} to="/testimonials" ml={4}>
          Testimonials
        </Link>
        <Button colorScheme="blue" size="sm" ml={4}>
          Get a Quote
        </Button>
      </Flex>
    </Box>
  );
};

export default Navigation;
