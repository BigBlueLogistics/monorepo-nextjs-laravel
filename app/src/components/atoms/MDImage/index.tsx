import { forwardRef } from 'react';
import Image from 'next/image';
import MDBox from '@/components/atoms/MDBox';
import { TMDImageIcon } from './types';

const MDImage = forwardRef<HTMLImageElement, TMDImageIcon>(
  ({ width, height, alt = '', src, sx, ...rest }, ref) => (
    <MDBox
      ref={ref}
      component={Image}
      src={src}
      alt={alt}
      width={width}
      height={height}
      sx={sx}
      {...rest}
    />
  )
);

MDImage.displayName = 'MDImage';

export default MDImage;
