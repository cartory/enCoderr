const {
    // caesar utils
    getCi,
    // column/row utils
    splitStringbyLength, getOrderIndexAlpha,
    // zigzag utils
    buildColumns, iterateArrayStringDiagonally, iterateArrayStringValues,
} = require('./utils')

/**
 * CryptoClassic - Caesar Encode
 * @param {string} mi is Alphabet
 * @param {string} code, text to be decoded
 * @param {number} moves, number of moves (moves > 0)
 * @returns {string} decoded string
 */
const caesarDecode = (mi, code, moves = 0) => {
    let ci = getCi(mi, moves)

    let message = code.split('').map(letter => {
        let index = ci.indexOf(letter)
        return index < 0 ? letter : mi[index]
    })

    return message.join('')
}

/**
 * CryptoClassic - vigenere Encode
 * @param {string} mi, is alphabet
 * @param {string} code, text to be decoded
 * @param {string} key, key word to decode 
 * @returns {string} decoded string
 */
const vigenereDecode = (mi, code, key) => {
    let chars = 0
    let message = code.split('').map((letter, index) => {
        let a = mi.indexOf(letter)
        chars += a < 0 ? 1 : 0

        let b = (index - chars) % key.length
        b = mi.indexOf(key[b])

        let c = (a - b) % mi.length

        return a < 0 ? letter : c < 0 ? mi[mi.length + c] : mi[c]
    })

    return message.join('')
}

/**
 * ZigZag decoder
 * @param {string} string 
 * @param {number} nroColumns 
 * @returns {string}
 */
const zigzagDecode = (string, nroColumns) => {
    const arrayString = buildColumns(string, nroColumns)

    iterateArrayStringDiagonally(arrayString, (x, y) => arrayString[y][x] = '-')

    const strArray = Array.from(string)
    iterateArrayStringValues(arrayString, (x, y) => arrayString[y][x] = strArray.shift())

    let re = ''
    iterateArrayStringDiagonally(arrayString, (x, y, val) => re += val)
    return re
}

/**
 * monoAlphabetic decoding 
 * @param {string} s 
 * @returns {string}
 */
const monoDecode = (alpha, s, alphaCrypt) => {
    let res = ''

    for (let i = 0; i < s.length; i++) {
        const letter = s[i];

        let next = false

        for (let j = 0; j < alphaCrypt.length; j++) {
            const char = alphaCrypt[j];
            if (letter === char) {
                res += alpha[j]
                break;
            }

            next = !alpha.includes(letter)
            if (next) {
                res += letter
                break;
            }
        }

        if (next) continue
    }

    return res
}

/**
 * Series Decoding
 * @param {string} text 
 * @param {number[][]} arrayIndex 
 */
const seriesDecode = (text, arrayIndex) => {
    let arr = []
    arrayIndex.forEach(pos => arr.push(...pos))

    return arr
        .map((_, index) => text[arr.indexOf(index)])
        .join('')
}

/**
 * Transpositions by Columns
 * @param {string} message
 * @param {string} key
 * @returns {string}
 */
const columnDecode = (text, key) => {
    let sortKey = key.split('').sort()

    // enumerating the key order e.g cat => act
    sortKey = key.split('').map((letter) => {
        let pos = sortKey.indexOf(letter)
        sortKey[pos] = null
        return pos
    })

    let rows = Math.trunc((text.length + key.length - 1) / key.length)
    let cols = splitStringbyLength(text, rows)

    let res = ''
    for (let i = 0; i < rows; i++) {
        res += sortKey.map(pos => cols[pos].charAt(i)).join('')
    }

    return res
}

/**
 * Transpositions by Rows
 * @param {string} text 
 * @param {string} key 
 * @returns {string}
 */
const rowDecode = (text, key) => {
    // enumerating the key order e.g cat => act
    let sortKey = getOrderIndexAlpha(key)

    let rowCount = Math.trunc((text.length + key.length - 1) / key.length)

    let rows = splitStringbyLength(text, rowCount)

    let res = ''

    for (let i = 0; i < rowCount; i++) {
        res += sortKey.map(pos => rows[pos].charAt(i)).join('')
    }

    return res
}

module.exports = {
    monoDecode, vigenereDecode, zigzagDecode,
    caesarDecode, columnDecode, rowDecode, seriesDecode,
}