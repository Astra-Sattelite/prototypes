import React from "react"
import { ShowTime } from './src/components/landing/ShowTime'
import { Nihongo } from './src/components/landing/Nihongo'
import { AveMaria } from './src/components/landing/AveMaria'
import { HoloStore } from './src/components/landing/HoloStore'

export const roots: [JSX.Element, string][] = [
  [<ShowTime />, "/"],
  [<HoloStore />, "/holo"],
  [<AveMaria />, "/ave"],
  [<Nihongo />, "/ng"]
]
