import { useRef, useEffect, useState, useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartData, Point } from 'chart.js';
import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import MDBox from '@/components/atoms/MDBox';
import MDTypography from '@/components/atoms/MDTypography';
import gradientChartLine from '@/components/organisms/ThemeRegistry/theme/functions/gradientChartLine';
import configs from '@/components/organisms/Charts/MixedChart/configs';
import colors from '@/components/organisms/ThemeRegistry/theme/base/colors';
import { TMixedChart } from './types';

function MixedChart({ icon, title, description, height, chart, status }: TMixedChart) {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [chartData, setChartData] = useState<{
    data: ChartData<'line', (number | Point | null)[], unknown>;
    options: any;
  }>({ data: { datasets: [] }, options: null });
  const { data, options } = chartData;

  useEffect(() => {
    const chartDatasets = chart.datasets
      ? chart.datasets.map((dataset) => {
          let finalConfigs;

          const defaultLine = {
            ...dataset,
            type: 'line',
            tension: 0,
            borderWidth: 4,
            pointRadius: 2,
            pointBackgroundColor: colors[dataset.color as keyof typeof colors]
              ? // @ts-ignore
                colors[dataset.color as keyof typeof colors].main
              : colors.dark.main,
            borderColor: colors[dataset.color as keyof typeof colors]
              ? // @ts-ignore
                colors[dataset.color as keyof typeof colors].main
              : colors.dark.main,
            maxBarThickness: 6,
          };

          const gradientLine = {
            ...dataset,
            type: 'line',
            tension: 0,
            pointRadius: 0,
            borderWidth: 4,
            borderColor: colors[dataset.color as keyof typeof colors]
              ? // @ts-ignore
                colors[dataset.color as keyof typeof colors].main
              : colors.dark.main,
            fill: true,
            maxBarThickness: 6,
            backgroundColor: gradientChartLine(
              chartRef.current ? (chartRef.current.children[0] as HTMLCanvasElement) : null,
              colors[dataset.color as keyof typeof colors]
                ? // @ts-ignore
                  colors[dataset.color as keyof typeof colors].main
                : colors.dark.main
            ),
          };

          const bar = {
            ...dataset,
            type: 'bar',
            weight: 5,
            borderWidth: 0,
            borderRadius: 4,
            backgroundColor: colors[dataset.color as keyof typeof colors]
              ? // @ts-ignore
                colors[dataset.color as keyof typeof colors].main
              : colors.dark.main,
            fill: false,
            maxBarThickness: 35,
          };

          const thinBar = {
            ...dataset,
            type: 'bar',
            weight: 5,
            borderWidth: 0,
            borderRadius: 4,
            backgroundColor: colors[dataset.color as keyof typeof colors]
              ? // @ts-ignore
                colors[dataset.color as keyof typeof colors].main
              : colors.dark.main,
            fill: false,
            maxBarThickness: 10,
          };

          if (dataset.chartType === 'default-line') {
            finalConfigs = defaultLine;
          } else if (dataset.chartType === 'gradient-line') {
            finalConfigs = gradientLine;
          } else if (dataset.chartType === 'thin-bar') {
            finalConfigs = thinBar;
          } else {
            finalConfigs = bar;
          }

          return { ...finalConfigs };
        })
      : [];

    // @ts-ignore
    setChartData(configs(chart.labels || [], chartDatasets));
  }, [chart]);

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
          <MDBox ref={chartRef} sx={{ height }}>
            {renderLineChart()}
          </MDBox>
        ),
        [chartData, height]
      )}
    </MDBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of MixedChart
MixedChart.defaultProps = {
  icon: { color: 'info', component: '' },
  title: '',
  description: '',
  height: '19.125rem',
};

export default MixedChart;
