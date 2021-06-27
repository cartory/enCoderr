// CONSTANTS
let encode = true
let alphabet = 'abcdefghijklmnñopqrstuvwxyz'

const encoding = {
    caesar: caesarEncode,
}

const decoding = {
    caesar: caesarDecode,
}

// DOCUMENT ELEMENTS 
const select = document.getElementById('coder')
const selectCoding = document.getElementById('coding')

const alphaField = document.getElementById('alpha')

// MOVES-KEY-...
const label1 = document.getElementById('label-1')
const field1 = document.getElementById('field-1')

const cardLeft = document.getElementById('info-left')
const cardCenter = document.getElementById('info-center')
const cardRight = document.getElementById('info-right')

const textLeft = document.getElementById('text-left')
const textRight = document.getElementById('text-right')

// LISTENERS
alphaField.addEventListener('input', ({ target }) => {
    alphabet = target.value
})

select.addEventListener('change', ({ target }) => {
    encode = target.value === 'encode'
    let text = cardCenter.innerHTML

    if (encode) {
        cardLeft.innerHTML = 'Text to Encode'
        cardRight.innerHTML = 'Encoded Text'
        cardCenter.innerHTML = text.replace('dec', 'enc')
    } else {
        cardLeft.innerHTML = 'Text to Decode'
        cardRight.innerHTML = 'Decoded Text'
        cardCenter.innerHTML = text.replace('enc', 'dec')
    }
})

textLeft.addEventListener('input', ({ target }) => {
    if (encode) {
        textRight.innerHTML = encoding['caesar'](alphabet, target.value, 3)
    } else {
        textRight.innerHTML = decoding['caesar'](alphabet, target.value, 3)
    }
})

selectCoding.addEventListener('change', ({ target }) => {
    // let text = cardCenter.innerHTML
    console.log('value', target.value);
    // let lastWord = text.substring(text.lastIndexOf(' '))
    // cardCenter.innerHTML = `${target.value} ${lastWord}`
    // console.log(cardCenter);
})