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

const characterArray = specialCharacters.concat(numericCharacters, upperCasedCharacters, lowerCasedCharacters);
function shuffle(characterArray) {
  for (let i = characterArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [characterArray[i], characterArray[j]] = [characterArray[j], characterArray[i]];
  }
}

// Function to prompt user for password options
let passwordLength;
function getPasswordOptions() {
  passwordLength = prompt("How long would you like your password to be? (Must be at least 10 characters and no more than 64 characters)")
  if (passwordLength < 10) {
    alert("Your password is too short. Please make it 10 characters or longer.");
    getPasswordOptions()
  } else if (passwordLength > 64) {
    alert("Your password is too long. Please make it 64 characters or fewer.");
    getPasswordOptions()
  }
}

getPasswordOptions()

let password = [];
let randomChar;

function getRandom() {
    randomChar = characterArray[Math.floor(Math.random() * characterArray.length)];
    return randomChar;
}
for (let i = 0; i < passwordLength; i++) {
  getRandom()
  console.log(getRandom(randomChar));
  password.push(randomChar);
}

// Function to generate password with user input

function generatePassword() {
  password.toString();
  alert("Your password is: \n" + password.join(""));
}

generatePassword()

// Get references to the #generate element

var generateBtn = document.querySelector('#generate');

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener('click', writePassword);