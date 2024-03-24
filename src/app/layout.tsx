import { ReactNode } from "react";

import { Container, VStack } from "@chakra-ui/react";

import Providers from "./providers";

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body>
      <Providers>
        <Container minH="100vh">
          <VStack flexGrow={1} gap={0} justifyContent={{ base: "flex-start" }}>
            {children}
          </VStack>
        </Container>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
