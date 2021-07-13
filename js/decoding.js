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