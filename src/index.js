const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = "";

  // Loop through the input expression in steps of 10 (since each letter is encoded in 10 binary digits)
  for (let i = 0; i < expr.length; i += 10) {
    const morseCode = expr.slice(i, i + 10); // Get the current 10-digit binary sequence
    if (morseCode === "**********") {
      result += " "; // Handle space
    } else {
      let morseSymbol = "";
      for (let j = 0; j < 10; j += 2) {
        const code = morseCode.slice(j, j + 2);
        morseSymbol += code === "10" ? "." : code === "11" ? "-" : ""; // Convert binary to Morse code
      }
      result += MORSE_TABLE[morseSymbol]; // Convert Morse code to character using the table
    }
  }

  return result;
}

module.exports = {
  decode,
};
