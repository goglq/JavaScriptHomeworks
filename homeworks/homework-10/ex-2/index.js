const lastNameForm = document.getElementById('lastNameForm')
const lastNameInput = document.getElementById('lastNameInput')
const resultDisplay = document.getElementById('resultDisplay')

lastNameForm.onsubmit = (e) => {
  e.preventDefault()

  makeUppercase(lastNameInput.value)
    .then((str) => convertStrToArray(str))
    .then((array) => reverseArray(array))
    .then((array) => makeStrFromArray(array))
    .then((result) => (resultDisplay.innerHTML = result))
}

function makeUppercase(str) {
  return new Promise((resolve) => {
    resolve(str.toUpperCase())
  })
}

function convertStrToArray(str) {
  return new Promise((resolve) => {
    resolve(str.split(''))
  })
}

function reverseArray(array) {
  return new Promise((resolve) => {
    resolve(array.reverse())
  })
}

function makeStrFromArray(array) {
  return new Promise((resolve) => {
    resolve(array.join(''))
  })
}
