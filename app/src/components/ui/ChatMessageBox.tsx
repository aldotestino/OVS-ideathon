import { Box } from '@chakra-ui/react';
import { ChatMessage } from '../../utils/types';

function ChatMessageBox({ text }: ChatMessage) {
  return (
    <Box p={4} w="full" borderBottom="1px" borderColor="gray.200">
      {text}
    </Box>
  );
}

export default ChatMessageBox;