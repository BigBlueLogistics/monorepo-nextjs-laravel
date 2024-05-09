import { useState } from 'react';
import { Grid, Card } from '@mui/material';
import MDBox from '@/components/atoms/MDBox';
import MDTypography from '@/components/atoms/MDTypography';
import MDButton from '@/components/atoms/MDButton';
import DashboardLayout from '@/components/organisms/LayoutContainers/DashboardLayout';
import DashboardNavbar from '@/components/organisms/Navbars/DashboardNavbar';
import Footer from '@/components/organisms/Footer';
import DataTable from '@/components/organisms/Tables/DataTable';
import ActionIcon from '../common/ActionIcon';
import MenuAction from '../common/MenuAction';
import miscData from './data';

function InboundDetails() {
  const { tableHeaders } = miscData();

  const [toggleFilter, setToggleFilter] = useState(true);

  const onToggleFilter = () => {
    setToggleFilter((prevState) => !prevState);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={2.5}
                px={1.5}
                display="flex"
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                borderTop="2px solid #dadcde"
              >
                <MDTypography ml={3} variant="h4" color="light" textTransform="uppercase">
                  Inbound
                </MDTypography>

                <MDBox my="auto" marginLeft="auto">
                  <ActionIcon
                    title={toggleFilter ? 'close filter' : 'open filter'}
                    onClick={onToggleFilter}
                  >
                    {toggleFilter ? 'filter_alt_off' : 'filter_alt'}
                  </ActionIcon>
                  <ActionIcon title="actions" onClick={() => {}}>
                    more_vert
                  </ActionIcon>
                  {/* <MenuAction anchorEl={} onClose={() => {}} items={[]} /> */}
                </MDBox>
              </MDBox>

              <MDBox pt={3}>
                <MDBox
                  sx={({ palette: { grey, searchFilter } }) => ({
                    display: toggleFilter ? 'block' : 'none',
                    backgroundColor: searchFilter.container.default,
                    borderTop: `2px solid ${grey[400]}`,
                    width: '100%',
                    overflowX: 'auto',
                  })}
                >
                  <MDBox
                    sx={({ breakpoints }) => ({
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'start',
                      padding: '10px',
                      [breakpoints.down('md')]: {
                        justifyContent: 'space-between',
                      },
                    })}
                  >
                    <MDButton
                      disabled={false}
                      sx={{ margin: '8px' }}
                      size="small"
                      variant="gradient"
                      color="info"
                      onClick={() => {}}
                    >
                      Filter
                    </MDButton>
                    <MDButton
                      disabled={false}
                      sx={{ margin: '8px' }}
                      size="small"
                      variant="gradient"
                      color="warning"
                      onClick={() => {}}
                    >
                      clear
                    </MDButton>
                  </MDBox>
                </MDBox>
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
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default InboundDetails;
