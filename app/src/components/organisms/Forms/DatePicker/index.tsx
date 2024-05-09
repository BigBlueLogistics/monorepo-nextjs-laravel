import MDatePicker from '@/components/atoms/MDatePicker';
import { Controller, FieldValues } from 'react-hook-form';
import { TDatePicker } from './types';

function DatePicker<TName extends FieldValues>({
  control,
  name,
  label,
  dateFormat = 'MM/dd/yyyy',
  ...rest
}: TDatePicker<TName>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <MDatePicker
          {...rest}
          value={value as any}
          label={label}
          onChange={(date) => onChange(date)}
          selected={value}
          dateFormat={dateFormat}
          error={Boolean(error?.message)}
          helperText={error?.message}
        />
      )}
    />
  );
}

export default DatePicker;
