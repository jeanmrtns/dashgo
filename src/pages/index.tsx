import { Flex, Stack, Button } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
});

export default function SignIn() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = (data, event) => {
    console.log(data)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        flexDir="column"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input name="email" id="email" label="E-mail" error={errors.email} type="email" {...register('email')} />
          <Input name="password" id="password" label="Senha" error={errors.password} type="password" {...register('password') } />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
