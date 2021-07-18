/**
 * Verifies if number is prime
 * @param {number} num 
 * @returns {boolean}
 */
const isPrime = (num) => {
    let sqrtNum = Math.floor(Math.sqrt(num))
    while (sqrtNum > 1) {
        if (num % sqrtNum-- === 0) return false
    }

    return true && num > 1
}

/**
 * Zigag util function
 * @param {string} string 
 * @param {number} nroColumns 
 * @returns {string[]}
 */
const buildColumns = (string, nroColumns) => {
    let cycle = nroColumns * 2 - 2
    let width = Math.floor(string.length / cycle) * cycle + string.length % cycle

    let arrayString = []
    while (nroColumns-- > 0) arrayString.push(Array(width))

    return arrayString
}

/**
 * Builds new Alphabet according moves number
 * @param {string} mi 
 * @param {number} moves
 * @returns {string}
 */
const getCi = (mi, moves = 0) => {
    return mi.substring(moves, mi.length) + mi.substring(0, moves)
}

/**
 * zigzag util function
 * @param {string[]} arrayString 
 * @param {function} callback 
 */
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

/**
 * zigzag util function
 * @param {string[]} arrayString 
 * @param {function} callback 
 */
const iterateArrayStringValues = (arrayString, callback) => {
    for (let y = 0; y < arrayString.length; y++) {
        for (let x = 0; x < arrayString[y].length; x++) {
            if (arrayString[y][x] !== undefined) {
                callback(x, y, arrayString[y][x])
            }
        }
    }
}

/**
 * splits string according length > 0
 * @param {string} string 
 * @param {number} length 
 * @returns {string[]}
 */
const splitStringbyLength = (string, length) => {
    let i = 0, res = []

    while (i < string.length) {
        res.push(string.substr(i, length))
        i += length
    }

    let last = res.pop()

    while (last.length < length) {
        last += 'x'
    }

    return [...res, last]
}


/**
 * enumerating the key order e.g cat => act
 * @param {string} string 
 */
const getOrderIndexAlpha = (key) => {
    let sortKey = key.split('').sort()

    return key
        .split('')
        .map((letter) => {
            let pos = sortKey.indexOf(letter)
            sortKey[pos] = null
            return pos
        })

}

module.exports = {
    isPrime,
    buildColumns,
    getCi,
    iterateArrayStringDiagonally,
    iterateArrayStringValues,
    splitStringbyLength,
    getOrderIndexAlpha,
}