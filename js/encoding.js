// UTILS
const getCi = (mi, moves = 0) => {
    return mi.substring(moves, mi.length) + mi.substring(0, moves)
}

const buildColumns = (string, nroColumns) => {
    let cycle = nroColumns * 2 - 2
    let width = Math.floor(string.length / cycle) * cycle + string.length % cycle

    let arrayString = []
    while (nroColumns-- > 0) arrayString.push(Array(width))

    return arrayString
}

const iterateArrayStringDiagonally = (arrayString, callback) => {
    let width = arrayString[0].length
    let height = arrayString.length

    let x = 0, y = 0, yDir

    while (x++ < width) {
        callback(x, y, arrayString[y][x])

        if (!yDir) {
            yDir = 1
        } else if (y === 0 || y === height - 1) {
            yDir = -yDir
        }
        y += yDir
    }
}

const iterateArrayStringValues = (arrayString, callback) => {
    for (let y = 0; y < arrayString.length; y++) {
        for (let x = 0; x < arrayString[y].length; x++) {
            if (arrayString[y][x] !== undefined) callback(x, y, arrayString[y][x])
        }
    }
}

/// ENCODERS
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
 * @returns 
 */

const columnEncode = (alphabet, message, key) => {
    message = message.split('').filter(letter => alphabet.includes(letter)).join('')

    key = key.split('').filter((val, index) => index === key.indexOf(val))

    let sortKey = key.sort()
    let rows = Array(Number.parseInt((message.length + key.length - 1) / key.length))

    for (let index = 0; index < rows.length; index++) {
        let cols = message.substr(index * key.length, key.length).split('')
        while (cols.length < key.length) cols.push('X')
        rows[index] = cols
    }

    return sortKey
        .map(letter => rows.map(row => row[key.indexOf(letter)]).join(''))
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
 * 
 */
const monoEncode = (s) => {
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