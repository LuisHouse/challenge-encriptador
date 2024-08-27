const emptyContent = document.getElementById("emptyContent");
const resultContainer = document.getElementById("result");
const resultField = document.getElementById("resultField");

const input = document.getElementById("user-input");

const btnEncrypt = document.querySelector(".btn-encriptar");
btnEncrypt.addEventListener("click", () => {
  emptyContent.style.display = "none";
  resultContainer.style.display = "flex";

  resultField.textContent = encrypt(input.value);
  input.value = "";
});

const btnDecrypt = document.querySelector(".btn-desencriptar");
btnDecrypt.addEventListener("click", () => {
  emptyContent.style.display = "none";
  resultContainer.style.display = "flex";

  resultField.textContent = decrypt(input.value);
  input.value = "";
});

function encrypt(str) {
  const characters = str.split("");
  const newValue = characters.map((c) => c.charCodeAt(0)).join("-");
  console.log({ str, characters, newValue });
  return newValue;
  //   return str
  //     .replaceAll("e", "23-")
  //     .replaceAll("s", "52-")
  //     .split("")
  //     .reverse()
  //     .join("");
}

function decrypt(str) {
  const characters = str.split("-");
  const newValue = String.fromCharCode(...characters);
  return newValue;
}
