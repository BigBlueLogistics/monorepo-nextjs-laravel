import type { Control, FieldValues, Path } from 'react-hook-form';
import type { TMDSelect } from '@/components/atoms/MDSelect/types';

export type TSelect<TName extends FieldValues> = {
  control: Control<TName>;
  name: Path<TName>;
} & Omit<TMDSelect, 'onChange' | 'value' | 'helperText' | 'error' | 'name'>;
