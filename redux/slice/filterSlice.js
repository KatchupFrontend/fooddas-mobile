import { createSlice } from '@reduxjs/toolkit'

const initialState = {
      filteredProducts:[]
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_BY_SEARCH(state, action) {
      const { products, search } = action.payload;
      const tempProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase())
      );
      state.filteredProducts = tempProducts;
    },
    FILTER_BY_CATEGORY(state, action) {
      console.log(action.payload);
      const { products, category } = action.payload;
      let tempProducts = [];
      if (category === "All") {
        tempProducts = products;
      } else {
        tempProducts = products.filter(
          (product) => product.category === category
        );
      }
      state.filteredProducts = tempProducts;
    },
    FILTER_BY_CITY(state, action) {
      console.log(action.payload);
      const { products,city } = action.payload;
      let tempProducts = [];
      if (category === "Kumasi") {
        tempProducts = products;
      } else {
        tempProducts = products.filter(
          (product) => product.city === city
        );
      }
      state.filteredProducts = tempProducts;
    },
  },
});

export const {FILTER_BY_SEARCH, FILTER_BY_CATEGORY, FILTER_BY_CITY} = filterSlice.actions
export const selectFilteredProducts = (state) => state.filter.filteredProducts

export default filterSlice.reducer