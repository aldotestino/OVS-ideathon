import { Box, HStack, Icon, IconButton } from '@chakra-ui/react';
import InputField from './ui/InputField';
import { PromptSchema, promptSchema } from '../utils/validators';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import PromptApi from '../api/promptApi';
import { useMutation } from 'react-query';
import { ChatMessage } from '../utils/types';

interface PromptProps {
  appendMessage: (message: ChatMessage) => void;
}

function PromptBox({ appendMessage }: PromptProps) {

  const { register, handleSubmit, formState: { touchedFields, errors }, reset } = useForm<PromptSchema>({
    resolver: zodResolver(promptSchema)
  });

  const promptMutation = useMutation({
    mutationFn: PromptApi.generateCopy,
    onSuccess: (data) => {
      console.log(data);
      appendMessage({
        sender: 'bot',
        text: data.copy
      });
    }
  });

  async function onSubmit(values: PromptSchema) {
    console.log(values);
    appendMessage({
      sender: 'me',
      text: values.message
    });
    await promptMutation.mutateAsync(values);
    reset();
  }

  return (
    <Box w="full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack w="full" alignItems="start">
          <InputField 
            isInvalid={touchedFields.message && !!errors.message}
            errorString={errors.message?.message}
            register={register('message')}
          />
          <IconButton size="lg" colorScheme="teal" aria-label='submit' type="submit" icon={<Icon as={PaperAirplaneIcon} h={6} w={6} />}  />
        </HStack>
      </form>
    </Box>
  );
}

export default PromptBox;