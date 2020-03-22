class VigenereCipheringMachine {
    constructor(isDirect=true) {
        this.isDirect = isDirect;
        this._table = this._generateCipherTable();
    }

    _checkParams(message, key) {
        if (typeof message === 'undefined' || typeof key === 'undefined')
            throw new Error();
    }

    _generateCipherTable() {
        const table = {};

        [...Array(26)]
            .forEach((el, ind) => table[String.fromCharCode(ind + 65)] = ind )

        return table;
    }

    _encryptChar(char, key){
        if  (isNaN(this._table[char])) {
            return char;
        }
        
        const shiftedCode = (this._table[char] + this._table[key] ) % 26;

        return String.fromCharCode(shiftedCode + 65);
    }

    _decryptChar(char, key){
        if  (isNaN(this._table[char])) {
            return char;
        }

        const shiftedCode = (this._table[char] - this._table[key] ) % 26;

        return String.fromCharCode(shiftedCode >= 0 ? shiftedCode + 65 : shiftedCode + 91);
    }

    encrypt(message, key) {
        const repeatTimes = message.length / key.length + 1 ^0;
        const repeated = key.toUpperCase().repeat(repeatTimes);

        let nonCharsCounter = 0;
        const result = message
            .toUpperCase()
            .split('')
            .map((el, ind) => {
                if (/[ ]/.test(el)) {
                    nonCharsCounter++;
                }
                return this._encryptChar(el, repeated[ind - nonCharsCounter])
            })

        if (!this.isDirect) {
            result.reverse();
        }
    
        return result.join('');
    }

    decrypt(encryptedMessage, key) {
        const repeatTimes = encryptedMessage.length / key.length + 1 ^0;
        const repeated = key.toUpperCase().repeat(repeatTimes);

        let nonCharsCounter = 0;
        const result = encryptedMessage
            .toUpperCase()
            .split('')
            .map((el, ind) => {
                if (/[ ]/.test(el)) {
                    nonCharsCounter++;
                }
                return this._decryptChar(el, repeated[ind - nonCharsCounter])
        })
    
        if (!this.isDirect) {
            result.reverse();
        }

        return  result.join('');
    }
}

module.exports = VigenereCipheringMachine;