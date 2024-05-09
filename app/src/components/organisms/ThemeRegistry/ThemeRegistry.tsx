'use client';
import { useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { useMaterialUIController } from '@/context';
import { reAuthenticate } from '@/core/redux/auth/action';
import { useAppDispatch } from '@/hooks';

import theme from './theme';
import themeDark from './theme-dark';

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  const reduxDispatch = useAppDispatch();
  const [controller] = useMaterialUIController();
  const { direction, darkMode } = controller;
  const pathname = usePathname();

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute('dir', direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
  }, [pathname]);

  // Check user if authenticated when page reload
  useEffect(() => {
    const apiToken = localStorage.getItem('apiToken');
    if (apiToken && pathname !== '/sign-in') {
      // console.log("run redux reauth");
      reduxDispatch(reAuthenticate());
    }
  }, [pathname, reduxDispatch]);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={darkMode ? themeDark : theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
