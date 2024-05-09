import { Unstable_Grid2 as Grid, Card } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import MDBox from '@/components/atoms/MDBox';
import MDButton from '@/components/atoms/MDButton';
import MDInput from '@/components/atoms/MDInput';
import MDTypography from '@/components/atoms/MDTypography';
import AutoCompleteCustomer from '@/components/organisms/Forms/AutoCompleteCustomer';
import Select from '@/components/organisms/Forms/Select';
import DatePicker from '@/components/organisms/Forms/DatePicker';
import DashboardLayout from '@/components/organisms/LayoutContainers/DashboardLayout';
import DashboardNavbar from '@/components/organisms/Navbars/DashboardNavbar';
import FormTable from './FormTable';
import { validationSchema, TValidationSchema } from './validationScheme';
import miscData from './data';

function EditOutbound() {
  const { defaultValuesFormOutbound } = miscData();
  const { handleSubmit, control, register, formState } = useForm<TValidationSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: defaultValuesFormOutbound,
  });

  const onSubmit = (values: TValidationSchema) => {
    console.log('values', values);
  };

  const options = [
    {
      id: 1,
      customerCode: 'Option 1',
      customerName: 'Lorem ipsum 1',
    },
    {
      id: 2,
      customerCode: 'Option 2',
      customerName: 'Lorem ipsum 2',
    },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDBox pt={6} pb={3}>
        <Grid container columnSpacing={3}>
          <Grid xs={12} lg={2.5}>
            <Card sx={{ p: 4 }}>
              <MDTypography variant="h5">Edit Outbound</MDTypography>

              <Grid container columnSpacing={2} rowSpacing={2} mt={1}>
                <Grid xs={12}>
                  <AutoCompleteCustomer
                    options={options}
                    control={control}
                    name="customer"
                    label="Customer"
                    noOptionText="No customer"
                    sx={{ width: '100%' }}
                  />
                </Grid>
                <Grid xs={12}>
                  <Select
                    control={control}
                    name="wh"
                    label="Source warehouse"
                    options={[
                      { value: '', label: 'None' },
                      { value: 'wh1', label: 'BBLC PLANT 1' },
                      { value: 'wh2', label: 'BBLC PLANT 2' },
                    ]}
                    sx={{ width: '100%' }}
                  />
                </Grid>
                <Grid xs={12}>
                  <DatePicker
                    control={control}
                    name="giDateFrom"
                    label="Planned GI Date From"
                    sx={{ width: '100%' }}
                    inputStyle={{ width: '100%' }}
                  />
                </Grid>
                <Grid xs={12}>
                  <DatePicker
                    control={control}
                    name="giDateTo"
                    label="Planned GI Date To"
                    sx={{ width: '100%' }}
                    inputStyle={{ width: '100%' }}
                  />
                </Grid>
                <Grid xs={12}>
                  <Select
                    control={control}
                    name="available"
                    label="Available Outbound"
                    options={[
                      { value: '', label: 'None' },
                      { value: '111111', label: '111111' },
                      { value: '222222', label: '222222' },
                    ]}
                    sx={{ width: '100%' }}
                  />
                </Grid>
                <Grid xs={12}>
                  <MDInput
                    label="SO Number"
                    sx={{ width: '100%' }}
                    helperText={formState.errors?.soNum?.message}
                    error={Boolean(formState.errors?.soNum?.message)}
                    variant="standard"
                    {...register('soNum')}
                  />
                </Grid>
                <Grid xs={12}>
                  <MDInput
                    label="PO / Reference No."
                    sx={{ width: '100%' }}
                    helperText={formState.errors?.refNo?.message}
                    error={Boolean(formState.errors?.refNo?.message)}
                    variant="standard"
                    {...register('refNo')}
                  />
                </Grid>
                <Grid xs={12}>
                  <MDInput
                    label="PO / Reference Date"
                    sx={{ width: '100%' }}
                    helperText={formState.errors?.refDate?.message}
                    error={Boolean(formState.errors?.refDate?.message)}
                    variant="standard"
                    {...register('refDate')}
                  />
                </Grid>
                <Grid xs={12}>
                  <MDInput
                    label="Remarks"
                    name="remarks"
                    sx={{ mb: 2, width: '100%' }}
                    multiline
                    rows={2}
                    variant="standard"
                  />
                </Grid>
                <Grid sm={12} lg={12} display="flex" justifyContent="space-between">
                  <MDButton
                    startIcon={<DeleteIcon />}
                    type="button"
                    variant="gradient"
                    color="error"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Delete
                  </MDButton>
                  <MDButton
                    type="button"
                    variant="gradient"
                    color="info"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Save
                  </MDButton>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid xs={12} lg={9.5}>
            <Card sx={{ p: 4 }}>
              <FormTable control={control} register={register} formState={formState} />
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default EditOutbound;
