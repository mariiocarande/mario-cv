import React, { ReactElement } from 'react';
import { FaTwitter, FaTwitch, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Button, Box, Flex, Heading, HStack, Image, useColorModeValue, Link } from '@chakra-ui/react';

const Home: React.FC = () => {
    const colorMode = useColorModeValue("gray.300", "gray.700");
    const renderButton = (color: string, icon: ReactElement, socialMediaText: string, url: string) => (
      <Link isExternal href={url} style={{textDecoration : 'none'}}>
        <Button colorScheme={color} leftIcon={icon}>
          {socialMediaText}
        </Button>
      </Link>
    );

    return (
      <Flex>
          <Flex alignItems="center" background={colorMode} direction="column" p={12} rounded={6}>
            <Heading 
              isTruncated 
              as="h2"
              mb="5" 
              size="3xl"
            >
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
              {renderButton("linkedin",<FaLinkedinIn />,"LinkedIn","https://bit.ly/3GxMld5")}
              {renderButton("messenger",<FaGithub />,"Github","https://bit.ly/3w5aFhx")}
              {renderButton("twitter",<FaTwitter />,"Twitter","https://bit.ly/3bmBwMD")}
              {renderButton("purple",<FaTwitch />,"Twitch","https://bit.ly/3GCFkYe")}
            </HStack>
          </Flex>
      </Flex>
    );
};

export default Home;
