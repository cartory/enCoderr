/**
 * by my Dear Friend https://github.com/toborochi 🥸
 */

const cipher_type = {
    FILA: 0,
    COLUMNA: 1,
}

class TranspositionCipher {
    constructor() {
        this.text = "";
        this.table = "";
        this.matrix = [[]];
        this.permutation = [];
        this.type = cipher_type.FILA;
    }

    setText(p) {
        this.text = p;
    }

    cipherText(t, k) {
        var tabla = [];
        this.table = "";
        var cifrado = "";
        var texto = t;

        var cols = Math.ceil((texto.length / k));

        for (var i = 0; i < k; ++i) {
            var j = i;
            var it = 0;
            var a = [];
            while (it < cols) {
                if (j >= texto.length) {
                    cifrado = cifrado.concat("X");
                } else {
                    cifrado += texto[j];
                }
                a.push(cifrado[cifrado.length - 1]);
                j += k;
                it++;
            }
            tabla.push(a);
        }


        this.matrix = tabla;

        if (this.type === cipher_type.COLUMNA) {
            var temp = [];
            for (var i = 0; i < cols; ++i) {
                var aux = [];
                for (var j = 0; j < k; ++j) {
                    aux.push(tabla[j][i]);
                }
                temp.push(aux);
            }
            this.matrix = temp;
        }

        return cifrado;
    }

    setType(t) {
        if (!t) {
            this.type = cipher_type.FILA;
        } else {
            this.type = cipher_type.COLUMNA;
        }
    }

    decrypyText(t, k) {
        var texto = t;
        var original = "";

        var cols = Math.ceil((texto.length / k));
        console.log(cols);
        for (var i = 0; i < cols; ++i) {
            var j = i, it = 0;
            while (it < k) {
                if (j < texto.length) {
                    console.log(texto[j]);
                    original += texto[j];
                }

                j += cols;

                it++;
            }
        }

        return original;
    }

    setKeyfromArray(p) {
        this.permutation = p;
    }
}

const vlada = new TranspositionCipher()