const passwordContainers = document.querySelectorAll(".password-container");

const darkmodeToggleBtn = document.querySelector(".toggle-icon");
let darkMode = false;

let includeSpecialCharacters = false;
let includeNumbers = true;

function generatePassword() {
  const passwordLength = 12;

  const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialChars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
  "/"];

  let characters = [...letters];

  if (includeNumbers) {
    characters.push(...numbers);
  }

  if (includeSpecialCharacters) {
    characters.push(...specialChars);
  }

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += characters[Math.floor(characters.length * Math.random())]
  }

  console.log(password);

}
function newPassword() {
  console.log("Generating passwords...");
  generatePassword();
}

function switchMode() {
  darkMode = !darkMode;

  if (darkMode) {
    darkmodeToggleBtn.classList.add("medium-opacity");
  } else {
    darkmodeToggleBtn.classList.remove("medium-opacity");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello World");
})