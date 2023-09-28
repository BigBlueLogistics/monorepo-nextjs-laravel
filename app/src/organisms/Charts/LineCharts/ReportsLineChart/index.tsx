import { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import MDBox from '@/atoms/MDBox';
import MDTypography from '@/atoms/MDTypography';
import configs from '@/organisms/Charts/LineCharts/ReportsLineChart/configs';
import { TReportsLineChart } from './types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function ReportsLineChart({ color, title, description, date, chart, status }: TReportsLineChart) {
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  const renderLineChart = () => {
    if (status === 'failed') {
      return (
        <MDTypography
          variant="body2"
          sx={{
            display: 'flex',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Failed to display chart.
        </MDTypography>
      );
    }

    return <Line data={data} options={options} />;
  };
  return (
    <Card sx={{ height: '100%' }}>
      <MDBox padding="1rem">
        {useMemo(
          () => (
            <MDBox
              variant="gradient"
              bgColor={color}
              borderRadius="lg"
              coloredShadow={color}
              py={2}
              pr={0.5}
              mt={-5}
              height="12.5rem"
            >
              {renderLineChart()}
            </MDBox>
          ),
          [chart, color]
        )}
        <MDBox pt={3} pb={1} px={1}>
          <MDTypography variant="h6" textTransform="capitalize">
            {title}
          </MDTypography>
          <MDTypography component="div" variant="button" color="text" fontWeight="light">
            {description}
          </MDTypography>
          <Divider />
          <MDBox display="flex" alignItems="center">
            <MDTypography variant="button" color="text" lineHeight={1} sx={{ mt: 0.15, mr: 0.5 }}>
              <Icon>schedule</Icon>
            </MDTypography>
            <MDTypography variant="button" color="text" fontWeight="light">
              {date}
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

ReportsLineChart.defaultProps = {
  color: 'dark',
  description: '',
};

export default ReportsLineChart;
