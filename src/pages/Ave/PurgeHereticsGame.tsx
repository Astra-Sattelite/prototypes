import React, { useRef, useEffect, KeyboardEvent } from 'react'

import { Enemy } from './GameClasses'
import "./sass/game.sass"
import * as GO from "./GameObjects"

type CanvasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>

export const PurgeHereticsGame: React.FC<CanvasProps> = ({ ...props }) => {

  const enemy = new Enemy(115, 115, 30)

  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const keyHandler = (e: React.KeyboardEvent) => e

  // document.onkeydown = (e: ) => {}

  // window.addEventListener("keydown", (e: React.KeyboardEvent<HTMLDivElement>) => {})

  useEffect(() => {

    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    canvas.width = window.innerWidth / 100 * 90
    canvas.height = window.innerHeight / 100 * 80

    const ctx = canvas.getContext("2d")

    if (!ctx) {
      return
    }

    enemy.draw(ctx)

    const updateEnemy = () => {
      requestAnimationFrame(updateEnemy)
      enemy.update(ctx)
    }

    updateEnemy()

    window.addEventListener("keydown", (e) => keyTracker(e))

    const keyTracker = (e: globalThis.KeyboardEvent) => {
      console.log("Pressed: " + e.key)
      e.key === "d" ? enemy.move(ctx, 2) : ""
      e.key === "a" ? enemy.move(ctx, -2) : ""
    }

  }, [])
  

  return (
    <div className="gameRootAve">
      <div className="boardContainer" >
        <canvas id="boardAve" className="boardAve" ref={canvasRef}  />
      </div>
    </div>
  )
}