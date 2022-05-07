import { useMediaQuery } from "react-responsive"
import { AppDispatch, RootState } from "./src/app/store"
import { PayloadAction } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

export const useIsMobile = (): boolean => useMediaQuery({ maxWidth: "768px" })

export const useDsp = () => {
  const dispatch = useDispatch<AppDispatch>()

  return (f: () => PayloadAction) => () =>
    dispatch(f())
}

export const use: TypedUseSelectorHook<RootState> = useSelector

export type AppSelector<T> = (state: RootState) => T

export const selector = <T>(f: AppSelector<T>): AppSelector<T> => f

export const getImageUrl = (path: string) => {
  return new URL(path, import.meta.url).href
}
