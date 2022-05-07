import React from "react"
import { MemoizedShowTime } from './src/pages/ShowTime/ShowTime'
import { Nihongo } from './src/pages/Nihongo/Nihongo'
import { AveMaria } from './src/pages/Ave/AveMaria'
import { HoloStore } from './src/pages/HoloStore/HoloStore'

export const roots: [JSX.Element, string][] = [
  [<MemoizedShowTime />, "/"],
  [<HoloStore />, "/holo"],
  [<AveMaria />, "/ave"],
  [<Nihongo />, "/ng"]
]
