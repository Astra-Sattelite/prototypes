import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppSelector, selector } from '../utils';

type State = {
  windowWidth: number
}

const initialState = {
  windowWidth: window.innerWidth
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setWindowWidth: (state: State, action: PayloadAction<number>) => {
      state.windowWidth = action.payload
    }
  }
});

export const { setWindowWidth } = appSlice.actions

export const selectWidth: AppSelector<Number> = selector(state => state.app.windowWidth)

export default appSlice.reducer