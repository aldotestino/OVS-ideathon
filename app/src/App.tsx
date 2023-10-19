import { Box, VStack } from '@chakra-ui/react';
import Prompt from './components/Prompt';
import { ChatMessage } from './utils/types';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import ChatMessageBox from './components/ui/ChatMessageBox';

function App() {

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const chatBox = useRef<HTMLSpanElement>() as MutableRefObject<HTMLSpanElement>;

  function appendMessage(message: ChatMessage) {
    setMessages(pv => [...pv, message]);
  }

  useEffect(() => {
    chatBox.current?.scrollIntoView({ 'behavior': 'auto' });
  }, [messages]);

  return (
    <Box h="100vh" p={4}>
      <VStack w="full" maxW="container.md" h="full" mx="auto" spacing={4}>
        <VStack rounded="lg" shadow="sm" w="full" flex="1 auto" border="1px" borderColor="gray.200" overflowY="scroll">
          {messages.map((message, index) => (
            <ChatMessageBox key={index} sender={message.sender} text={message.text} />
          ))}
          <span style={{ margin: 0 }} ref={chatBox}></span>
        </VStack>
        <Prompt appendMessage={appendMessage}  />
      </VStack>
    </Box>
  );
}

export default App;
