import React from "react"
import { ShowTime } from './src/components/landings/ShowTime'
import { Nihongo } from './src/components/landings/Nihongo'
import { AveMaria } from './src/components/landings/AveMaria'
import { HoloStore } from './src/components/landings/HoloStore'

export const roots: [JSX.Element, string][] = [
  [<ShowTime />, "/"],
  [<HoloStore />, "/holo"],
  [<AveMaria />, "/ave"],
  [<Nihongo />, "/ng"]
]
