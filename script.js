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
let password = [];
let randomChar;
let randomItem;
let spCharChoice;
let numCharChoice;
let lowCaseChar;
let upperCaseChar;

// Function to prompt user for password options
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

getPasswordOptions()

passwordLength = parseInt(passwordLength);

// Function for getting a random element from an array
function getArray() {
  if (spCharChoice === "y") {
    passwordArray = passwordArray.concat(specialCharacters);
  } else if (spCharChoice === "no") {
  	passwordArray = passwordArray;
  }
  if (numCharChoice === "y") {
    passwordArray = passwordArray.concat(numericCharacters);
  } else if (numCharChoice === "no") {
  	passwordArray = passwordArray.concat(specialCharacters);
  }
  if (lowCaseChar === "y") {
    passwordArray = passwordArray.concat(lowerCasedCharacters);
  } else if (lowCaseChar === "no") {
  	passwordArray = passwordArray.concat(specialCharacters, numericCharacters);
  }
  if (upperCaseChar === "y") {
    passwordArray = passwordArray.concat(upperCasedCharacters);
  } else if (upperCaseChar === "no") {
  	passwordArray = passwordArray.concat(specialCharacters, numericCharacters, lowerCasedCharacters);
  }

  for (let i = passwordArray.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = passwordArray[i];
    passwordArray[i] = passwordArray[j];
    passwordArray[j] = k;
  }
}

getArray()

console.log("Password length is: " + passwordLength);

function getRandom() {
  randomItem = passwordArray[Math.floor(Math.random() * passwordArray.length)];
  password.push(randomItem)
}

console.log("Password array is: " + passwordArray);

// Function to generate password with user input
function generatePassword() {
  for (let i = 0; i < passwordLength; i++) {
    getRandom()
  }
  
  password = password.join('');
}

generatePassword()

console.log("Password array length is: " + passwordArray.length);
console.log("Password is: " + password);


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener('click', writePassword);

writePassword()