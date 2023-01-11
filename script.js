// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

let passwordArray = [];
let passwordLength;
let randomChar;
let randomItem;
let spCharChoice;
let numCharChoice;
let lowCaseChar;
let upperCaseChar;

function getPasswordOptions() {
    passwordLength = prompt("How long would you like your password to be? (Must be at least 10 characters and no more than 64 characters)")
    if (passwordLength < 10) {
      alert("Your password is too short. Please make it 10 characters or longer.");
      getPasswordOptions()
    } else if (passwordLength > 64) {
      alert("Your password is too long. Please make it 64 characters or fewer.");
      getPasswordOptions()
    }

    spCharChoice = prompt("Do you want to include a special character in your password? (y/n)");

    numCharChoice = prompt("Do you want to include a numeric character in your password? (y/n)");
    
    lowCaseChar = prompt("Do you want to include a lower case character in your password? (y/n)");
    
    upperCaseChar = prompt("Do you want to include an upper case character in your password? (y/n)");
    
    }

function getRandom() {
        if (spCharChoice === "y") {
            randomItem = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
            passwordArray.push(randomItem)
    } else if (spCharChoice === "n") {
            passwordArray.push("X");
        }
        if (numCharChoice === "y") {
            randomItem = numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
            passwordArray.push(randomItem)
    } else if (numCharChoice === "n") {
            passwordArray.push("Y");
    }
        if (lowCaseChar === "y") {
            randomItem = lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
            passwordArray.push(randomItem)
    } else if (lowCaseChar === "n") {
            passwordArray.push("Z");
    }
        if (upperCaseChar === "y") {
            randomItem = upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
            passwordArray.push(randomItem)
    } else if (upperCaseChar === "n") {
            passwordArray.push("0");
    }
}

getPasswordOptions()
getRandom()


for (let i = 0; i < passwordLength; i++) {
    getRandom()
  }

passwordArray.length = passwordArray.length / 4 - 1;


console.log(passwordLength);
console.log(passwordArray);
