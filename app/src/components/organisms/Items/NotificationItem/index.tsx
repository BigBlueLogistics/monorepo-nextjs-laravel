import { forwardRef } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import MDBox from '@/components/atoms/MDBox';
import MDTypography from '@/components/atoms/MDTypography';
import menuItem from '@/components/organisms/Items/NotificationItem/styles';
import { TNotificationItem } from './types';

const NotificationItem = forwardRef<HTMLLIElement, TNotificationItem>(
  ({ icon, title, ...rest }, ref) => (
    <MenuItem ref={ref} sx={(theme) => menuItem(theme)} {...rest}>
      <MDBox component={Link} py={0.5} display="flex" alignItems="center" lineHeight={1}>
        <MDTypography variant="body1" color="secondary" lineHeight={0.75}>
          {icon}
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" sx={{ ml: 1 }}>
          {title}
        </MDTypography>
      </MDBox>
    </MenuItem>
  )
);

NotificationItem.displayName = 'NotificationItem';

export default NotificationItem;
