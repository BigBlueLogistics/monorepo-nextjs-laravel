import storage from 'redux-persist/es/storage';
import { createTransform } from 'redux-persist';
import { signIn } from '@/core/redux/auth/action';
import { AuthStoreType } from '@/types/authStore';

// Clear and not persist object keys below except auth key.
const authPersistFilter = createTransform(
  null,
  (state: AuthStoreType) => {
    const newState = { ...state };
    newState.request = {};
    newState.successfulRequests = {
      [signIn.fulfilled.type]: { ...newState.successfulRequests[signIn.fulfilled.type] },
    };
    newState.failedRequests = {};
    return newState;
  },
  { whitelist: ['auth'] }
);

const persistConfig = {
  key: 'bwms',
  storage,
  whitelist: ['auth'],
  transforms: [authPersistFilter],
};

export default persistConfig;
