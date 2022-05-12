import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AppSelector, selector } from '../../../utils';

type Product = {
  img: string;
  name: string;
  descr: string;
  price: number;
}

type State = {
  products: Product[]
  status: "idle" | "loading" | "failed"
}

export const getHoloStoreProducts = createAsyncThunk(
  "holostore/axiosGetHoloStoreProducts",
  async () => {
    const resp = await axios.get("../../../static/holostore_all_products.json")

    return resp.data.products
  }
);

const initialState: State = {
  products: [],
  status: "idle"
}

const holoStoreSlice = createSlice({
  name: "holostore",
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
    .addCase(getHoloStoreProducts.pending, (state) => {
      state.status = "loading";
    })
    .addCase(getHoloStoreProducts.fulfilled, (state, action) => {
      state.status = "idle";
      state.products = action.payload;
    });
  },
});

export const {} = holoStoreSlice.actions

export const selectProducts: AppSelector<Product[]> = selector(state => state.holostore.products)

export default holoStoreSlice.reducer