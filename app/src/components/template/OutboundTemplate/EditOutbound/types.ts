import type { Control, FormState, UseFormRegister } from 'react-hook-form';
import { TValidationSchema } from './validationScheme';

export type TFormTable = {
  control: Control<TValidationSchema>;
  register: UseFormRegister<TValidationSchema>;
  formState: FormState<TValidationSchema>;
};
