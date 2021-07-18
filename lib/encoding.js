const {
    // caesar utils
    getCi,
    // series utils
    isPrime,
    // column/row utils
    getOrderIndexAlpha, splitStringbyLength,
    // ZigZag utils
    buildColumns, iterateArrayStringDiagonally, iterateArrayStringValues,
} = require('./utils')

/**
 * CryptoClassic - Caesar Encode
 * @param {string} mi is Alphabet
 * @param {string} message, text to be encoded
 * @param {number} moves, number of moves (moves > 0)
 * @returns {string} encoded string
 */
const caesarEncode = (mi, message, moves = 0) => {
    let ci = getCi(mi, moves)

    let code = message.split('').map(letter => {
        let index = mi.indexOf(letter)
        return index !== -1 ? ci[index] : letter
    })

    return code.join('')
}

/**
 * CryptoClassic - vigenere Encode
 * @param {string} mi, is alphabet
 * @param {string} message, text to be encoded
 * @param {string} key, key word to encode
 * @returns {string} encoded string
 */
const vigenereEncode = (mi, message, key) => {
    let chars = 0
    let code = message.split('').map((letter, index) => {
        let a = mi.indexOf(letter)
        chars += a > -1 ? 0 : 1
        let b = (index - chars) % key.length
        b = mi.indexOf(key[b])
        return a > -1 ? mi[(a + b) % mi.length] : letter
    })

    return code.join('')
}

/**
 * Transpositions by Columns
 * @param {string} alphabet 
 * @param {string} message 
 * @param {string} key 
 * @returns {string}
 */
const columnEncode = (text, key) => {
    // enumerating the key order e.g cat => act
    let sortKey = getOrderIndexAlpha(key)

    // calculating matrix
    let matrix = splitStringbyLength(text, key.length)

    // reading matrix according key
    return sortKey
        .map(pos => matrix.map(word => word.charAt(pos)).join(''))
        .join('')
}


/**
 * Zizag encoding
 * @param {string} string
 * @param {number} nroColumns 
 * @returns {string}
 */
const zigzagEncode = (string, nroColumns) => {
    const arrayString = buildColumns(string, nroColumns)
    const strArray = Array.from(string)
    iterateArrayStringDiagonally(arrayString, (x, y) => arrayString[y][x] = strArray.shift())

    let re = ''
    iterateArrayStringValues(arrayString, (x, y, val) => re += val)
    return re
}

/**
 * monoAlphabetic encoding
 * @param {string} s 
 * @returns {string}
 */
const monoEncode = (alpha, s, alphaCrypt) => {
    let res = ''

    for (let i = 0; i < s.length; i++) {
        const letter = s[i];

        let next = false

        for (let j = 0; j < alpha.length; j++) {
            const char = alpha[j];

            if (letter === char) {
                res += alphaCrypt[j]
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
 * Series Encoding
 * @param {string} message
 * @returns {string}
 */
const seriesEncode = (text) => {
    let m1 = [], m2 = [], m3 = [], left = []

    text.split('').forEach((_, index) => {
        if (index % 4 === 0) {
            m1.push(index)
        } else if (isPrime(index)) {
            m2.push(index)
        } else if (index % 2 === 0) {
            m3.push(index)
        } else {
            left.push(index)
        }
    })

    let arrayIndex = [m1, m2, m3, left]

    return {
        arrayIndex,
        code: arrayIndex
            .map(arr => arr.map(index => text[index]).join(''))
            .join('')
    }
}

/**
 * Transpositions by Rows
 * @param {string} alpha 
 * @param {string} text 
 * @param {string} key 
 * @returns {string}
 */
const rowEncode = (text, key) => {
    // enumerating the key order e.g cat => act
    let sortKey = getOrderIndexAlpha(key)
    let cols = splitStringbyLength(text, key.length)

    let res = Array(key.length)

    sortKey.forEach((pos, index) => {
        res[pos] = cols.map(word => word[index]).join('')
    })

    return res.join('')
}

module.exports = {
    monoEncode, vigenereEncode, zigzagEncode,
    caesarEncode, columnEncode, rowEncode, seriesEncode,
}