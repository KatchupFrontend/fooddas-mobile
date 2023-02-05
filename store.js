import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import vendorReducer from './features/VendorSlice'
import authReducer  from './features/authSlice'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    vendor: vendorReducer,
  },
});
