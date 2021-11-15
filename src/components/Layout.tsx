import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({children} : LayoutProps) {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        {children}
      </Flex>
    </Flex>
  );
}

export default Layout;
