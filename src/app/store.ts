import { configureStore } from '@reduxjs/toolkit'
import showTimeSlice from '../pages/ShowTime/showTimeSlice';
import appSlice from '../appSlice';

export const store = configureStore({
  reducer: {
    app: appSlice,
    showTime: showTimeSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch