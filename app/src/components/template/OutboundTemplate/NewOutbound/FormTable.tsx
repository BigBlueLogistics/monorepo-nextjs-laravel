// @ts-nocheck
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import { Controller, useFieldArray } from 'react-hook-form';
import { TFormTable } from './types';
import MDInput from '@/components/atoms/MDInput';
import MDButton from '@/components/atoms/MDButton';
import AutoCompleteMaterial from '@/components/organisms/Forms/AutoCompleteMaterial';
import Select from '@/components/organisms/Forms/Select';
import MDCheckbox from '@/components/atoms/MDCheckbox';

function FormTable({ control, register, formState }: TFormTable) {
  const { errors } = formState;
  const { fields, append } = useFieldArray({ name: 'subRows', control });
  const theaders = [
    'Item',
    'Material',
    'Batch/Reference',
    'Expiry Date',
    'Quantity',
    'Unit',
    'Tolerance',
    'Remarks',
    'Available (unit)',
    'Available (kg)',
  ];

  const renderHeaderCell = () => {
    return theaders.map((header, idx) => <TableCell key={idx}>{header}</TableCell>);
  };

  const renderBodyCell = () => {
    return fields.map((item, idx) => (
      <TableRow key={item.id}>
        <TableCell>
          <MDInput
            type="number"
            helperText={errors?.subRows && errors?.subRows?.at(idx)?.item?.message}
            error={Boolean(errors?.subRows?.at(idx)?.item?.message)}
            {...register(`subRows.${idx}.item`, { valueAsNumber: true })}
            variant="standard"
          />
        </TableCell>
        <TableCell>
          <AutoCompleteMaterial
            control={control}
            name={`subRows.${idx}.material`}
            options={[
              { id: 1, material: 'FGRETAIL0072', description: 'sample description' },
              { id: 2, material: 'FGRETAIL0073', description: 'sample description' },
            ]}
          />
        </TableCell>
        <TableCell>
          <Select
            control={control}
            name={`subRows.${idx}.batch`}
            options={[
              { value: 'FG1111', label: 'FG1111' },
              { value: 'FG222', label: 'FG222' },
              { value: 'FG333', label: 'FG333' },
            ]}
            sx={{ '& .MuiInputBase-root': { marginTop: 0 } }}
          />
        </TableCell>
        <TableCell>
          <Select
            control={control}
            name={`subRows.${idx}.expiryDate`}
            options={[
              { value: '10/11/2024', label: '10/11/2024' },
              { value: '10/12/2024', label: '10/12/2024' },
              { value: '10/13/2024', label: '10/13/2024' },
            ]}
            sx={{ '& .MuiInputBase-root': { marginTop: 0 } }}
          />
        </TableCell>
        <TableCell>
          <MDInput
            type="number"
            helperText={errors?.subRows && errors?.subRows?.at(idx)?.qty?.message}
            error={Boolean(errors?.subRows?.at(idx)?.qty?.message)}
            {...register(`subRows.${idx}.qty`, { valueAsNumber: true })}
            variant="standard"
          />
        </TableCell>
        <TableCell>
          <Select
            control={control}
            name={`subRows.${idx}.unit`}
            options={[
              { value: '1/KG', label: '1/KG' },
              { value: '2/KG', label: '2/KG' },
              { value: '3/KG', label: '3/KG' },
            ]}
            sx={{ '& .MuiInputBase-root': { marginTop: 0 } }}
          />
        </TableCell>
        <TableCell>
          <Controller
            control={control}
            name={`subRows.${idx}.tolerance`}
            render={({ field: { onChange, value } }) => (
              <MDCheckbox checked={value} onChange={(e) => onChange(e.target.checked)} />
            )}
          />
        </TableCell>
        <TableCell>
          <MDInput
            helperText={errors?.subRows && errors?.subRows?.at(idx)?.remarks?.message}
            error={Boolean(errors?.subRows?.at(idx)?.remarks?.message)}
            {...register(`subRows.${idx}.remarks`)}
            variant="standard"
          />
        </TableCell>
        <TableCell>
          <MDInput name="availableUnits" disabled value={0} variant="standard" />
        </TableCell>
        <TableCell>
          <MDInput name="availableKg" disabled value={0} variant="standard" />
        </TableCell>
      </TableRow>
    ));
  };

  const onAddRow = () => {
    append({
      item: 0,
      material: '',
      batch: '',
      expiryDate: '',
      qty: 0,
      unit: '',
      tolerance: false,
      remarks: '',
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>{renderHeaderCell()}</TableRow>
        </TableHead>
        <TableBody>
          {renderBodyCell()}
          <TableRow>
            <TableCell colSpan={theaders.length}>
              <MDButton onClick={onAddRow}>Add Row</MDButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FormTable;
