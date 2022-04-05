const grid = document.querySelector('#grid')
const score = document.querySelector('#score')

let currentScore = 0

const onClickCell = (e) => {
  if (e.target.slot > 6) {
    e.target.classList.add('coin')
    e.target.classList.remove('cell')
    score.innerHTML = ++currentScore
  } else {
    e.target.classList.add('revealed-cell')
    e.target.classList.remove('cell')
  }
}

for (let i = 0; i < 100; i++) {
  const cell = document.createElement('div')
  cell.classList.add('cell')
  cell.slot = Math.floor(Math.random() * 10)
  cell.onclick = onClickCell
  grid.append(cell)
}
