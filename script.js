// Assignment Code
var generateBtn = document.querySelector("#generate");


//Establishes prompts for password generation
var passwordLength = prompt("Please choose a password length of 8-128 characters.")
var lowercaseTypes = prompt("Would you like to include lowercase characters?")
var uppercaseTypes = prompt("Would you like to include uppercase characters?")
var numericalTypes = prompt("Would you like to include numerical characters?")
var specialTypes = prompt("Would you like to include special characters?")


//Function takes answers from prompts to generate password.  JIC, "include" code suggestions provided by https://www.youtube.com/watch?v=i6cX05cyIgc
function generate() {
  
let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numerical = '0123456789';
let specialChar = '!@#$%^&*()+?';

let include = '';

if (lowercaseTypes == "yes"){
  include += (lowerCase);
} else {''};

if (uppercaseTypes == "yes"){
  include += (upperCase);
} else {''};

if (numericalTypes == "yes") {
  include += (numerical)
} else {''};

if (specialTypes == "yes") {
  include += (specialChar)
} else {''};

let keyword = ''

  for (var i = 0; i < passwordLength; i++){
    keyword = keyword + include.charAt((Math.floor(Math.random() * include.length)));
  }

  return keyword
}

function generatePassword(){
  return generate();
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
