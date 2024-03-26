import { forwardRef, createContext, useContext, useMemo } from 'react';
import MDBox from '@/components/atoms/MDBox';
import MDPaginationItemRoot from '@/components/atoms/MDPagination/MDPaginationItemRoot';
import { TMDPagination } from './types';

// The Pagination main context
const Context = createContext<Pick<TMDPagination, 'variant' | 'size' | 'color'>>({
  variant: 'gradient',
  size: 'medium',
  color: 'info',
});

const MDPagination = forwardRef<HTMLButtonElement, TMDPagination>(
  (
    {
      item = false,
      variant = 'gradient',
      color = 'info',
      size = 'medium',
      active = false,
      children,
      ...rest
    },
    ref
  ) => {
    const context = useContext(Context);
    const paginationSize = context ? context.size : 'medium';

    const value = useMemo(() => ({ variant, color, size }), [variant, color, size]);

    return (
      <Context.Provider value={value}>
        {item ? (
          <MDPaginationItemRoot
            {...rest}
            ref={ref}
            variant={active ? context.variant : 'outlined'}
            color={active ? context.color : 'secondary'}
            iconOnly
            circular
            ownerState={{ variant, active, paginationSize }}
          >
            {children}
          </MDPaginationItemRoot>
        ) : (
          <MDBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ listStyle: 'none' }}
          >
            {children}
          </MDBox>
        )}
      </Context.Provider>
    );
  }
);

MDPagination.displayName = 'MDPagination';

export default MDPagination;
