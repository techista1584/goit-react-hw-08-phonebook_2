import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contactsReducers';
import authReducer from '../redux/auth/authReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = {
  contacts: contactsReducer,
  auth: persistReducer(authPersistConfig, authReducer),
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['FLUSH', 'REHYDRATE', 'PAUSE', 'PERSIST', 'PURGE', 'REGISTER'],
      },
    }),
});

export const persistor = persistStore(store);
