function getRandomNumber( upper ) {
    var randomNumber = Math.floor( Math.random() * upper ) + 1; 
      return randomNumber;
  }
  
  console.log(getRandomNumber(6));
  console.log(getRandomNumber(49));
  console.log(getRandomNumber(100));
  console.log(getRandomNumber(50));
  
  function getArea(width, length, unit) {
    var area = width * length;
       return area + " " + unit;
  }
  
  console.log(getArea(10, 20, 'sqr ft'));