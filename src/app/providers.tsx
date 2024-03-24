"use client";

import { ReactNode } from "react";

import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "styles";

const Providers = ({ children }: { children: ReactNode }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export default Providers;
