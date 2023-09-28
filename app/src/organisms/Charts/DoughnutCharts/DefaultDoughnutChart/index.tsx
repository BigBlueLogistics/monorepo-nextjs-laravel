import { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import MDBox from '@/atoms/MDBox';
import MDTypography from '@/atoms/MDTypography';
import configs from '@/organisms/Charts/DoughnutCharts/DefaultDoughnutChart/configs';
import { TDefaultDoughnutChart } from './types';

function DefaultDoughnutChart({
  icon,
  title,
  description,
  height,
  chart,
  status,
}: TDefaultDoughnutChart) {
  const { data, options } = configs(
    chart.labels || [],
    chart.datasets || {},
    chart.cutout as unknown as number
  );

  const renderDoughnutChart = () => {
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

    return <Doughnut data={data} options={options} />;
  };

  const renderChart = (
    <MDBox py={2} pr={2} pl={icon?.component ? 1 : 2}>
      {title || description ? (
        <MDBox display="flex" px={description ? 1 : 0} pt={description ? 1 : 0}>
          {icon?.component && (
            <MDBox
              width="4rem"
              height="4rem"
              bgColor={icon.color || 'info'}
              variant="gradient"
              coloredShadow={icon.color || 'info'}
              borderRadius="xl"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              mt={-5}
              mr={2}
            >
              <Icon fontSize="medium">{icon.component}</Icon>
            </MDBox>
          )}
          <MDBox mt={icon?.component ? -2 : 0}>
            {title && <MDTypography variant="h6">{title}</MDTypography>}
            <MDBox mb={2}>
              <MDTypography component="div" variant="button" color="text">
                {description}
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      ) : null}
      {useMemo(
        () => (
          <MDBox height={height}>{renderDoughnutChart()}</MDBox>
        ),
        [chart, height]
      )}
    </MDBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

DefaultDoughnutChart.defaultProps = {
  icon: { color: 'info', component: '' },
  title: '',
  description: '',
  height: '19.125rem',
};

export default DefaultDoughnutChart;
