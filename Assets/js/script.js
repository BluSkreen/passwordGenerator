// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
function generatePassword() {
  var length; // track length of password
  var charSet = []; // hold characters used for password
  var passwordGen = []; // hold users password

  // Get a number between 8 and 128 for length
  do {
    length = window.prompt("Choose a length between 8 and 128");
  } while ((length < 8) || (length > 128));

  // ask user what character to use
  // append characters to charSet is user enters 'y'
  do {
    // lowercase option
    var choice1 = window.prompt("Do you want to include lowercase?(type y/n)").toUpperCase();
    if (choice1 === "Y") { charSet.push(...lowercase);}
    // uppercase option
    var choice2 = window.prompt("Do you want to include uppercase?(type y/n)").toUpperCase();
    if (choice2 === "Y") { charSet.push(...uppercase); }
    // numeric option
    var choice3 = window.prompt("Do you want to include numeric?(type y/n)").toUpperCase();
    if (choice3 === "Y") { charSet.push(...numeric); }
    // specialCharacters option
    var choice4 = window.prompt("Do you want to include specialCharacters?(type y/n)").toUpperCase();
    if (choice4 === "Y") { charSet.push(...specialCharacters);}

  } while ((choice1 !== "Y") && (choice2 !== "Y") && (choice3 !== "Y") && (choice4 !== "Y"));
  // console.log(charSet);

  // append a random character to the password "length" amount of times
  for (var i = 0; i < length; i++) {
    passwordGen += charSet[Math.floor(Math.random() * charSet.length)];
  }
  // console.log(passwordGen);
  return passwordGen;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
