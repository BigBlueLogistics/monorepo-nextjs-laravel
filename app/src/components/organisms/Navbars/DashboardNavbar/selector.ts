import { useAppSelector } from '@/hooks';
import { signIn } from '@/core/redux/auth/action';

function selector() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { successfulRequests } = useAppSelector((state) => state.auth);

  const {
    fname,
    lname,
    customer_code: customerCode,
  } = successfulRequests[signIn.fulfilled.type]?.data || {};

  return {
    name: `${fname} ${lname}`,
    customerCode,
  };
}

export default selector;
