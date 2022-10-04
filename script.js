// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

function getPasswordOptions() {
  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }
  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }
  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128 ) {
    alert ('Password length must be less than 128 characters')
    return null;
  }
  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );
  // Variable to store boolean regarding the inclusion of numeric characters
  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );
  // Variable to store boolean regarding the inclusion of lowercase characters
  var hasLowercasedCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );
  // Variable to store boolean regarding the inclusion of uppercase characters
  var hasUppercasedCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );
  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (hasSpecialCharacters==false && hasNumericCharacters==false && hasLowercasedCharacters==false && hasUppercasedCharacters==false) {
    alert ('Cannot generate a password without parameters')
    return null;
  }
  // Object to store user input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowercasedCharacters: hasLowercasedCharacters,
    hasUppercasedCharacters: hasUppercasedCharacters
  };

  return passwordOptions;
};

// var stewOne = [];
// var stewTwo = [];
// var stewThree = [];
// var stewDone = [];
// var blankArray = [];

function generatePassword() {
  var options = getPasswordOptions();
  // If special true, combine with blankArray, otherwise move blankArray forward. 
  if (options.hasSpecialCharacters==true) {
      stewOne = specialCharacters.concat(blankArray);
    } else {
      stewOne = [...blankArray]
    }
  // If numeric true, combine with previous array, otherwise move previous array forward. 
    if (options.hasNumericCharacters==true) {
      stewTwo = numericCharacters.concat(stewOne);
    } else {
      stewTwo = [...stewOne]
    }
  // If lowercase true, combine with previous array, otherwise move previous array forward. 
    if (options.hasLowercasedCharacters==true) {
      stewThree = lowerCasedCharacters.concat(stewTwo);
    } else {
      stewThree = [...stewTwo]
    }
  // If uppercase true, combine with previous array, otherwise move previous array forward. 
    if (options.hasUppercasedCharacters==true) {
      stewDone = upperCasedCharacters.concat(stewThree);
    } else {
      stewDone = [...stewThree]
    }
  // calls the getRandom function, using the final array. Returns the password.
    // for (let i = 0; i < options.length; i++) {
    //   return getRandom (stewDone)
    // };
    let i = 0;
    while (i < options.length) {
      i++;
      getRandom (stewDone);
    }
}

// Write password to the #password input
function writePassword() {
  // 1)
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var blankArray = [];
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
  '.',
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
  'z',
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
  'Z',
];

