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
import { useQuery } from 'react-query';
import { format } from "date-fns";

type User = {
  id: string;
  email: string;
  createdAt: string;
}

function UserList() {

  const { data, error, isLoading, refetch, isFetching } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users');
    const data = await response.json();

    const users = data.users.map((user: User) => {
      return {
        ...user,
        createdAt: format(new Date(user.createdAt), 'dd/MM/yyyy')
      }
    });

    return users;
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  async function handleRefetchUsers() {
    await refetch({});
  }

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
              onClick={handleRefetchUsers}
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

        { isLoading || isFetching ? (
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
