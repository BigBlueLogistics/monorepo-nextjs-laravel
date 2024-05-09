import { Control, FieldValues, Path } from 'react-hook-form';
import type { TMDatePicker } from '@/components/atoms/MDatePicker/types';

export type TDatePicker<TName extends FieldValues> = {
  control: Control<TName>;
  name: Path<TName>;
  label?: string;
} & Omit<TMDatePicker, 'onChange' | 'value' | 'helperText' | 'error' | 'name'>;
