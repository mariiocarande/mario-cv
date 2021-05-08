import React from 'react';
import { Button, Flex, Heading, Input, useColorModeValue } from '@chakra-ui/react';

const Home: React.FC = () => {
    const colorMode = useColorModeValue("gray.200", "gray.700");

    return (
        <Flex alignItems="center" height="100vh" justifyContent="center">
            <Flex background={colorMode} direction="column" p={12} rounded={6}>
                <Heading mb={6}>
                    Log in
                </Heading>
                <Input mb={3} placeholder="mdc.mariio@gmail.com" type="email" variant="filled"/>
                <Input mb={6} placeholder="*********" type="password" variant="filled" />
                <Button colorScheme="teal">Log in</Button>
            </Flex>
        </Flex>
    );
};

export default Home;
