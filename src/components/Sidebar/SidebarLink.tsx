import { ElementType } from "react";
import { Link as ChakraLink, Icon, Text } from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink";

interface SidebarLinkProps {
  text: string;
  icon: ElementType;
  active?: boolean;
  href: string;
}

export function SidebarLink({
  text,
  icon,
  href,
  active = false,
}: SidebarLinkProps) {
  return (
    <ActiveLink passHref href={href}>
      <ChakraLink
        display="flex"
        align="center"
        color={active ? "pink.400" : "gray.50"}
      >
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {text}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
