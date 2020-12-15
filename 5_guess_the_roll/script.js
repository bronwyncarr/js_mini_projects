function userNumber(result) {
  const range = 6;
  if (!("total" in result)) {
    result.total = 0
  }
  return new Promise((resolve, reject) => {
    result.randomNum = Math.floor(Math.random() * range) + 1;
    const enteredNum = parseInt(window.prompt("Enter your guess..."));
    if (isNaN(enteredNum) || enteredNum <= 0 || enteredNum > range) {
      const err = new Error(`You must enter a number between 1 and ${range}. Please try again`)
      reject(err);
    }
    if (enteredNum === result.randomNum) {
      result.points = 2;
    } else if (enteredNum === result.randomNum - 1 || enteredNum === result.randomNum + 1 ) {
      result.points = 1;
    } else {
      result.points = 0;
    }
    result.total = result.total + result.points
    resolve(result);
  });
}

function tryAgain() {
  return new Promise((resolve, _reject) => {
    if (window.confirm("Do you want to continue?")) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
}

async function playGame(res) {
  try {
    const result = await userNumber(res);
    alert(`Random number was ${result.randomNum}. You scored ${result.points} points. Your total points are ${result.total}`);
    const playAgain = await tryAgain();
    playAgain ? playGame(result) : alert("Thanks for playing!");
  } catch (err) {
     alert(err);
  }
}
res = {}
playGame(res);


// const numForm = document.getElementById("num-form");
// numForm.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const nameInput = document.getElementById("nameInput")
// })