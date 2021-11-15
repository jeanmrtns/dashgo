import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import { SidebarLink } from './SidebarLink'
import { SidebarSection } from './SidebarSection'

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <SidebarSection title="GERAL">
                    <SidebarLink text="Dashboard" icon={RiDashboardLine} active />
                    <SidebarLink text="Usuários" icon={RiContactsLine} />
                </SidebarSection>

                <SidebarSection title="AUTOMAÇÃO">
                    <SidebarLink text="Formulários" icon={RiInputMethodLine} />
                    <SidebarLink text="Automação" icon={RiGitMergeLine} />
                </SidebarSection>
            </Stack>
        </Box>
    )
}
