import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppSelector, selector } from '../utils';

const initialState = {
  windowWidth: window.innerWidth
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setWindowWidth: (state, action: PayloadAction<number>) => {
      state.windowWidth = action.payload
    }
  }
});

export const { setWindowWidth } = appSlice.actions

export const selectWidth: AppSelector<Number> = selector(state => state.app.windowWidth)

export default appSlice.reducer