// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var passwordLength = prompt("Please choose a password length of 8-128 characters.")
var lowercaseTypes = prompt("Would you like to include lowercase characters?")
var uppercaseTypes = prompt("Would you like to include uppercase characters?")
var numericalTypes = prompt("Would you like to include numerical characters?")
var specialTypes = prompt("Would you like to include special characters?")



var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numerical = "0123456789";
var specialChar = "!@#$%^&*()-+";



function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

var include = '';

if (lowerCaseTypes = "yes"){
  include.concat(lowerCase);
}

if (uppercaseTypes = "yes") {
  include.concat(upperCase);
}

console.log(include);

if (numericalTypes = "yes") {
  include += numerical
}

if (specialTypes = "yes") {
  include += specialChar
}


var keyword = ''

  for (var i = 0; i < passwordLength; i++){
    keyword = keyword + include.charAt((Math.floor(Math.random() * include.length)));
  }
  passwordText.value = password;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
