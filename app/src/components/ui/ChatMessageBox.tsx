import { Box } from '@chakra-ui/react';
import { ChatMessage } from '../../utils/types';

function ChatMessageBox({ text, sender }: ChatMessage) {
  return (
    <Box color="white" roundedTop="xl" roundedBottomLeft={sender === 'bot' ? 'none' : 'xl'} roundedBottomRight={sender === 'me' ? 'none' : 'xl'} p={4} bg={sender === 'bot' ? 'teal.600' : 'teal.500'} maxW="lg" alignSelf={sender === 'bot' ? 'start': 'end'}>
      {text}
    </Box>
  );
}

export default ChatMessageBox;