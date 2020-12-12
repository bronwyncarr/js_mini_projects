'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Destructuring array to assign name to the values
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse);

const nested = [1, 2, [3, 4]];
const [i, , j] = nested;
console.log(i, j);
const [k, , [, l]] = nested;
console.log(k, l);

// if unsure of length can dset default value of 1
const howLong = [8, 9];
const [a = 1, b = 1, c = 1] = howLong;
console.log(a, b, c);

//Object destructing
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// To rename them restaurantName, restaurantHours, tags
const {
  name: restautantName,
  openingHours: restaurantHours,
  categories: tags,
} = restaurant;
console.log(restautantName, restaurantHours, tags);

// can rename to 'starters' and also use default values incase doesn't exist
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// spread - works for any iterable - ...arrayName unpacks array in that position
const firstArray = [1, 2, 3, 4]
const newArray = [9, 10, ...firstArray, 11, 12]

console.log(newArray) // as array
console.log(...newArray) ///unpacked

// joining arrays
const secondArray = [5, 6, 7, 8]
const firstAndSecond = [...firstArray, ...secondArray]
console.log(firstAndSecond)

// spread can be used on strings to unpack 'bron' into 'b' 'r' 'o' 'n'



