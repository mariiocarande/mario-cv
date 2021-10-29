import React from 'react';
import { Flex, Image, useColorModeValue } from '@chakra-ui/react';

const Home: React.FC = () => {
    const colorMode = useColorModeValue("gray.200", "gray.700");

    return (
      <Flex alignItems="center" justifyContent="center">
          <Flex background={colorMode} direction="column" p={12} rounded={6}>
          <Image
            alt="Mario Carande Scarafía"
            borderRadius="full"
            boxSize="150px"
            src="https://bit.ly/3bv0Dwx"
          />
          </Flex>
      </Flex>
    );
};

export default Home;
