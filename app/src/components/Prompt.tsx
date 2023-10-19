import { Box, HStack, Icon, IconButton } from '@chakra-ui/react';
import InputField from './ui/InputField';
import { PromptSchema, promptSchema } from '../utils/validators';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

function Prompt() {

  const { register, handleSubmit, formState: { touchedFields, errors } } = useForm<PromptSchema>({
    resolver: zodResolver(promptSchema)
  });

  function onSubmit(data: PromptSchema) { 
    console.log(data); 
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

export default Prompt;