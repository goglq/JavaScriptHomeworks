const titleInput = $('#titleInput')
const yearInput = $('#yearInput')
const delayInput = $('#delayInput')
const resultDisplay = $('#resultDisplay')

const apiUrl = 'http://www.omdbapi.com'
const apiKey = 'e86f12e3'

$('#fetchForm').submit((e) => {
  e.preventDefault()

  resultDisplay.empty()

  delay(delayInput.val()).then(() => {
    $.get(
      `${apiUrl}/?apikey=${apiKey}&t=${titleInput.val()}&y=${yearInput.val()}`,
      (data) => {
        resultDisplay.append(JSON.stringify(data))
      }
    )
  })
})

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}
