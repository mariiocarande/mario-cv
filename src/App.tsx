import React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
} from "@chakra-ui/react"

import Home from './views/Home';
import { ColorModeSwitcher } from "./ColorModeSwitcher"

export const App = () => (
    <ChakraProvider>
      <Box fontSize="xl" textAlign="center">
        <Grid minH="100vh" p={1}>
          <ColorModeSwitcher justifySelf="flex-end"/>
          <Home />
        </Grid>
      </Box>
    </ChakraProvider>
);
