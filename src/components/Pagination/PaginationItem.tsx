import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  active?: boolean;
}

export function PaginationItem({ number, active }: PaginationItemProps) {
  if (active) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{ bgColor: "pink.500", cursor: "default" }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bgColor="gray.600"
      _hover={{
        bgColor: "gray.500",
      }}
    >
      {number}
    </Button>
  );
}
