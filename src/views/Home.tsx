import React, { ReactElement, useState, useEffect } from "react";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  Button,
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  useColorModeValue,
  Link,
  Spinner,
} from "@chakra-ui/react";

import profilePicture from "../assets/img/profile-picture.jpg";

const Home: React.FC = () => {
  const [loader, setLoader] = useState<boolean>(true);

  const colorMode = useColorModeValue("gray.300", "gray.700");
  const renderButton = (
    color: string,
    icon: ReactElement,
    socialMediaText: string,
    url: string
  ) => (
    <Link isExternal href={url} style={{ textDecoration: "none" }}>
      <Button colorScheme={color} leftIcon={icon}>
        {socialMediaText}
      </Button>
    </Link>
  );

  useEffect(() => {
    setTimeout(() => setLoader(false), 1000);
  }, []);

  const displayBody = () => {
    if (loader) return <Spinner size="lg" />;

    return (
      <>
        <Heading isTruncated as="h2" mb="5" size="3xl">
          Hi welcome!
        </Heading>

        <Image
          alt="profilePicture"
          borderRadius="full"
          boxSize="150px"
          loading="lazy"
          marginBottom="30px"
          src={profilePicture}
        />
        <Box h="180px" w="450px">
          {`I'm Mario Carande Scarafía I'm a front-end developer actually working with ReactJS.\n
            I like learning about new technologies and working with teams that know how to follow good practices.\n 
            I worked on NimbleLA for 4 years.
            I'm now looking for new challengues.`}
        </Box>
        <HStack>
          {renderButton(
            "linkedin",
            <FaLinkedinIn />,
            "LinkedIn",
            "https://bit.ly/3GxMld5"
          )}
          {renderButton(
            "messenger",
            <FaGithub />,
            "Github",
            "https://bit.ly/3w5aFhx"
          )}
          {renderButton(
            "twitter",
            <FaTwitter />,
            "Twitter",
            "https://bit.ly/3bmBwMD"
          )}
        </HStack>
      </>
    );
  };

  return (
    <Flex>
      <Flex
        alignItems="center"
        background={colorMode}
        direction="column"
        p={12}
        rounded={6}
      >
        {displayBody()}
      </Flex>
    </Flex>
  );
};

export default Home;
