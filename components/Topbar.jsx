import { Flex, Heading, Avatar } from "@chakra-ui/react"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";

export default function Topbar({email}) {
  const [user] = useAuthState(auth);
  return (
    <Flex
      bg="gray.100"
      h="81px" w="100%"
      align="center"
      p={5}
    >
      <Avatar src="" marginEnd={3} />
      <Heading size="lg">{user.displayName}</Heading>
    </Flex>
  )
}