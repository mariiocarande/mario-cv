import React from 'react';
import { FaTwitter, FaTwitch, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Button, Flex, HStack, Image, useColorModeValue, Link } from '@chakra-ui/react';

const Home: React.FC = () => {
    const colorMode = useColorModeValue("gray.300", "gray.700");

    return (
      <Flex>
          <Flex alignItems="center" background={colorMode} direction="column" p={12} rounded={6}>
            <Image
              alt="Mario Carande Scarafía"
              borderRadius="full"
              boxSize="150px"
              marginBottom="30px"
              src="https://bit.ly/3bv0Dwx"
            />

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
