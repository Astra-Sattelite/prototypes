
export class Enemy {
  x: number
  y: number
  r: number
    
  constructor(x: number, y: number, r: number) {
    this.x = x
    this.y = y
    this.r = r
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()

    ctx.strokeStyle = "red"
    
    ctx.lineWidth = 5
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)


    ctx.stroke()
    ctx.closePath()
  }
  move(ctx: CanvasRenderingContext2D, to: number) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    this.draw(ctx)

    this.x += to
  }
  update(ctx: CanvasRenderingContext2D) {

    // ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    // this.draw(ctx)

    // this.x += 1
    // this.y += 1 
  }
}