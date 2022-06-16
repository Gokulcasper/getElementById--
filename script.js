// How to select DOM Elements

// 1. getElementById()
// 2. getElementsByClassName()
// 3. getElementsByTagName()
// 4. Finding Elements by css Selectors
// 5. querySelector and querySelectorAll()

let inputTxtId = document.getElementById("input-txt-id");
let inputButtonId = document.getElementById("input-button-id");
let inputGet = document.getElementById("input-get");

// console.log(inputTxtId, inputButtonId);

inputButtonId.addEventListener("click", () => {
  //   console.log(inputTxtId.value);
  inputGet.innerText = inputTxtId.value;
  //   document.write();
  //   alert("Saved...!");
});
