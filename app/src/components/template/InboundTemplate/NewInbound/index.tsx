import { Card, Unstable_Grid2 as Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import MDBox from '@/components/atoms/MDBox';
import MDTypography from '@/components/atoms/MDTypography';
import MDButton from '@/components/atoms/MDButton';
import MDSelect from '@/components/atoms/MDSelect';
import MDInput from '@/components/atoms/MDInput';
import MDatePicker from '@/components/atoms/MDatePicker';
import AutoCompleteCustomer from '@/components/organisms/Forms/AutoCompleteCustomer';
import DashboardLayout from '@/components/organisms/LayoutContainers/DashboardLayout';
import DashboardNavbar from '@/components/organisms/Navbars/DashboardNavbar';
import { validationSchema, TValidationSchema } from './validationScheme';

function NewInbound() {
  const { handleSubmit, control } = useForm<TValidationSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: { customer: '' },
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
        <Grid container spacing={6} justifyContent="center">
          <Grid xs={12} lg={5}>
            <Card sx={{ p: 6 }}>
              <MDTypography variant="h5">Add Inbound</MDTypography>

              <Grid container columnSpacing={2} rowSpacing={2} mt={1}>
                <Grid xs={12} sm={6}>
                  <AutoCompleteCustomer
                    options={options}
                    control={control}
                    name="customer"
                    label="Select customer"
                    noOptionText="No customer"
                  />
                </Grid>
                <Grid xs={12} sm={6}>
                  <MDSelect
                    name="deliveryNo"
                    options={[]}
                    label="STO / Delivery No."
                    value=""
                    onChange={() => {}}
                    sx={{ width: '100%' }}
                  />
                </Grid>
                <Grid xs={12} sm={6}>
                  <MDInput
                    label="Customer Reference"
                    name="custRef"
                    sx={{ width: '100%' }}
                    variant="standard"
                  />
                </Grid>
                <Grid xs={12} sm={6}>
                  <MDatePicker
                    label="Actual Date"
                    name="actualDate"
                    inputStyle={{ width: '100%' }}
                    sx={{ width: '100%' }}
                    onChange={() => {}}
                  />
                </Grid>
                <Grid xs={12} sm={6}>
                  <MDInput
                    label="Van / Plate No."
                    name="plateNo"
                    sx={{ width: '100%' }}
                    variant="standard"
                  />
                </Grid>
                <Grid xs={12} sm={6}>
                  <MDInput
                    label="Carrier Type"
                    name="carrierType"
                    sx={{ width: '100%' }}
                    variant="standard"
                  />
                </Grid>
                <Grid xs={12} sm={6}>
                  <MDInput
                    label="Shipment Type"
                    name="shipmentType"
                    sx={{ width: '100%' }}
                    variant="standard"
                  />
                </Grid>
                <Grid xs={12} sm={6}>
                  <MDInput
                    label="Conveyance Type"
                    name="conveyanceType"
                    sx={{ width: '100%' }}
                    variant="standard"
                  />
                </Grid>
                <Grid xs={12} sm={12}>
                  <MDInput
                    label="Remarks"
                    name="remarks"
                    sx={{ width: '100%' }}
                    multiline
                    rows={3}
                    variant="standard"
                  />
                </Grid>
                <Grid sm={12} display="flex" justifyContent="end">
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
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default NewInbound;
