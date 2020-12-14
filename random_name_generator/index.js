const fs = require("fs");

// readFile to get data from .txt file
function getData(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  });
}

// Convets data from string to array
function convertData(str) {
  return new Promise((resolve, reject) => {
    if (str.length === 0) {
      const err = new Error("String is empty so can't be converted");
      reject(err);
    }
    const arr = str.split("\n").filter((name) => name.length > 0);
    resolve(arr);
  });
}

// Selects random name from array
function getRandomName(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Capitalises name
function capitalize(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}

//Shuffle array position with Fisher-Yates
function shuffle(arr) {
  const copy = [...arr]; //destructure to copy
  for (let i = copy.length - 1; i > 0; i--) {
    // work backwards through each one
    const randomIndex = Math.floor(Math.random() * i); // get a random index and swap them
    let temp = copy[i];
    copy[i] = copy[randomIndex];
    copy[randomIndex] = temp;
  }
  return copy;
}

// Chunk array using reduce
function chunk(arr, size) {
  if (size > arr.length) {
    throw new Error("Chuck size is bigger than the group size");
  }
  return arr.reduce((result, item, index) => {
    const chunk = Math.floor(index / size);
    if (!result[chunk]) {
      result[chunk] = [];
    }
    result[chunk].push(item);
    return result;
  }, []);
}

// To generate random name:
getData("./random-name.txt")
  .then(convertData)
  .then(getRandomName)
  .then(capitalize)
  .then((name) => console.log(`Random student is: ${name}`))
  .catch((err) => console.log(`Caught Error: ${err.message}`));

getData("./random-name.txt")
  .then(convertData)
  .then(shuffle)
  .then((shuffleArray) => chunk(shuffleArray, 3)) //can't invoke function. can only declare a function that calls anothr function
  .then((chunkedArray) => console.log(chunkedArray))
  .catch((err) => console.log(`Caught Error: ${err.message}`));

// any value returned from .then will be implicitly converted into promise
