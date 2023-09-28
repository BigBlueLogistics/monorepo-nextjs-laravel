import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NavLink from 'next/link';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Icon from '@mui/material/Icon';
import MDBox from '@/atoms/MDBox';
import MDTypography from '@/atoms/MDTypography';
import MDImage from '@/atoms/MDImage';
import MDButton from '@/atoms/MDButton';
import SidenavCollapse from '@/organisms/Sidenav/SidenavCollapse';
import SidenavRoot from '@/organisms/Sidenav/SidenavRoot';
import sidenavLogoLabel from '@/organisms/Sidenav/styles/sidenav';
import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from '@/context';
import { TSidenav } from './types';

function Sidenav({
  color = 'info',
  imgSrc,
  brandName,
  routes,
  accountRole,
  handleSignOut,
  onMouseEnter,
  onMouseLeave,
}: TSidenav) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
  const pathname = usePathname();
  const collapseName = pathname.replace('/', '');

  let textColor = 'white';

  if (transparentSidenav || (whiteSidenav && !darkMode)) {
    textColor = 'dark';
  } else if (whiteSidenav && darkMode) {
    textColor = 'inherit';
  }

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
      setTransparentSidenav(dispatch, window.innerWidth < 1200 ? false : transparentSidenav);
      setWhiteSidenav(dispatch, window.innerWidth < 1200 ? false : whiteSidenav);
    }

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener('resize', handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleMiniSidenav);
  }, [dispatch, pathname]);

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(({ type, name, icon, title, key, href, route, allowedRoles }) => {
    let returnValue;

    if (type === 'collapse' && allowedRoles?.includes(accountRole)) {
      returnValue = href ? (
        <Link
          href={href}
          key={key}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: 'none' }}
        >
          <SidenavCollapse name={name} icon={icon} active={key === collapseName} />
        </Link>
      ) : (
        <NavLink key={key} href={route as string}>
          <SidenavCollapse name={name} icon={icon} active={key === collapseName} />
        </NavLink>
      );
    } else if (type === 'title' && allowedRoles?.includes(accountRole)) {
      returnValue = (
        <MDTypography
          key={key}
          color={textColor}
          display="block"
          variant="caption"
          fontWeight="bold"
          textTransform="uppercase"
          pl={3}
          mt={2}
          mb={1}
          ml={1}
        >
          {title}
        </MDTypography>
      );
    } else if (type === 'divider' && allowedRoles?.includes(accountRole)) {
      returnValue = (
        <Divider
          key={key}
          light={
            (!darkMode && !whiteSidenav && !transparentSidenav) ||
            (darkMode && !transparentSidenav && whiteSidenav)
          }
        />
      );
    }

    return returnValue;
  });

  return (
    <SidenavRoot
      color={color}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      variant="permanent"
      ownerState={{ transparentSidenav, whiteSidenav, miniSidenav, darkMode }}
    >
      <MDBox pt={3} pb={1} px={4} textAlign="center">
        <MDBox
          display={{ xs: 'block', xl: 'none' }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: 'pointer' }}
        >
          <MDTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: 'bold' }}>close</Icon>
          </MDTypography>
        </MDBox>
        <MDBox
          component={NavLink}
          href="/"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {imgSrc && (
            <MDImage
              priority
              src={imgSrc}
              alt="Brand"
              width={192}
              height={54}
              sx={{ borderRadius: '5px' }}
            />
          )}
          <MDBox width="100%" sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}>
            <MDTypography
              textAlign="center"
              fontSize="20px"
              component="h6"
              variant="button"
              fontWeight="normal"
              color={textColor}
            >
              {brandName}
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
      <Divider
        light={
          (!darkMode && !whiteSidenav && !transparentSidenav) ||
          (darkMode && !transparentSidenav && whiteSidenav)
        }
      />
      <List>{renderRoutes}</List>
      <MDBox p={2} mt="auto">
        <MDButton variant="gradient" color={sidenavColor} fullWidth onClick={handleSignOut}>
          sign out
        </MDButton>
      </MDBox>
    </SidenavRoot>
  );
}

export default Sidenav;
