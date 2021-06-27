const caesarDecode = (code, moves = 0) => {
    let ci = getCi(moves)

    let message = code.split('').map(letter => {
        let index = ci.indexOf(letter)
        return index !== -1 ? mi[index] : letter
    })

    return message.join('')
}

const vigenereDecode = (mi, code, key) => {
    let res = message.split('').map((letter, index) => {
        let a = mi.indexOf(letter)
        let b = index % key.length

        b = mi.indexOf(key[b])


        return a !== -1 ? mi[(a + b) % message.length] : letter
    })

    return res.join('')
}