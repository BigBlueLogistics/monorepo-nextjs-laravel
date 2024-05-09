import { z } from 'zod';
import { forms } from '@/constants';

export const validationSchema = z.object({
  customer: z.string().min(1, forms.required),
  wh: z.string().min(1, forms.required),
  giDateFrom: z.date({ required_error: forms.required, invalid_type_error: forms.invalidValue }),
  giDateTo: z.date({ required_error: forms.required, invalid_type_error: forms.invalidValue }),
  available: z.string().min(1, forms.required),
  soNum: z.string().optional(),
  refNo: z.string().optional(),
  refDate: z.string().optional(),
  subRows: z.array(
    z.object({
      item: z
        .number({ required_error: forms.required, invalid_type_error: forms.gteZero })
        .nonnegative(forms.gteZero),
      material: z
        .string({ required_error: forms.required, invalid_type_error: forms.invalidValue })
        .min(1, forms.required),
      batch: z.string().optional(),
      expiryDate: z.string().optional(),
      qty: z
        .number({ required_error: forms.required, invalid_type_error: forms.gteZero })
        .nonnegative(forms.gteZero),
      unit: z.string(),
      tolerance: z.boolean(),
      remarks: z.string(),
    })
  ),
});

export type TValidationSchema = z.infer<typeof validationSchema>;
