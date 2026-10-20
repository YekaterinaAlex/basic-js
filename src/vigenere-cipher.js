const { NotImplementedError } = require("../lib");

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

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    return this.process(message, key, true);
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    return this.process(message, key, false);
  }

  process(message, key, encrypt) {
    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (const char of message) {
      if (char >= "A" && char <= "Z") {
        const charCode = char.charCodeAt(0) - 65;
        const keyCode = key.charCodeAt(keyIndex % key.length) - 65;

        let newCode;

        if (encrypt) {
          newCode = (charCode + keyCode) % 26;
        } else {
          newCode = (charCode - keyCode + 26) % 26;
        }

        result += String.fromCharCode(newCode + 65);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
