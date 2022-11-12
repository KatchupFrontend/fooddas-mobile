import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import vendorReducer from './features/VendorSlice'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    vendor: vendorReducer,
  },
});
