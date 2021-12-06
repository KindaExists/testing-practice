

function caesarCipher(string, shift) {
  const chars = string.split('');
  const shifted = chars.map(char => {
    const charValue = char.charCodeAt();

    // Note: Javascript's modulo does not work correctly with negative inputs
    // This can be fixed by using the following formula: [ ((input % n) + n) % n ]
    if (charValue >= 48 && charValue <= 57) {
      // Numerical Character
      return String.fromCharCode((((((charValue - 48) + shift) % 10) + 10) % 10) + 48);
    } else if (charValue >= 65 && charValue <= 90) {
      // Upper Case
      return String.fromCharCode((((((charValue - 65) + shift) % 26) + 26) % 26) + 65);
    } else if (charValue >= 97 && charValue <= 122) {
      // Lower Case
      return String.fromCharCode((((((charValue - 97) + shift) % 26) + 26) % 26) + 97);
    }

    return char;
  });
  return shifted.join('');
}

module.exports = caesarCipher;