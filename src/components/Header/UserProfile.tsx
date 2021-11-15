import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function UserProfile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Jean Martins</Text>
        <Text color="gray.300" fontSize="small">
          jeanmrtns4@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Jean Martins"
        src="https://github.com/jeanmrtns.png"
      />
    </Flex>
  );
}
