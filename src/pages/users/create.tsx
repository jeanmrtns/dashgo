import Link from "next/link";

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
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { RiSaveLine, RiArrowLeftLine } from "react-icons/ri";
import { Input } from "../../components/Form/Input";
import Layout from "../../components/Layout";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória').min(6, 'A senha deve possuir no mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas precisam ser iguais')
});

function CreateUser() {

  const { formState, register, handleSubmit } = useForm({
    resolver: yupResolver(createUserFormSchema)
  });

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = (data) => {

  }

  return (
    <Layout>
      <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]} as="form" onSubmit={handleSubmit(handleCreateUser)} >
        <Heading size="lg" fontWeight="normal">
          Criar usuário
        </Heading>
        <Divider my="6" borderColor="gray.700" />

        <VStack spacing={["6", "8"]}>
          <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
            <Input label="Nome completo" error={errors.name} name="name" {...register('name')} />
            <Input label="E-mail" error={errors.email} name="email" type="email" {...register('email')} />
          </SimpleGrid>
          <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
            <Input label="Senha" error={errors.password} name="password" type="password" {...register('password')} />
            <Input
              label="Confirmação da senha"
              error={errors.password_confirmation}
              name="password_confirmation"
              type="password"
              {...register('password_confirmation')}
            />
          </SimpleGrid>
        </VStack>

        <Flex mt={["6", "8"]} justify="flex-end">
          <HStack spacing="4">
            <Link href="/users" passHref>
              <Button
                as="a"
                colorScheme="whiteAlpha"
                leftIcon={<Icon as={RiArrowLeftLine} fontSize="20" />}
              >
                Cancelar
              </Button>
            </Link>
            <Button
              type="submit"
              colorScheme="pink"
              leftIcon={<Icon as={RiSaveLine} fontSize="20" />}
              isLoading={formState.isSubmitting}
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
