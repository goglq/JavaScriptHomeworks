const canvas = document.getElementById('chess-canvas')
canvas.width = 800
canvas.height = 800

const ctx = canvas.getContext('2d')

const TILE_SIZE = 50
const OFFSET = 100

ctx.fillStyle = 'gray'
ctx.strokeRect(OFFSET, OFFSET, TILE_SIZE * 8, TILE_SIZE * 8)

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    ctx.fillStyle = (i + j) % 2 === 0 ? 'white' : 'black'
    ctx.fillRect(
      j * TILE_SIZE + OFFSET,
      i * TILE_SIZE + OFFSET,
      TILE_SIZE,
      TILE_SIZE
    )
  }
}

for (let i = 1; i < 9; i++) {
  ctx.font = '14px Arial'
  ctx.fillStyle = 'black'
  ctx.fillText(
    i,
    OFFSET - TILE_SIZE / 3,
    TILE_SIZE * i - TILE_SIZE / 2 + OFFSET
  )
}

for (let i = 1; i < 9; i++) {
  ctx.font = '14px Arial'
  ctx.fillStyle = 'black'
  ctx.fillText(
    i,
    TILE_SIZE * i + OFFSET - TILE_SIZE / 2,
    TILE_SIZE * 8 + OFFSET / 5 + OFFSET
  )
}
