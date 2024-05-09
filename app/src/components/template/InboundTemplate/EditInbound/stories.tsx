import type { Meta, StoryObj } from '@storybook/react';

import EditInbound from './index';
import Sidenav from '@/components/organisms/Sidenav';

const meta: Meta = {
  title: 'template/Inbound/EditInbound',
  decorators: [
    (Story) => {
      return (
        <>
          <Sidenav
            brandName={'WMS'}
            accountRole={''}
            routes={[]}
            handleSignOut={function (): void {
              throw new Error('Function not implemented.');
            }}
            onMouseEnter={function (): void {
              throw new Error('Function not implemented.');
            }}
            onMouseLeave={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
          {Story()}
        </>
      );
    },
  ],
  component: EditInbound,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <EditInbound {...args} />,
};
