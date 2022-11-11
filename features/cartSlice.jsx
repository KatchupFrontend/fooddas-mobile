import {createSlice} from '@reduxjs/toolkit';

const initialState = {
items: [],
};

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items  = [...state.items, action.payload];
    },
    removeFromCart: (state,action) => {
      state.items -= 1;
    },
    // incrementByAmount: (state, action) => {
    //   state.items += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart} = cartSlice.actions;

export const selectCartItems = (state)  => state.cart.items;
export default cartSlice.reducer;
