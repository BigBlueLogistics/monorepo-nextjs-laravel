import { InteractionMode } from 'chart.js';
import colors from '@/components/organisms/ThemeRegistry/theme/base/colors';

const { gradients, dark } = colors;

function configs(labels: any, datasets: any, cutout = 60) {
  const backgroundColors = [];

  if (datasets.backgroundColors) {
    datasets.backgroundColors.forEach((color: keyof typeof gradients) => {
      if (gradients[color]) {
        if (color === 'info') {
          backgroundColors.push(gradients.info.main);
        } else {
          backgroundColors.push(gradients[color].state);
        }
      } else {
        backgroundColors.push(dark.main);
      }
    });
  } else {
    backgroundColors.push(dark.main);
  }

  return {
    data: {
      labels,
      datasets: [
        {
          label: datasets.label,
          weight: 9,
          cutout,
          tension: 0.9,
          pointRadius: 2,
          borderWidth: 2,
          backgroundColor: backgroundColors,
          fill: false,
          data: datasets.data,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: 'index' as InteractionMode,
      },
      scales: {
        y: {
          border: {
            display: false,
          },
          grid: {
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
        },
        x: {
          border: {
            display: false,
          },
          grid: {
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
        },
      },
    },
  };
}

export default configs;
