const mi = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'

const getCi = (moves = 0) => {
    return mi.substring(moves, mi.length) + mi.substring(0, moves)
}

const cesarCode = (message, moves = 0) => {
    let ci = getCi(moves)
    
    let code = message.split('').map(letter => {
        let index = mi.indexOf(letter)
        return index !== -1 ? ci[index] : letter
    })

    return code.join('')
}

const cesarDecode = (code, moves = 0) => {
    let ci = getCi(moves)

    let message = code.split('').map(letter => {
        let index = ci.indexOf(letter)
        return index !== -1 ? mi[index] : letter
    })

    return message.join('')
}

/// VIGENERE
const vigenereCode = (message, key) => {
    let code = message.split('').map((letter, index) => {
        let a = mi.indexOf(letter)
        let b = index % key.length
        b = mi.indexOf(key[b])

        return a !== -1 ? mi[(a + b) % message.length] : letter
    })

    return code.join('')
}

const vigenereDecode = (code, key) => {
    let message = code.split('').map((letter, index) => {
        let a = mi.indexOf(letter)
        let b = index % key.length

        b = mi.indexOf(key[b])
        if (a > -1) {
            console.log('a', a);
            console.log('b', b);
        }

        if (a !== -1) {
            console.log('decode letter', b - a);
        }
        return a !== -1 ? mi[(a - b)] : letter
    })

    return message.join('')
}