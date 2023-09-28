import { FontSpec } from 'chart.js';
import typography from '@/organisms/ThemeRegistry/theme/base/typography';

function configs(labels: any, datasets: any) {
  return {
    data: {
      labels,
      datasets: [...datasets],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          border: {
            display: false,
            dash: [5, 5],
          },
          grid: {
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
          },
          ticks: {
            display: true,
            padding: 10,
            color: '#9ca2b7',
            font: {
              size: 11,
              family: typography.fontFamily,
              style: 'normal',
              lineHeight: 2,
            } as FontSpec,
          },
        },
        x: {
          border: {
            display: false,
          },
          grid: {
            display: false,
            drawOnChartArea: true,
            drawTicks: true,
          },
          ticks: {
            display: true,
            color: '#9ca2b7',
            padding: 10,
            font: {
              size: 11,
              family: typography.fontFamily,
              style: 'normal',
              lineHeight: 2,
            } as FontSpec,
          },
        },
      },
    },
  };
}

export default configs;
