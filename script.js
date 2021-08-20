// Assignment Code


// definition of variables 

var generateBtn = document.querySelector("#generate");
var safePass = "";
var upLetter = "QWERTYUIOPLKJHGFDSAZXCVBNM";
var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
// (https://www.w3schools.com/charsets/ref_html_ascii.asp)
var ascii = "~}|{[_";
var globalLength = 0;
var basePass = ""; 


function getLength() {
  var length = document.getElementById('input_id').value;
  document.getElementById('alert').innerHTML = 'The desired password length is: ' + length;

  globalLength += length.value;

}

// function for getting desired userLength value (https://stackoverflow.com/questions/48070987/how-to-get-user-input-from-javascript-form) 

//(https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript)


// https://developer.mozilla.org/en-US/docs/Web/API/Console/log
function makeBasePass() {

  
  for ( var i = 0; i < length; i++ ) {
    basePass += lowerLetter.charAt(Math.length(Math.random() * 
charactersLength));
 }

 alert(basePass)


 
}

// console.log(result.value);


function getUpLetter(){
  for ( var i = globalLength; i < globalLength; i++ ) {
    basePass += characters.charAt(Math.floor(Math.random() * document.getElementById('input_id').value));
 }
 return result;
}



function getLowerLetter(){

}

function getNumber(){


}

function getAscii(){


}

// https://stackoverflow.com/questions/16106701/how-to-generate-a-random-string-of-letters-and-numbers-in-javascript





// Write password to the #password input

//https://www.w3schools.com/Tags/att_input_type_password.asp
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

