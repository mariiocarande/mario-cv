import React from "react"
import {
  Box,
  Center,
  ChakraProvider,
  Flex,
} from "@chakra-ui/react"

import Home from './views/Home';
import { ColorModeSwitcher } from "./ColorModeSwitcher"

export const App = () => (
  <ChakraProvider>
    <Flex flexDirection="column" fontSize="xl" height="100vh" p={1}>
      <Box display="flex" h="10" justifyContent="flex-end" w="100%">
        <ColorModeSwitcher />
      </Box>

      <Box h="100%">
        <Center h="100%">
          <Home />
        </Center>
      </Box>
    </Flex>
  </ChakraProvider>
);
