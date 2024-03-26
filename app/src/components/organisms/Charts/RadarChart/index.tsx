import { useMemo } from 'react';
import { Radar } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import MDBox from '@/components/atoms/MDBox';
import MDTypography from '@/components/atoms/MDTypography';
import configs from '@/components/organisms/Charts/RadarChart/configs';
import colors from '@/components/organisms/ThemeRegistry/theme/base/colors';
import rgba from '@/components/organisms/ThemeRegistry/theme/functions/rgba';
import { TRadarChart } from './types';

function RadarChart({ icon, title, description, chart, status }: TRadarChart) {
  const chartDatasets = chart.datasets
    ? chart.datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: colors[dataset.color as keyof typeof colors]
          ? // @ts-ignore
            rgba(colors[dataset.color as keyof typeof colors].main, 0.2)
          : rgba(colors.dark.main, 0.2),
      }))
    : [];

  const { data, options } = configs(chart.labels || [], chartDatasets);

  const renderRadarChart = () => {
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

    return <Radar data={data} options={options} />;
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
          <MDBox p={6}>{renderRadarChart()}</MDBox>
        ),
        [chart]
      )}
    </MDBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

RadarChart.defaultProps = {
  icon: { color: 'info', component: '' },
  title: '',
  description: '',
};

export default RadarChart;
