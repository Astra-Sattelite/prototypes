import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AppSelector, selector } from '../../../utils'
import axios from "axios"
import { v4 } from 'uuid'
import * as R from "ramda"

type Info =
  { img: string
  , descr: string
  , link: string
  }

type State = {
  info: Info[]
  status: "idle" | "loading" | "failed"
}

export const getShowTimeData = createAsyncThunk(
  "showtime/axiosGetShowTimeData",
  async () => {
    const resp = await axios.get("../../../static/showtime_data.json")

    return resp.data.info
  }
);

const initialState: State = {
  info: [],
  status: "idle"
}

export const showTimeSlice = createSlice({
  name: "showtime",
  initialState,
  reducers: { 

  },
  extraReducers(builder) {
    builder
    .addCase(getShowTimeData.pending, (state) => {
      state.status = "loading";
    })
    .addCase(getShowTimeData.fulfilled, (state, action) => {
      state.status = "idle";
      state.info = action.payload;
    });
  },
})

export const {} = showTimeSlice.actions

export const selectInfo: AppSelector<Info[]> = selector(state => state.showTime.info)

export default showTimeSlice.reducer