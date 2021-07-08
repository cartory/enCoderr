const getCi = (mi, moves = 0) => {
    return mi.substring(moves, mi.length) + mi.substring(0, moves)
}

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

// TRANSPOSITION BY COLUMNS
/**
 * 
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

let test = "cat"
let alpha = 'abcdefghijklmnñopqrstuvwxyz'

console.log('res => ', columnEncode(alpha, 'the sky is blue', 'cat'))