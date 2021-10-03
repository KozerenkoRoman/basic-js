/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
    constructor() {
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.direct = arguments == null || arguments;
    }

    // getCharacter(letter) {
    //     return this.alphabet.includes(letter.toUpperCase()) ? letter.toUpperCase() : '';
    // }

    getKey(message, key) {
        while (message.length > key.length) key += key;
        return key.toUpperCase();
    }

    getVigenereSquare() {
        let vigenereSquare = [];
        for (let i = 0; i < this.alphabet.length; i++) {
            vigenereSquare[i] = this.alphabet.slice(i).concat(this.alphabet.slice(0, i));
        }
        return vigenereSquare;
    }

    encrypt(message, key) {
        // Ci = (Pi + Kj) mod 33
        let res = '';
        if (!message || !key) throw new Error('Incorrect arguments!');
        key = this.getKey(message, key);

        let j = 0;
        let vigenereSquare = this.getVigenereSquare();
        for (let i = 0; i < message.length; i++) {
            if (this.alphabet.indexOf(message[i].toUpperCase()) < 0) {
                res += message[i];
            } else {
                res += vigenereSquare[this.alphabet.indexOf(message[i].toUpperCase())][this.alphabet.indexOf(key[j])];
                j++;
            }
        }
        return this.direct ? res : res.split('').reverse().join('');
    }

    decrypt(message, key) {
        //Ci = (Pi + 33 - Kj) mod 33
        let res = '';
        if (!message || !key) throw new Error('Incorrect arguments!');
        key = this.getKey(message, key);

        let j = 0;
        let vigenereSquare = this.getVigenereSquare();
        for (let i = 0; i < message.length; i++) {
            if (this.alphabet.indexOf(message[i].toUpperCase()) < 0) {
                res += message[i];
            } else {
                // let row = this.alphabet.indexOf(key[j].toUpperCase());
                // let col = vigenereSquare[this.alphabet.indexOf(key[j].toUpperCase())].indexOf(message[i].toUpperCase());
                res += this.alphabet[vigenereSquare[this.alphabet.indexOf(key[j].toUpperCase())].indexOf(message[i].toUpperCase())];
                j++;
            }
        }
        return this.direct ? res : res.split('').reverse().join('');
    }


}
