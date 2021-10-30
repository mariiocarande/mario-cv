import React from 'react';
import { FaTwitter, FaTwitch, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Button, Box, Flex, Heading, HStack, Image, useColorModeValue, Link } from '@chakra-ui/react';

const Home: React.FC = () => {
    const colorMode = useColorModeValue("gray.300", "gray.700");

    return (
      <Flex>
          <Flex alignItems="center" background={colorMode} direction="column" p={12} rounded={6}>
            <Heading as="h2" mb="5" isTruncated size="3xl">
              Hi welcome! 
            </Heading>
            <Image
              alt="Mario Carande Scarafía"
              borderRadius="full"
              boxSize="150px"
              marginBottom="30px"
              src="https://bit.ly/3bv0Dwx"
            />
            <Box h="180px" w="450px">
              {`I'm Mario Carande Scarafía I'm a front-end developer actually working with ReactJS.\n
                I like learning about new technologies and working with teams that know how to follow good practices.\n 
                I've been working with Nimble.la for 2 years.`}
            </Box>
            <HStack>
              <Button colorScheme="linkedin" leftIcon={<FaLinkedinIn />}>
                <Link isExternal href="https://bit.ly/3GxMld5">
                  LinkedIn
                </Link>
              </Button>

              <Button colorScheme="messenger" leftIcon={<FaGithub />}>
                <Link isExternal href="https://bit.ly/3w5aFhx">
                  Github
                </Link>
              </Button>

              <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
                <Link isExternal href="https://bit.ly/3bmBwMD">
                  Twitter
                </Link>
              </Button>

              <Button colorScheme="purple" leftIcon={<FaTwitch />}>
                <Link isExternal href="https://bit.ly/3GCFkYe">
                  Twitch
                </Link>
              </Button>
            </HStack>
          </Flex>
      </Flex>
    );
};

export default Home;
