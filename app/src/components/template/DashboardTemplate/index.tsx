'use client';

import DashboardLayout from '@/components/organisms/LayoutContainers/DashboardLayout';
import DashboardNavbar from '@/components/organisms/Navbars/DashboardNavbar';

function DashboardTemplate() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <h1>Dashboard</h1>
    </DashboardLayout>
  );
}

export default DashboardTemplate;
