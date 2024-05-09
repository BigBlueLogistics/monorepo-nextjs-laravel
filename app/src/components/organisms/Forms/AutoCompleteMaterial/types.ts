import { SxProps } from '@mui/material';
import { Control, FieldValues, Path } from 'react-hook-form';

export type TAutoCompleteMaterialData = {
  id: number;
  material: string;
  description: string;
};

export type TAutoCompleteMaterial<TName extends FieldValues> = {
  options: TAutoCompleteMaterialData[];
  control: Control<TName>;
  name: Path<TName>;
  label?: string;
  noOptionText?: string;
  sx?: SxProps;
};
