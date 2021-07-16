import { encoding, decoding, labelCoding } from './constants'

// CONSTANTS
let encode = true
let coding = 'caesar'
let params = [
    // ALPHABET
    'abcdefghijklmnñopqrstuvwxyz',
    // MESSAGE TEXT
    '',
    // FIRST PARAM ACCORDING METHOD ENCODING/ DECODING
    '2',
]

// DOCUMENT ELEMENTS 
const label = document.getElementById('coder')
const selectCoding = document.getElementById('coding')

const alphaField = document.getElementById('alpha')

// MOVES-KEY-...
const label1 = document.getElementById('label-1')
const field1 = document.getElementById('input-1')

const cardLeft = document.getElementById('info-left')
const cardCenter = document.getElementById('info-center')
const cardRight = document.getElementById('info-right')

const textLeft = document.getElementById('text-left')
const textRight = document.getElementById('text-right')

// UTILS
const writeText = () => {
    textRight.innerHTML = encode ? encoding[coding](params) : decoding[coding](params)
}

// LISTENERS
alphaField.addEventListener('input', ({ target }) => {
    params[0] = target.value
    writeText()
})

document.getElementById('switch').addEventListener('change', () => {
    let text = cardCenter.innerHTML

    if (encode) {
        label.innerHTML = "DECODING"
        cardLeft.innerHTML = 'Text to Encode'
        cardRight.innerHTML = 'Encoded Text'
        cardCenter.innerHTML = text.replace('dec', 'enc')
    } else {
        label.innerHTML = "ENCODING"
        cardLeft.innerHTML = 'Text to Decode'
        cardRight.innerHTML = 'Decoded Text'
        cardCenter.innerHTML = text.replace('enc', 'dec')
    }

    encode = !encode

    writeText()
})

selectCoding.addEventListener('change', ({ target }) => {
    let text = cardCenter.innerHTML
    label1.innerHTML = labelCoding[coding = target.value]

    params[2] = field1.value = coding === 'mono' ? 'qwertyuiopasdfghjklñzxcvbnm' : ''

    cardCenter.innerHTML = `${coding} ${text.substring(text.lastIndexOf(' '))}`
    writeText()
})

textLeft.addEventListener('input', ({ target }) => {
    params[1] = target.value
    writeText()
})

field1.addEventListener('input', ({ target }) => {
    params[2] = target.value
    writeText()
})