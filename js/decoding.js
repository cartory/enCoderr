
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
        return index !== -1 ? mi[index] : letter
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
    let res = message.split('').map((letter, index) => {
        let a = mi.indexOf(letter)
        let b = index % key.length

        b = mi.indexOf(key[b])


        return a !== -1 ? mi[(a + b) % message.length] : letter
    })

    return res.join('')
}