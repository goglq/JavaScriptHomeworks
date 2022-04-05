const canvas = document.getElementById('graph-canvas')

const MAX_VALUE = 600
const OFFSET = 100

const years = [2016, 2017, 2018, 2019, 2020]
const earnings = [20000, 25000, 18000, 22000, 11000]

canvas.width = 800
canvas.height = 800

const ctx = canvas.getContext('2d')

drawAxis()
drawMeasures()
drawGraph()

function drawAxis() {
  ctx.fillStyle = 'black'

  ctx.moveTo(OFFSET, OFFSET)
  ctx.lineTo(OFFSET, MAX_VALUE + OFFSET)
  ctx.lineTo(800, MAX_VALUE + OFFSET)
  ctx.stroke()
}

function drawMeasures() {
  ctx.fillStyle = 'red'
  for (let i = 0; i < years.length; i++) {
    ctx.fillText(years[i], 150 * i + OFFSET, MAX_VALUE + OFFSET + 50)
  }

  for (let i = 0; i < 7; i++) {
    ctx.fillText(100 * i, OFFSET - 50, (6 - i) * 100 + OFFSET)
  }
}

function drawGraph() {
  ctx.fillStyle = 'black'
  console.log('drawing graph')
  ctx.moveTo(OFFSET, MAX_VALUE + OFFSET - earnings[0] / 100)
  for (let i = 1; i < earnings.length; i++) {
    ctx.lineTo(150 * i + OFFSET, MAX_VALUE + OFFSET - earnings[i] / 100)
  }
  ctx.stroke()
}
