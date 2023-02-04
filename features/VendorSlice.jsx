import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  vendors: {
    id: null,
    title:null,
    description:null,
    rating:null,
    address:null,
    dishes:null,
  },
};

export const vendorSlice = createSlice({
  name: 'vendor',
  initialState,
  reducers: {
       setVendor: (state, action) => {
        state.vendor = action.payload;
       }
  },
});

// Action creators are generated for each case reducer function
export const {setVendor} = vendorSlice.actions;

export const selectVendor = state => state.vendor.vendors;


export default vendorSlice.reducer;
