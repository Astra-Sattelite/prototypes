import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface TestCompState {
  value: string
}

const initialState: TestCompState = {
  value: "",
}

export const testCompSlice = createSlice({
  name: 'testComp',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  },
})

export const { setText } = testCompSlice.actions

export const selectTestComp = (state: RootState) => state.testComp.value