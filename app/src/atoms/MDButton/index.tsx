import { forwardRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import MDButtonRoot from '@/atoms/MDButton/MDButtonRoot';
import { useMaterialUIController } from '@/context';
import { TMDButton } from './types';

const MDButton = forwardRef<HTMLButtonElement, TMDButton>(
  (
    {
      size = 'medium',
      variant = 'contained',
      color = 'white',
      circular = false,
      iconOnly = false,
      loading = false,
      children,
      ...rest
    },
    ref
  ) => {
    const [controller] = useMaterialUIController();
    const { darkMode } = controller;

    return (
      <MDButtonRoot
        {...rest}
        ref={ref}
        color="primary"
        variant={variant === 'gradient' ? 'contained' : variant}
        size={size}
        ownerState={{ color, variant, size, circular, iconOnly, darkMode }}
      >
        {loading ? <CircularProgress size={22} color="inherit" /> : children}
      </MDButtonRoot>
    );
  }
);

MDButton.displayName = 'MDButton';

export default MDButton;
