[![version](https://img.shields.io/badge/0.0.1-fefe?version&label=version)](https://github.com/cartory/encoderr/tags)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/cartory/enCoderr/blob/master/LICENSE)

# Encoderr

## Algorithms Available

#### Encoding

| Algorith Name          | Alphabet | Param  | returns | Requires                       |
| ---------------------- | -------- | ------ | ------- | ------------------------------ |
| `Caesar`               | `a...z`  | number | string  | number > 0                     |
| `Vigenere`             | `a...z`  | string | string  | string `!Empty`                |
| `Zigzag`               | `a...z`  | number | string  | number > 0                     |
| `Mono Alphabet`        | `a...z`  | alpha  | string  | alpha.length = Alphabet.length |
| `Series`               | `a...z`  | none   | object  | none                           |
| `Row Transposition`    | `a...z`  | string | string  | string `!Empty`                |
| `Column Transposition` | `a...z`  | string | string  | string `!Empty`                |

#### Decoding

| Algorith Name          | Alphabet | Param  | returns | Requires                       |
| ---------------------- | -------- | ------ | ------- | ------------------------------ |
| `Caesar`               | `a...z`  | number | string  | number > 0                     |
| `Vigenere`             | `a...z`  | string | string  | string `!Empty`                |
| `Zigzag`               | `a...z`  | number | string  | number > 0                     |
| `Mono Alphabet`        | `a...z`  | alpha  | string  | alpha.length = Alphabet.length |
| `Series`               | `a...z`  | none   | string  | encode `First`                 |
| `Row Transposition`    | `a...z`  | string | string  | string `!Empty`                |
| `Column Transposition` | `a...z`  | string | string  | string `!Empty`                |

---

### Example

```js
import { encode, decode } from "encoderr";

let params = [
  "abcdefghijklmnñopqrstuvwxyz",
  "", // MESSAGE
  "2", // PARAM ACCORDING ENCODING/DECODING
];

const example = {
  encoding: ([alpha, text, moves]) => {
    moves = Number.parseInt(moves);
    if (!moves || moves < 1) return "Number Required";
    return encode.caesarEncode(alpha, text, moves);
  },
  decoding: ([alpha, text, moves]) => {
    moves = Number.parseInt(moves);
    if (!moves || moves < 1) return "Number Required";
    return encode.caesarEncode(alpha, text, moves);
  },
};

params[1] = "hello world";
console.log("message => ", params[1]);

params[1] = example.encoding(params);
console.log("encoded => ", params[1]);

params[1] = example.decoding(params);
console.log("decoded => ", params[1]);
```

## Built With

[![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://devdocs.io/javascript/) [![love](https://img.shields.io/badge/love-red?style=for-the-badge&logo=julia&logoColor=white)](https://devdocs.io/javascript/)

## Authors
**[`MelissaSanchez20`](https://github.com/MelissaSanchez20)**
**[`cartory`](https://github.com/cartory)**
**[`GaboAP`](https://github.com/GaboAP)**

See also the list of [contributors](https://github.com/cartory/encoderr/contributors) who participated in this project.
