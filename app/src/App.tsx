import { Box, Heading, VStack } from '@chakra-ui/react';
import PromptBox from './components/PromptBox';
import { ChatMessage } from './utils/types';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import ChatMessageBox from './components/ui/ChatMessageBox';

function App() {

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'me',
      text: 'Genera copyper una campagna marketing sul Natale promuovendo i nostri pigiami ed enfatizzando il concetto di famiglia che si riunisceinsieme davanti al camino'
    },
    {
      sender: 'bot',
      text: 'I nostri pigiami sono pronti a trasformare ogni notte in un\'esperienza magica. Riunisci la tua famiglia davanti al camino e lasciate che il Natale renda ogni momento speciale. 🌟❤️ #PigiamiMagici #NataleInsieme'
    }, {
      sender: 'me',
      text: 'Ciao Babbo Natale, Quest\'anno ho visto dei maglioni carini con renne ed elfi della collezione di OVS che mi piacciono molto. Mi piacerebbe averli, sono proprio il mio stile. Immagino che sarebbe bello indossarli mentre stiamo tutti insieme vicino al camino. Grazie mille! Con affetto, Sofia.'
    }, {
      sender: 'bot',
      text: 'Non aspettare Babbo Natale per uno stile irresistibile! I nostri maglioni con renne ed elfi OVS sono la risposta a tutte le tue preghiere di moda invernale! Riunisci la famiglia e scatenatevi nell\'allegria natalizia! 🎅🎉 Trovali su https://www.ovs.it/it/it/'
    }
  ]);
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
        <Heading>CopyGPT-OVS</Heading>
        <VStack p={4} spacing={4} rounded="lg" shadow="sm" w="full" flex="1 auto" border="1px" borderColor="gray.200" overflowY="scroll">
          {messages.map((message, index) => (
            <ChatMessageBox key={index} sender={message.sender} text={message.text} />
          ))}
          <span style={{ margin: 0 }} ref={chatBox}></span>
        </VStack>
        <PromptBox appendMessage={appendMessage}  />
      </VStack>
    </Box>
  );
}

export default App;
