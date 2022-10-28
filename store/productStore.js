import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialProducts = { products: [], productFilter: [] };
const useProductSlice = createSlice({
  name: "products",
  initialState: initialProducts,
  reducers: {
    getProduct(state, action) {
      state.products = action.payload;
    },
    filter(state, action) {
      state.productFilter = action.payload;
    },
  },
});

const store = configureStore({
  reducer: useProductSlice.reducer,
});
export const productActions = useProductSlice.actions;

export default store;
