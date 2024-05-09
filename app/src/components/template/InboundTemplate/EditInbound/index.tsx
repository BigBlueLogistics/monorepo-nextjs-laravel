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
import Select from '@/components/organisms/Forms/Select';
import { validationSchema, TValidationSchema } from './validationScheme';
import DataTable from '@/components/organisms/Tables/DataTable';
import miscData from './data';

function EditInbound() {
  const { tableHeaders } = miscData();
  const { handleSubmit, control } = useForm<TValidationSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: { customer: '', wh: '' },
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
              <MDTypography variant="h5">Edit Inbound</MDTypography>

              <Grid container columnSpacing={2} rowSpacing={2} mt={1}>
                <Grid xs={12}>
                  <AutoCompleteCustomer
                    options={options}
                    control={control}
                    name="customer"
                    label="Select customer"
                    noOptionText="No customer"
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
                  <MDatePicker
                    label="GR Date From"
                    name="dateFrom"
                    inputStyle={{ width: '100%' }}
                    sx={{ width: '100%' }}
                    onChange={() => {}}
                  />
                </Grid>
                <Grid xs={12}>
                  <MDatePicker
                    label="GR Date To"
                    name="dateTo"
                    inputStyle={{ width: '100%' }}
                    sx={{ width: '100%' }}
                    onChange={() => {}}
                  />
                </Grid>
                <Grid xs={12}>
                  <MDSelect
                    name="availableInbound"
                    options={[]}
                    label="Available Inbound"
                    value=""
                    onChange={() => {}}
                    sx={{ width: '100%' }}
                  />
                </Grid>
                <Grid xs={12}>
                  <MDInput
                    label="Created By"
                    name="createdBy"
                    sx={{ width: '100%' }}
                    variant="standard"
                  />
                </Grid>
                <Grid xs={12}>
                  <MDInput
                    label="Actual GR Date"
                    name="actualDate"
                    sx={{ width: '100%' }}
                    variant="standard"
                  />
                </Grid>
                <Grid xs={12}>
                  <MDInput
                    label="Vehicle Number"
                    name="vechicleNum"
                    sx={{ width: '100%' }}
                    variant="standard"
                  />
                </Grid>
                <Grid xs={12}>
                  <MDInput
                    label="Carrier Type"
                    name="carrierType"
                    sx={{ width: '100%' }}
                    variant="standard"
                  />
                </Grid>
                <Grid xs={12}>
                  <MDInput
                    label="Remarks"
                    name="remarks"
                    sx={{ width: '100%' }}
                    variant="standard"
                    multiline
                  />
                </Grid>
                <Grid sm={12} lg={12} display="flex" justifyContent="end">
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
              <DataTable
                table={{
                  columns: tableHeaders(),
                  rows: [],
                }}
                isSorted={false}
                isLoading={false}
                entriesPerPage={{ defaultValue: 5, entries: [5, 10, 15, 20, 25] }}
                showTotalEntries
                noEndBorder
                canSearch
              />
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default EditInbound;
