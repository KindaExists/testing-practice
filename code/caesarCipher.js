function shiftCharCode(charCode, shift, minCode, maxCode) {
  const range = (maxCode - minCode) + 1;

  const base = charCode - minCode;
  const shifted = (((base + shift) % range) + range) % range;
  return shifted + minCode;
}

export default function caesarCipher(string, shift) {
  const chars = string.split('');
  const shifted = chars.map(char => {
    const charCode = char.charCodeAt();

    // Note: Javascript's modulo does not work correctly with negative inputs
    // This can be fixed by using the following formula: [ ((input % n) + n) % n ]
    if (charCode >= 48 && charCode <= 57) {
      // Numerical Character
      return String.fromCharCode(shiftCharCode(charCode, shift, 48, 57));
    } else if (charCode >= 65 && charCode <= 90) {
      // Upper Case
      return String.fromCharCode(shiftCharCode(charCode, shift, 65, 90));
    } else if (charCode >= 97 && charCode <= 122) {
      // Lower Case
      return String.fromCharCode(shiftCharCode(charCode, shift, 97, 122));
    }

    return char;
  });
  return shifted.join('');
}