// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var passwordLength = prompt("Please choose a password length of 8-128 characters.")
var characterTypes = prompt("Please create a password using lowercase, uppercase, numeric, and/or special characters")

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  const values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-+";

  passwordText.value = password;

  for (var i = 0; i < values.length; i++){
    passwordText.value + values.charAt(Math.floor(Math.random() * characters.length)
  }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
