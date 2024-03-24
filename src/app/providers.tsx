"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

import { theme } from "styles";

const Providers = ({ children }: { children: ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Providers;
