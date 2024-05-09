import { useAppSelector } from '@/hooks';
import { signIn } from '@/core/redux/auth/action';

function selector() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { successfulRequests } = useAppSelector((state) => state.auth);

  const { role_name: accountRole, customer_code: customerCode } =
    successfulRequests[signIn.fulfilled.type]?.data || {};

  return {
    accountRole,
    customerCode,
  };
}

export default selector;
