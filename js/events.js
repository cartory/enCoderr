// CONSTANTS
let matrix = []
let series = [[], '', '']
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

const encoding = {
    caesar: ([alpha, text, moves]) => {
        moves = Number.parseInt(moves)
        if (!moves || moves < 1) return 'Syntax Error'
        return caesarEncode(alpha, text, moves)
    },

    vigenere: ([alpha, text, key]) => {
        if (key.length < 1) return 'Empty Key'
        return vigenereEncode(alpha, text, key)
    },

    zigzag: ([_, text, cols]) => {
        cols = Number.parseInt(cols)
        if (!cols || cols < 1) return 'Syntax Error'
        return zigzagEncode(text, cols)
    },

    mono: ([alpha, text, alphaCrypt]) => {
        if (alpha.length !== alphaCrypt.length) return "Alphas don't Match"
        return monoEncode(alpha, text.toLowerCase(), alphaCrypt)
    },

    series: ([_, text]) => {
        let [order, code] = seriesEncode(text)
        series = [order, text, code]
        return code
    },

    col: ([alpha, text, key]) => {
        if (key.length < 1 || alpha.length < 1) return 'Param(s) Required'
        return columnEncode(text, key)
    },

    row: ([alpha, text, key]) => {
        if (key.length < 1 || alpha.length < 1) return 'Param(s) Required'
        return rowEncode(text.toLowerCase(), key)
    },

    colNum: ([_, text, key]) => {
        key = Number.parseInt(key)
        if (!key || key < 1) return 'Syntax Error'
        return vlada.cipherText(text, key)
    }
}

const decoding = {
    caesar: ([alpha, text, moves]) => {
        moves = Number.parseInt(moves)
        if (!moves && moves !== 0) return 'Syntax Error'
        return caesarDecode(alpha, text, moves)
    },
    vigenere: ([alpha, text, key]) => {
        if (key.length < 1) return 'Empty Key'
        return vigenereDecode(alpha, text, key)
    },
    zigzag: ([_, text, cols]) => {
        cols = Number.parseInt(cols)
        if (!cols || cols < 1) return 'Syntax Error'
        return zigzagDecode(text, cols)
    },
    mono: ([alpha, text, alphaCrypt = alpha2]) => {
        if (alpha.length !== alphaCrypt.length) return "Alphas don't Match"
        return monoDecode(alpha, text.toLowerCase(), alphaCrypt)
    },
    series: ([_, text]) => {
        if (text === series[2]) {
            return seriesDecode(series)
        }

        return monoDecode(text)
    },
    col: ([alpha, text, key]) => {
        if (key.length < 1 || alpha.length < 1) return 'Param(s) Required'
        return columnDecode(text, key)
    },

    row: ([alpha, text, key]) => {
        if (key.length < 1 || alpha.length < 1) return 'Param(s) Required'
        return rowDecode(text.toLowerCase(), key)
    },

    colNum: ([_, text, key]) => {
        key = Number.parseInt(key)
        if (!key || key < 1) return 'Syntax Error'
        return vlada.decrypyText(text, key)
    }
}

const labelCoding = {
    mono: '🔐 alpha',
    series: '🚫‼️',

    zigzag: '🧱 cols',
    caesar: '📐 moves',
    vigenere: '🔑 key',
    col: '🔑 key',
    row: '🔑  key',
    colNum: '🔑 keyNum',
}

// DOCUMENT ELEMENTS 
const select = document.getElementById('coder')
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
    if (encode) {
        textRight.innerHTML = encoding[coding](params)
    } else {
        textRight.innerHTML = decoding[coding](params)
    }
}

// LISTENERS
alphaField.addEventListener('input', ({ target }) => {
    params[0] = target.value
    writeText()
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