import Box from '@mui/material/Box';
import { Palette } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { TOwnerState } from './types';

export default styled(Box)<TOwnerState>(({ theme, ownerState }) => {
  const { palette, functions, borders, boxShadows } = theme;
  const { variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow } = ownerState;

  const { gradients, grey, white } = palette;
  const { linearGradient } = functions;
  const { borderRadius: radius } = borders;
  const { colored } = boxShadows;

  const greyColors = {
    'grey-100': grey[100],
    'grey-200': grey[200],
    'grey-300': grey[300],
    'grey-400': grey[400],
    'grey-500': grey[500],
    'grey-600': grey[600],
    'grey-700': grey[700],
    'grey-800': grey[800],
    'grey-900': grey[900],
  };

  const validGradients = [
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'dark',
    'light',
  ];

  const validColors = [
    'transparent',
    'white',
    'black',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'light',
    'dark',
    'text',
    'grey-100',
    'grey-200',
    'grey-300',
    'grey-400',
    'grey-500',
    'grey-600',
    'grey-700',
    'grey-800',
    'grey-900',
  ];

  const validBorderRadius = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'section'];
  const validBoxShadows = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'inset'];

  // background value
  let backgroundValue = bgColor;

  if (variant === 'gradient') {
    backgroundValue = validGradients.find((el) => el === bgColor)
      ? linearGradient(
          gradients[bgColor as keyof Palette['gradients']].main,
          gradients[bgColor as keyof Palette['gradients']].state
        )
      : white.main;
  } else if (validColors.find((el) => el === bgColor)) {
    backgroundValue = palette[bgColor as keyof Palette]
      ? // @ts-ignore
        palette[bgColor as keyof Palette].main
      : greyColors[bgColor as keyof typeof greyColors];
  } else {
    backgroundValue = bgColor;
  }

  // color value
  let colorValue = color;

  if (validColors.find((el) => el === color)) {
    // @ts-ignore
    colorValue = palette[bgColor as keyof Palette]?.main
      ? // @ts-ignore
        palette[bgColor as keyof Palette].main
      : greyColors[color as keyof typeof greyColors];
  }

  // borderRadius value
  let borderRadiusValue = borderRadius;

  if (validBorderRadius.find((el) => el === borderRadius)) {
    borderRadiusValue = radius[borderRadius as keyof typeof radius];
  }

  // boxShadow value
  let boxShadowValue = 'none';

  if (validBoxShadows.find((el) => el === shadow)) {
    boxShadowValue = boxShadows[shadow as keyof typeof boxShadows] as string;
  } else if (coloredShadow) {
    boxShadowValue =
      colored && colored[coloredShadow as keyof typeof colored]
        ? colored[coloredShadow as keyof typeof colored]
        : 'none';
  }

  return {
    opacity,
    background: backgroundValue,
    color: colorValue,
    borderRadius: borderRadiusValue,
    boxShadow: boxShadowValue,
  };
});
