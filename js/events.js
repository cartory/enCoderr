// CONSTANTS
let encode = true

// DOCUMENT ELEMENTS 
const select = document.getElementById('coder')

const cardLeft = document.getElementById('info-left')
const cardRight = document.getElementById('info-right')

const textLeft = document.getElementById('text-left')
const textRight = document.getElementById('text-right')

// LISTENERS
select.addEventListener('change', ({ target }) => {
    encode = target.value === 'encode'
    if (encode) {
        cardLeft.innerHTML = 'Text to Encode'
        cardRight.innerHTML = 'Encoded Text'
    } else {
        cardLeft.innerHTML = 'Text to Decode'
        cardRight.innerHTML = 'Decoded Text'
    }
})

textLeft.addEventListener('input', ({ target }) => {
    textRight.innerHTML = target.value
})