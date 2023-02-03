import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import productReducer from "./slice/productSlice";
import filterReducer from "./slice/filterSlice";
import cartReducer from "./slice/cartSlice";
import orderReducer from "./slice/orderSlice";

const rootReducer = combineReducers({
  // Add your reducers here
  auth: authReducer,
  product: productReducer,
  filter: filterReducer,
  cart: cartReducer,
  orders: orderReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
