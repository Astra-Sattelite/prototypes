import React, { useRef, useEffect, KeyboardEvent } from 'react'

import { Enemy, Player } from './GameClasses'
import "./sass/game.sass"
import * as GO from "./GameObjects"

type CanvasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>


export const PurgeHereticsGame: React.FC<CanvasProps> = ({ ...props }) => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null)

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

    const player = new Player(115, 115, 30, "blue")

    const enemy = new Enemy(50, 115, 30, "red")

    player.draw(ctx)

    enemy.draw(ctx)

    const update = () => {
      requestAnimationFrame(update)

      player.update(ctx)
    }

    update()

    window.addEventListener("keydown", (e) => keyTracker(e))

    const keyTracker = (e: globalThis.KeyboardEvent) => {
      console.log("Pressed: " + e.key)
      
      e.key === "w" ? player.move(ctx, 0, -4) : ""
      e.key === "a" ? player.move(ctx, -4, 0) : ""
      e.key === "s" ? player.move(ctx, 0, 4) : ""
      e.key === "d" ? player.move(ctx, 4, 0) : ""

      // enemy.moveToPlayer(ctx, player.x - 1, player.y - 1)
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