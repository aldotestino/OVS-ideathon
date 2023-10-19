import { Box, VStack } from '@chakra-ui/react';
import Prompt from './components/Prompt';

function App() {

  return (
    <Box h="100vh" p={4}>
      <VStack w="full" maxW="container.md" h="full" mx="auto" spacing={4}>
        <VStack rounded="lg" shadow="sm" w="full" flex="1 auto" border="1px" borderColor="gray.200">

        </VStack>
        <Prompt />
      </VStack>
    </Box>
  );
}

export default App;
