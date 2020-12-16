// take input and process
// display on screen
function processNames(str) {
    if (str.length === 0) {
      throw err = new Error("String is empty so can't be converted");
    }
    const array = str.split(" ").filter((name) => name.length > 0);
    
    const arr = array.split(" ").map((word) => word[0].toUpperCase() + word.substring(1)).join(" ");
    console.log(typeof arr)
    return arr
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i); 
    let temp = copy[i];
    copy[i] = copy[randomIndex];
    copy[randomIndex] = temp;
  }
  return copy;
}

function getName() {
  const nameForm = document.getElementById("nameForm");
  return nameForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const nameInput = document.getElementById("nameInput");
    const nameInputArr = processNames(nameInput.value)
    console.log(typeof nameInputArr)
    const names = shuffle(nameInputArr)
    console.log(names)
  });
}

getName()

