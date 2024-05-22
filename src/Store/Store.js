import { configureStore } from '@reduxjs/toolkit';
import AddressReducer from './AddressSlice';

const store = configureStore({
  reducer: {
    Address: AddressReducer,
  },
});

export default store;