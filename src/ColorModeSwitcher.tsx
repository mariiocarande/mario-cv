import React from "react"
import {
  useColorModeValue,
  IconButton,
  IconButtonProps,
  useColorMode,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const colorMode = useColorModeValue("gray.500", "gray.700");
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

