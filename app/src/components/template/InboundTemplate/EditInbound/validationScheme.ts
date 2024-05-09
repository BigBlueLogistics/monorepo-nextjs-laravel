import { z } from 'zod';
import { forms } from '@/constants';

export const validationSchema = z.object({
  customer: z.string({ required_error: forms.required, invalid_type_error: forms.required }),
  wh: z.string({ required_error: forms.required, invalid_type_error: forms.required }),
});

export type TValidationSchema = z.infer<typeof validationSchema>;
