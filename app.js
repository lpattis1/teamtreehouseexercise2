// Initial variables
const userInput = prompt("Enter whatever you like.");
const inputToNum = parseInt(userInput.length);

// Randomized number
function randomize(usernum) {
  const randomNum = Math.floor(Math.random() * usernum) + 1;
  document.querySelector(
    "main"
  ).innerHTML = `<h1>Your random number is: <span>${randomNum}</span></h1>`;
}

// Call the function
randomize(inputToNum);
