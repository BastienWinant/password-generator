const passwordFields = document.querySelectorAll(".password-field")

const includeNumbersInput = document.querySelector("#include-numbers");
const includeSpecCharsInput = document.querySelector("#include-special-chars");
const passwordLengthInput = document.querySelector("#length");

const passwordActions = document.querySelectorAll(".password-action");

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specChars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let darkMode = false;
const darkmodeToggle = document.querySelector(".darkmode-switch");

const maxLength = 20;
const minLength = 1;

const errorMessage = document.querySelector(".error-alert");

function switchDarkmode() {
  darkMode = !darkMode;

  if (darkMode) {
    darkmodeToggle.classList.add("medium-opacity");
  } else {
    darkmodeToggle.classList.remove("medium-opacity");
  }
}

function generatePassword() {
  let characters = [...letters];

  if (includeNumbersInput.checked) {
    characters.push(...numbers);
  }

  if (includeSpecCharsInput.checked) {
    characters.push(...specChars);
  }

  let passwordLength = parseInt(passwordLengthInput.value);
  let password = "";
  
  if ((isNaN(passwordLength)) || (passwordLength < minLength) || (passwordLength > maxLength)) {
    errorMessage.classList.remove("no-display");
    return password;
  }

  for (let i = 0; i < passwordLength; i++) {
    password += characters[Math.floor(characters.length * Math.random())];
  }

  return password;
}

function newPassword() {
  errorMessage.classList.add("no-display");

  for (let i = 0; i < passwordFields.length; i++) {
    passwordFields[i].textContent = generatePassword();
  }
}

function copyToClipboard(obj) {
  const passwordField = obj.parentNode.firstElementChild;
  navigator.clipboard.writeText(passwordField.textContent);
}

document.addEventListener("DOMContentLoaded", () => {});