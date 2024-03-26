import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';

import MDBox from '@/components/atoms/MDBox';
import MDTypography from '@/components/atoms/MDTypography';
import MDSnackbarIconRoot from '@/components/atoms/MDSnackbar/MDSnackbarIconRoot';
import { useMaterialUIController } from '@/context';
import { IMDSnackbar } from './types';

function MDSnackbar({
  bgWhite = false,
  color = 'info',
  autoHideDuration = 5000,
  icon,
  title,
  dateTime,
  content,
  close,
  ...rest
}: IMDSnackbar) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  let titleColor;
  let dateTimeColor;
  let dividerColor;

  if (bgWhite) {
    titleColor = color;
    dateTimeColor = 'dark';
    dividerColor = false;
  } else if (color === 'light') {
    titleColor = darkMode ? 'inherit' : 'dark';
    dateTimeColor = darkMode ? 'inherit' : 'text';
    dividerColor = false;
  } else {
    titleColor = 'white';
    dateTimeColor = 'white';
    dividerColor = true;
  }

  return (
    <Snackbar
      open
      TransitionComponent={Fade}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      onClose={close}
      {...rest}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={() => close()}>
          <Icon fontSize="small">close</Icon>
        </IconButton>
      }
    >
      <MDBox
        variant={bgWhite ? 'contained' : 'gradient'}
        bgColor={bgWhite ? 'white' : color}
        minWidth="21.875rem"
        maxWidth="100%"
        shadow="md"
        borderRadius="md"
        p={1}
        sx={{
          backgroundColor: ({ palette }) =>
            darkMode ? palette.background.card : (color && palette[color]) || palette.white.main,
        }}
      >
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color="dark"
          p={1.5}
        >
          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <MDSnackbarIconRoot fontSize="small" ownerState={{ color, bgWhite }}>
              {icon}
            </MDSnackbarIconRoot>
            <MDTypography
              variant="button"
              fontWeight="medium"
              color={titleColor}
              textGradient={bgWhite}
            >
              {title}
            </MDTypography>
          </MDBox>
          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <MDTypography variant="caption" color={dateTimeColor}>
              {dateTime}
            </MDTypography>
            <Icon
              sx={{
                color: ({ palette: { dark, white } }) =>
                  (bgWhite && !darkMode) || color === 'light' ? dark.main : white.main,
                fontWeight: ({ typography: { fontWeightBold } }) => fontWeightBold,
                cursor: 'pointer',
                marginLeft: 2,
                transform: 'translateY(-1px)',
              }}
              onClick={() => close()}
            >
              close
            </Icon>
          </MDBox>
        </MDBox>
        <Divider sx={{ margin: 0 }} light={dividerColor} />
        <MDBox
          p={1.5}
          sx={{
            fontSize: ({ typography: { size } }) => size.sm,
            color: ({ palette: { white, text } }) => {
              let colorValue = bgWhite || color === 'light' ? text.main : white.main;

              if (darkMode) {
                colorValue = color === 'light' ? 'inherit' : white.main;
              }

              return colorValue;
            },
          }}
        >
          {content}
        </MDBox>
      </MDBox>
    </Snackbar>
  );
}

export default MDSnackbar;
