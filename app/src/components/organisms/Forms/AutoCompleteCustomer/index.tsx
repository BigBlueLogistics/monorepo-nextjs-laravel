import { Controller, FieldValues } from 'react-hook-form';
import { TextField, createFilterOptions, Autocomplete } from '@mui/material';
import { TAutoCompleteCustomerData, TAutoCompleteCustomer } from './types';

function AutoCompleteCustomer<TName extends FieldValues>({
  control,
  name,
  options,
  label = '',
  noOptionText = '',
  sx = {},
}: TAutoCompleteCustomer<TName>) {
  const filterOptions = createFilterOptions({
    matchFrom: 'any',
    stringify: (option: TAutoCompleteCustomerData) => option.customerCode + option.customerName,
  });

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <Autocomplete
          sx={sx}
          value={
            value
              ? options.find((option) => {
                  return value === option.customerCode;
                }) ?? null
              : null
          }
          getOptionLabel={(option) => {
            return option.customerCode;
          }}
          onChange={(event: any, newValue) => {
            onChange(newValue ? newValue.customerCode : null);
          }}
          id={name}
          options={options}
          noOptionsText={noOptionText}
          filterOptions={filterOptions}
          renderInput={(params) => (
            <TextField
              {...params}
              inputRef={ref}
              error={Boolean(error?.message)}
              helperText={error?.message}
              sx={({ palette }) => ({
                '& .MuiInputBase-root': {
                  minWidth: '200px',
                  '& .MuiAutocomplete-input': {
                    padding: '3px',
                  },
                },
              })}
              label={label}
              variant="standard"
            />
          )}
          renderOption={(props, option: TAutoCompleteCustomerData) => {
            return (
              <li key={option.id} {...props} style={{ display: 'block' }}>
                <div>{option.customerCode}</div>
                <small>{option.customerName}</small>
              </li>
            );
          }}
        />
      )}
    />
  );
}

export default AutoCompleteCustomer;
