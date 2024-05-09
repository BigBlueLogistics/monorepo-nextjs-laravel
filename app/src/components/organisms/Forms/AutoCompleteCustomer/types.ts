import { SxProps } from '@mui/material';
import { Control, FieldValues, Path } from 'react-hook-form';

export type TAutoCompleteCustomerData = {
  id: number;
  customerCode: string;
  customerName: string;
};
export type TAutoCompleteCustomer<TName extends FieldValues> = {
  options: TAutoCompleteCustomerData[];
  control: Control<TName>;
  name: Path<TName>;
  label?: string;
  noOptionText?: string;
  sx?: SxProps;
};
