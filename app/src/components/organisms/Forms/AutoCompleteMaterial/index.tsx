import { Controller, FieldValues } from 'react-hook-form';
import { TextField, createFilterOptions, Autocomplete } from '@mui/material';
import { TAutoCompleteMaterialData, TAutoCompleteMaterial } from './types';

function AutoCompleteMaterial<TName extends FieldValues>({
  control,
  name,
  options,
  label = '',
  noOptionText = '',
  sx = {},
}: TAutoCompleteMaterial<TName>) {
  const filterOptions = createFilterOptions({
    matchFrom: 'any',
    stringify: (option: TAutoCompleteMaterialData) => option.material + option.description,
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
                  return value === option.material;
                }) ?? null
              : null
          }
          getOptionLabel={(option) => {
            return option.material;
          }}
          onChange={(event: any, newValue) => {
            onChange(newValue ? newValue.material : null);
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
          renderOption={(props, option: TAutoCompleteMaterialData) => {
            return (
              <li key={option.id} {...props} style={{ display: 'block' }}>
                <div>{option.material}</div>
                <small>{option.description}</small>
              </li>
            );
          }}
        />
      )}
    />
  );
}

export default AutoCompleteMaterial;
