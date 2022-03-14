const fetchForm = document.getElementById('fetchForm')
const titleInput = document.getElementById('titleInput')
const yearInput = document.getElementById('yearInput')
const delayInput = document.getElementById('delayInput')
const resultDisplay = document.getElementById('resultDisplay')

const apiUrl = 'http://www.omdbapi.com'
const apiKey = 'e86f12e3'

fetchForm.onsubmit = (e) => {
  e.preventDefault()

  resultDisplay.innerHTML = ''

  delay(delayInput.value)
    .then(() => fetchMovie(titleInput.value, yearInput.value))
    .then((movie) => (resultDisplay.innerHTML = JSON.stringify(movie)))
    .catch((err) => console.error(err))
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

function fetchMovie(title, year) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.open('GET', `${apiUrl}/?apikey=${apiKey}&t=${title}&y=${year}`)

    request.send()

    request.onload = () => {
      if (request.status != 200) {
        reject(
          new Error(`Fetch Error: ${request.status} ${request.statusText}`)
        )
      }
      resolve(JSON.parse(request.response))
    }

    request.onerror = () => {
      alert('Request Error')
      reject(
        new Error(`Request Error: ${request.status} ${request.statusText}`)
      )
    }
  })
}
