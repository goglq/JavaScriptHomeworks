const canvas = document.getElementById('text-canvas')
const form = document.getElementById('color-text-form')
const nameInput = document.getElementById('name-input')
const colorInput = document.getElementById('color-input')

const coord = {
  x: 100,
  y: 100,
}

$('#up').click(() => {
  if (coord.y - 10 <= 0) return
  coord.y -= 10
})
$('#down').click(() => {
  if (coord.y >= canvas.height) return
  coord.y += 10
})
$('#left').click(() => {
  if (coord.x - 10 <= 0) return
  coord.x -= 10
})
$('#right').click(() => {
  if (coord.x >= canvas.width) return
  coord.x += 10
})

canvas.width = 800
canvas.height = 800

const ctx = canvas.getContext('2d')

ctx.fontStyle = '24px Arial'

form.onsubmit = (e) => {
  e.preventDefault()
  if (nameInput.value == '') return
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = colorInput.value
  ctx.fillText(nameInput.value, coord.x, coord.y)
}
