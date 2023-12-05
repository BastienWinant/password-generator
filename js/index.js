const passwordFields = document.querySelectorAll(".password-field")

const includeNumbersInput = document.querySelector("#include-numbers");
const includeSpecCharsInput = document.querySelector("#include-special-chars");
const passwordLengthInput = document.querySelector("#length");

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specChars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePassword() {
  let characters = [...letters];

  if (includeNumbersInput.checked) {
    characters.push(...numbers);
  }

  if (includeSpecCharsInput.checked) {
    characters.push(...specChars);
  }

  let passwordLength = parseInt(passwordLengthInput.value);

  if ((isNaN(passwordLength)) || (passwordLength <= 0) || (passwordLength > 20)) {
    console.log("this will not work!");
  }

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += characters[Math.floor(characters.length * Math.random())];
  }

  return password;
}

function newPassword() {
  for (let i = 0; i < passwordFields.length; i++) {
    passwordFields[i].textContent = generatePassword();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello World");
});