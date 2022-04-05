const field = document.querySelector('#field')
const ball = document.getElementById('ball')
const score = document.querySelector('#score')

let currentScore = 0

const increaseScore = () => {
  currentScore += 1
  score.innerHTML = currentScore
}

const createGrass = () => {
  const grass = document.createElement('div')
  grass.classList.add('grass')
  return grass
}

const createGole = () => {
  const gole = document.createElement('div')
  gole.classList.add('gole')
  return gole
}

//X:360 Y:100
//X:740 Y:100

const spawnX = 540
const spawnY = 860

let currentPositionX = spawnX
let currentPositionY = spawnY

ball.style.top = spawnY + 'px'
ball.style.left = spawnX + 'px'

const motionValue = 10

const setPosition = (positionX, positionY) => {
  ball.style.top = positionY + 'px'
  ball.style.left = positionX + 'px'
  currentPositionY = positionY
  currentPositionX = positionX
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'w') {
    ball.style.top = currentPositionY - motionValue + 'px'
    currentPositionY -= motionValue
  } else if (e.key === 's') {
    ball.style.top = currentPositionY + motionValue + 'px'
    currentPositionY += motionValue
  }

  if (e.key === 'a') {
    ball.style.left = currentPositionX - motionValue + 'px'
    currentPositionX -= motionValue
  } else if (e.key === 'd') {
    ball.style.left = currentPositionX + motionValue + 'px'
    currentPositionX += motionValue
  }

  if (
    currentPositionX >= 360 &&
    currentPositionX <= 740 &&
    currentPositionY == 100
  ) {
    console.log('GOLE')
    increaseScore()
    setPosition(spawnX, spawnY)
  }

  console.log(`X: ${currentPositionX} Y: ${currentPositionY}`)
})

const map = [
  '..........',
  '...****...',
  '..........',
  '..........',
  '..........',
  '..........',
  '..........',
  '..........',
  '..........',
  '..........',
]

for (const row of map) {
  console.log(row)
  for (const el of row) {
    if (el === '.') {
      field.appendChild(createGrass())
    } else if (el === '*') {
      field.appendChild(createGole())
    }
  }
}
