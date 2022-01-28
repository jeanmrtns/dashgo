import Link from "next/link";
import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text,
  useBreakpointValue,
  Spinner,
  ButtonGroup,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { IoReload } from 'react-icons/io5';
import Layout from "../../components/Layout";
import { Pagination } from "../../components/Pagination";
import { useUsers } from "../../services/hooks/useUsers";

function UserList() {

  const { data, error, isLoading, refetch, isFetching } = useUsers();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Layout>
      <Box flex="1" borderRadius={8} bg="gray.800" p="8">
        <Flex mb="8" justify="space-between" align="center">
          <Heading size="lg" fontWeight="normal">
            Usuários
          </Heading>

          <ButtonGroup>
            <Button
              isLoading={isFetching}
              variant="solid"
              fontSize="sm" 
              as="button"
              size="sm"
              colorScheme="pink"
              onClick={() => refetch()}
            >
              <Icon as={IoReload} />
            </Button>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Novo usuário
              </Button>
            </Link>
          </ButtonGroup>
        </Flex>

        { isLoading ? (
          <Flex justify="center">
            <Spinner />
          </Flex>
        ) : error ? (
          <Flex justify="center">
            <Text>Falha ao obter dados</Text>
          </Flex>
        ) : (
          <>
            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th px={["4", "4", "6"]} color="gray.300" w="8">
                    <Checkbox colorScheme="pink" />
                  </Th>
                  <Th>Usuário</Th>
                  {isWideVersion && <Th>Data de cadastro</Th>}
                  {isWideVersion && <Th w="8"></Th>}
                </Tr>
              </Thead>
              <Tbody>
                { data.map(user => {
                  return (
                    <Tr key={user.id}>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight="bold">{ user.name }</Text>
                          <Text fontSize="sm" color="gray.300">
                            { user.email }
                          </Text>
                        </Box>
                      </Td>
                      {isWideVersion && (
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{ user.createdAt }</Text>
                          </Box>
                        </Td>
                      )}
                      {isWideVersion && (
                        <Td>
                          <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="purple"
                            leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                            cursor="pointer"
                          >
                            Editar
                          </Button>
                        </Td>
                      )}
                    </Tr>
                  );
                }) }
              </Tbody>
            </Table>
            <Pagination />
          </>
        ) }
      </Box>
    </Layout>
  );
}

export default UserList;
