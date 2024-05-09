import { useState, useEffect, MouseEvent } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Icon from '@mui/material/Icon';
import MDBox from '@/components/atoms/MDBox';
import MDTypography from '@/components/atoms/MDTypography';
import Breadcrumbs from '@/components/organisms/Breadcrumbs';
import NotificationItem from '@/components/organisms/Items/NotificationItem';
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from '@/components/organisms/Navbars/DashboardNavbar/styles';
import { useAppDispatch } from '@/hooks';
import { signOut, setIsAuthenticated } from '@/core/redux/auth/action';

import { useMaterialUIController, setTransparentNavbar, setMiniSidenav } from '@/context';
import { Theme } from '@mui/material/styles/createTheme';
import MDAvatar from '@/components/atoms/MDAvatar';
import selector from './selector';
import { TDashboardNavbar, CSSPosition } from './types';

function DashboardNavbar({ absolute = false, light = false, isMini = false }: TDashboardNavbar) {
  const reduxDispatch = useAppDispatch();
  const { name, customerCode } = selector();
  const [navbarType, setNavbarType] = useState('sticky');
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, darkMode } = controller;
  const [openProfile, setOpenProfile] = useState<HTMLButtonElement | null>(null);
  const [openNotification, setOpenNotification] = useState<HTMLButtonElement | null>(null);
  const route = usePathname().split('/').slice(1);
  const navigate = useRouter();

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType('sticky');
    } else {
      setNavbarType('static');
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener('scroll', handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleOpenProfile = (event: MouseEvent<HTMLButtonElement>) =>
    setOpenProfile(event.currentTarget);
  const handleCloseProfile = () => setOpenProfile(null);
  const handleOpenNotification = (event: MouseEvent<HTMLButtonElement>) =>
    setOpenNotification(event.currentTarget);
  const handleCloseNotification = () => setOpenNotification(null);

  const handleSignOut = () => {
    reduxDispatch(signOut());
    reduxDispatch(setIsAuthenticated(false));
    localStorage.removeItem('apiToken');
  };

  const handleProfile = () => {
    navigate.push('/profile');
  };

  // Render the notifications menu
  const renderProfile = () => (
    <Menu
      anchorEl={openProfile}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={Boolean(openProfile)}
      onClose={handleCloseProfile}
      sx={{ mt: 2 }}
    >
      <NotificationItem
        icon={<Icon>manage_accounts</Icon>}
        title="Profile"
        onClick={handleProfile}
      />
      <NotificationItem icon={<Icon>logout</Icon>} title="Sign out" onClick={handleSignOut} />
    </Menu>
  );

  const renderNotification = () => (
    <Menu
      anchorEl={openNotification}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={Boolean(openNotification)}
      onClose={handleCloseNotification}
      sx={{ mt: 2 }}
    >
      <NotificationItem icon={<Icon>mail</Icon>} title="Mail" onClick={() => {}} />
      <NotificationItem icon={<Icon>message</Icon>} title="Chat" onClick={() => {}} />
    </Menu>
  );

  // Styles for the navbar icons
  const iconsStyle = ({ palette: { dark, white, text }, functions: { rgba } }: Theme) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;

      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }

      return colorValue;
    },
  });

  return (
    <AppBar
      position={(absolute ? 'absolute' : navbarType) as CSSPosition}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light, darkMode })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <MDBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} />
        </MDBox>
        {isMini ? null : (
          <MDBox sx={(theme) => navbarRow(theme, { isMini })}>
            <MDBox pr={1}>
              <MDTypography
                variant="h6"
                component="div"
                fontWeight="regular"
                textTransform="capitalize"
                sx={({ typography: { pxToRem } }) => ({
                  fontSize: pxToRem(14),
                })}
              >
                {name}
              </MDTypography>
              <MDTypography
                variant="h6"
                component="div"
                fontWeight="regular"
                textTransform="uppercase"
                sx={({ typography: { pxToRem }, palette: { text } }) => ({
                  fontSize: pxToRem(11),
                  color: text.main,
                })}
              >
                {customerCode}
              </MDTypography>
            </MDBox>
            <MDBox color={light ? 'white' : 'inherit'}>
              <IconButton
                sx={navbarIconButton}
                size="small"
                disableRipple
                onClick={handleOpenProfile}
                title="profile"
              >
                <MDAvatar
                  size="sm"
                  shadow="sm"
                  sx={({ palette: { grey } }) => ({ background: grey[500] })}
                >
                  <MDTypography
                    variant="h5"
                    fontWeight="regular"
                    color="white"
                    marginLeft="0px !important"
                  >
                    {name.charAt(0).toUpperCase()}
                  </MDTypography>
                </MDAvatar>
              </IconButton>
              {renderProfile()}
              <IconButton
                sx={({ typography: { pxToRem } }) => ({ navbarIconButton, fontSize: pxToRem(36) })}
                size="small"
                disableRipple
                onClick={handleOpenNotification}
                title="notification"
              >
                <Icon sx={iconsStyle}>notifications</Icon>
              </IconButton>
              {renderNotification()}
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarMobileMenu}
                onClick={handleMiniSidenav}
                title="menu"
              >
                <Icon sx={iconsStyle} fontSize="medium">
                  {miniSidenav ? 'menu_open' : 'menu'}
                </Icon>
              </IconButton>
            </MDBox>
          </MDBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default DashboardNavbar;
