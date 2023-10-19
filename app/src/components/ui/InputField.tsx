import { FormControl, FormControlProps, FormErrorMessage, Input, InputProps } from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputFieldProps = FormControlProps & InputProps & {
  register: UseFormRegisterReturn<'message'>
  errorString: string | undefined
}

function InputField({ isInvalid, errorString, register, type }: InputFieldProps) {
  return (
    <FormControl isInvalid={isInvalid}>
      <Input size="lg" {...register} type={type} focusBorderColor="teal.600" />
      <FormErrorMessage>{errorString}</FormErrorMessage>
    </FormControl>
  );
}

export default InputField;