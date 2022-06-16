export type Vector2 = {
  x: number
  y: number
}

export class Player {
  color: string
  x: number
  y: number
  r: number
  velocity: {x: number, y: number}
    
  constructor(x: number, y: number, r: number, color: string) {
    this.color = color
    this.x = x
    this.y = y
    this.r = r
    this.velocity = {x: 0, y: 0}
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()

    ctx.strokeStyle = this.color
    
    ctx.lineWidth = 5
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)


    ctx.stroke()
    ctx.closePath()
  }
  move(ctx: CanvasRenderingContext2D, x: number, y: number) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    this.draw(ctx)

    this.x += x
    this.y += y
  }
  update(ctx: CanvasRenderingContext2D) {

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    this.draw(ctx)

    this.x += 0
    this.y += 0
  }
}

export class Enemy extends Player {
  moveToPlayer(ctx: CanvasRenderingContext2D, x: number, y: number) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    this.draw(ctx)

    this.x += x
    this.y += y
  }
}