import { z } from 'zod';

export const validationSchema = z.object({
  customer: z.string({ required_error: 'required', invalid_type_error: 'required' }),
});

export type TValidationSchema = z.infer<typeof validationSchema>;
