// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = prompt("Please choose a password length of 8-128 characters.")
var lowercaseTypes = prompt("Would you like to include lowercase characters?")
var uppercaseTypes = prompt("Would you like to include uppercase characters?")
var numericalTypes = prompt("Would you like to include numerical characters?")
var specialTypes = prompt("Would you like to include special characters?")

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numerical = "0123456789";
var specialChar = "!@#$%^&*()-+";

console.log(lowerCase);

var include = '';

if (lowerCaseTypes = "yes"){
  include += (lowerCase);
}

if (uppercaseTypes = "yes") {
  include += (upperCase);
}

console.log(lowerCase);

if (numericalTypes = "yes") {
  include += numerical
}

if (specialTypes = "yes") {
  include += specialChar
}

var keyword = ''

  for (var i = 0; i < passwordLength; i++){
    keyword = keyword + lowercase.charAt((Math.floor(Math.random() * lowercase.length)));
  }

// Write password to the #password input



function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
