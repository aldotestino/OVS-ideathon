import * as z from 'zod';

export const promptSchema = z.object({
  message: z.string().min(10)
});

export type PromptSchema = z.infer<typeof promptSchema>;