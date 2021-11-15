import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  HStack,
  Button,
  Icon,
} from "@chakra-ui/react";
import { RiSaveLine, RiArrowLeftLine } from "react-icons/ri";
import { Input } from "../../components/Form/Input";
import Layout from "../../components/Layout";

function CreateUser() {
  return (
    <Layout>
      <Box flex="1" borderRadius={8} bg="gray.800" p="8">
        <Heading size="lg" fontWeight="normal">
          Criar usuário
        </Heading>
        <Divider my="6" borderColor="gray.700" />

        <VStack spacing="8">
          <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
            <Input label="Nome completo" name="name" />
            <Input label="E-mail" name="email" type="email" />
          </SimpleGrid>
          <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
            <Input label="Senha" name="password" type="password" />
            <Input
              label="Confirmação da senha"
              name="password_confirmation"
              type="password"
            />
          </SimpleGrid>
        </VStack>

        <Flex mt="8" justify="flex-end">
          <HStack spacing="4">
            <Button
              colorScheme="whiteAlpha"
              leftIcon={<Icon as={RiArrowLeftLine} fontSize="20" />}
            >
              Cancelar
            </Button>
            <Button
              colorScheme="pink"
              leftIcon={<Icon as={RiSaveLine} fontSize="20" />}
            >
              Salvar
            </Button>
          </HStack>
        </Flex>
      </Box>
    </Layout>
  );
}

export default CreateUser;
