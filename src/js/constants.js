import { TranspositionCipher } from './transCol'

import {
    caesarEncode, vigenereEncode, zigzagEncode,
    monoEncode, seriesEncode, columnEncode, rowEncode
} from './encoding'

import {
    caesarDecode, vigenereDecode, zigzagDecode,
    monoDecode, seriesDecode, columnDecode, rowDecode
} from './decoding'

const vlada = new TranspositionCipher()

export const encoding = {
    caesar: ([alpha, text, moves]) => {
        moves = Number.parseInt(moves)
        if (!moves || moves < 1) return 'Number Required'
        return caesarEncode(alpha, text, moves)
    },

    vigenere: ([alpha, text, key]) => {
        if (key.length < 1) return 'Alpha String Required'
        return vigenereEncode(alpha, text, key)
    },

    zigzag: ([_, text, cols]) => {
        cols = Number.parseInt(cols)
        if (!cols || cols < 1) return 'Number Required'
        return zigzagEncode(text, cols)
    },

    mono: ([alpha, text, alphaCrypt]) => {
        if (alpha.length !== alphaCrypt.length) return "Alpha(s) don't Match"
        return monoEncode(alpha, text.toLowerCase(), alphaCrypt)
    },

    series: ([_, text]) => {
        let { arrayIndex, code } = seriesEncode(text)
        sessionStorage.setItem('series', JSON.stringify(arrayIndex))
        return code
    },

    col: ([_, text, key]) => {
        if (key.length < 1) return 'Alpha String Required'
        return columnEncode(text, key)
    },

    row: ([_, text, key]) => {
        if (key.length < 1) return 'Alpha String Required'
        return rowEncode(text.toLowerCase(), key)
    },

    colNum: ([_, text, key]) => {
        key = Number.parseInt(key)
        if (!key || key < 1) return 'Number Required'
        return vlada.cipherText(text, key)
    }
}

export const decoding = {
    caesar: ([alpha, text, moves]) => {
        moves = Number.parseInt(moves)
        if (!moves && moves !== 0) return 'Number Required'
        return caesarDecode(alpha, text, moves)
    },
    vigenere: ([alpha, text, key]) => {
        if (key.length < 1) return 'Alpha String Required'
        return vigenereDecode(alpha, text, key)
    },
    zigzag: ([_, text, cols]) => {
        cols = Number.parseInt(cols)
        if (!cols || cols < 1) return 'Number Required'
        return zigzagDecode(text, cols)
    },
    mono: ([alpha, text, alphaCrypt = alpha2]) => {
        if (alpha.length !== alphaCrypt.length) return "Alpha(s) don't Match"
        return monoDecode(alpha, text.toLowerCase(), alphaCrypt)
    },
    series: ([_, text]) => {
        let arrayIndex = sessionStorage.getItem('series')
        if (!arrayIndex) return 'Needing encode First For Matching'
        return seriesDecode(text, JSON.parse(arrayIndex))
    },
    col: ([alpha, text, key]) => {
        if (key.length < 1 || alpha.length < 1) return 'Alpha String Required'
        return columnDecode(text, key)
    },

    row: ([alpha, text, key]) => {
        if (key.length < 1 || alpha.length < 1) return 'Alpha String Required'
        return rowDecode(text.toLowerCase(), key)
    },

    colNum: ([_, text, key]) => {
        key = Number.parseInt(key)
        if (!key || key < 1) return 'Number Required'
        return vlada.decrypyText(text, key)
    }
}

export const labelCoding = {
    mono: '🔐 alpha',
    series: '🚫‼️',

    zigzag: '🧱 cols',
    caesar: '📐 moves',
    vigenere: '🔑 key',
    col: '🔑 key',
    row: '🔑  key',
    colNum: '🔑 keyNum',
}