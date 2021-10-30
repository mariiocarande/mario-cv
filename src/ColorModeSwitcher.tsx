import React from "react"
import { FaMoon, FaSun } from "react-icons/fa"
import {
  useColorModeValue,
  IconButton,
  IconButtonProps,
  useColorMode,
} from "@chakra-ui/react"

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const colorMode = useColorModeValue("gray.800", "gray.1000");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      aria-label={`Switch to ${colorMode} mode`}
      color="current"
      fontSize="lg"
      icon={<SwitchIcon />}
      marginLeft="2"
      size="md"
      variant="ghost"
      onClick={toggleColorMode}
      {...props}
    />
  );
};

