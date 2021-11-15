import { Flex, Text } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationsBox } from "./NotificationsBox";
import { SearchBox } from "./SearchBox";
import { UserProfile } from "./UserProfile";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Logo/>
      <SearchBox />

      <Flex align="center" ml="auto">
        <NotificationsBox />
        <UserProfile />
      </Flex>
    </Flex>
  );
}
