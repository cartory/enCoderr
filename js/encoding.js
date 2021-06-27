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
    message = message.replaceAll(' ', '')
    let code = message.split('').map((letter, index) => {
        let a = mi.indexOf(letter)
        let b = index % key.length
        b = mi.indexOf(key[b])
        return a !== -1 ? mi[(a + b) % mi.length] : letter
    })

    return code.join('').match(/.{1,5}/g).join(' ')
}