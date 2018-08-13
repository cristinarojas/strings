// Write a JavaScript function to check whether an `input` is a string or not.
let str1 = "cristina rojas";
let str2 = "2cristina2";
let str3 = 123;

let x = (str) => {
  if (isNaN(str)) {
    console.log('ilegal number - string')
  } else {
    console.log('legal number - number');
  }
}

x(str2);

// isNaN --> function determines whether a value is an illegal number and return true.
console.log(isNaN('hola')); // True
console.log(isNaN(123)); // False
console.log(isNaN('123')); // False first convert the value in number and then evaluate.
