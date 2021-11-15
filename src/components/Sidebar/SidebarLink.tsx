import { Link, Icon, Text } from '@chakra-ui/react'
import { ElementType } from 'react';

interface SidebarLinkProps {
    text: string;
    icon: ElementType;
    active?: boolean;
}

export function SidebarLink({ text, icon, active=false } : SidebarLinkProps) {
  return (
    <Link display="flex" align="center" color={active ? "pink.400" : "gray.50"} >
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {text}
      </Text>
    </Link>
  );
}
