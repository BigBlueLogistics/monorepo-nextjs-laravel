import MDSelect from '@/components/atoms/MDSelect';
import { Controller, FieldValues } from 'react-hook-form';
import { TSelect } from './types';

function Select<TName extends FieldValues>({ control, name, options, ...rest }: TSelect<TName>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <MDSelect
          {...rest}
          ref={ref}
          value={value}
          onChange={onChange}
          options={options}
          name={name}
          error={Boolean(error?.message)}
          helperText={error?.message}
        />
      )}
    />
  );
}

export default Select;
