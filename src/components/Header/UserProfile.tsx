import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface UserProfileProps {
  showProfileData: boolean;
}

export function UserProfile({ showProfileData = true }) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jean Martins</Text>
          <Text color="gray.300" fontSize="small">
            jeanmrtns4@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Jean Martins"
        src="https://github.com/jeanmrtns.png"
      />
    </Flex>
  );
}
