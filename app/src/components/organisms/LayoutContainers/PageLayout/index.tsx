import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import MDBox from '@/components/atoms/MDBox';
import { useMaterialUIController, setLayout } from '@/context';
import { TPageLayout } from './types';

function PageLayout({ background, children }: TPageLayout) {
  const [, dispatch] = useMaterialUIController();
  const pathname = usePathname();

  useEffect(() => {
    setLayout(dispatch, 'page');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <MDBox
      width="100vw"
      height="100%"
      minHeight="100vh"
      bgColor={background}
      sx={{ overflowX: 'hidden' }}
    >
      {children}
    </MDBox>
  );
}

PageLayout.defaultProps = {
  background: 'default',
};

export default PageLayout;
