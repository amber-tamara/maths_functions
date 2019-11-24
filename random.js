function getRandomNumber(lower, upper) {
  return Math.floor( Math.random() * (upper - lower + 1 )) + lower; //because the formula produces a value you could simply return the value(all a return statement does is return a value and it doesn't matter where that value comes from, it can be stored in a variable, but can also return a value from a function.
}

alert(getRandomNumber(30, 20));
alert(getRandomNumber(40, 50));
console.log(getRandomNumber(50, 100));