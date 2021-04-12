// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var symbols = ['!','@','#','$','%','^','&','*','(',')'];
// Write password to the #password input

function getLetters() {
  for (var i = 0; i < letters.length; i++) {
    //const element = array[index];
    
  }
  //return String.letters(Math.floor(Math.random() * 26));
}

function getNumbers() {
  for(var i = 0; i < numbers.length; i++){

  }
  //return String.numbers(Math.floor(Math.random() * 10));
}

function getSymbols() {
  for (var i = 0; i < symbols.length; i++){

  }
  //return String.symbols(Math.floor(Math.random() * 10));
}

var password = {
  letter: getLetters,
  number: getNumbers,
  symbol: getSymbols,
};

function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
  passwordText.innerHTML = generatePassword();
  
  return (Math.floor(Math.random() * 10))
}

function generatePassword(){
  //for (var i = 0; i < password.length; i++) {
    return (Math.floor(Math.random() * 10))
  //}
  
  
  //return String.password(Math.floor(Math.random() * 10));
  //console.log(generatePassword)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
