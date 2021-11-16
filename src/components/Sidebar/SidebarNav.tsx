import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { SidebarLink } from "./SidebarLink";
import { SidebarSection } from "./SidebarSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <SidebarSection title="GERAL">
        <SidebarLink href="/dashboard" text="Dashboard" icon={RiDashboardLine} active />
        <SidebarLink href="/users" text="Usuários" icon={RiContactsLine} />
      </SidebarSection>

      <SidebarSection title="AUTOMAÇÃO">
        <SidebarLink href="#" text="Formulários" icon={RiInputMethodLine} />
        <SidebarLink href="#" text="Automação" icon={RiGitMergeLine} />
      </SidebarSection>
    </Stack>
  );
}
