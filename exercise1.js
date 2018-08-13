// Write a JavaScript function to check whether an `input` is a string or not.
let str1 = "cristina rojas";
let str2 = "2cristina2";
let str3 = 123;

let x = (str) => {
  if (isNaN(str)) {
    console.log('is string');
    return false;
  } else {
    console.log('is number');
    return true;
  }
}

x(str3);

// isNaN --> function determines whether a value is an illegal number and return true.
console.log(isNaN('hola')); // True
console.log(isNaN('2cristina2')); // True

console.log(isNaN(123)); // False
console.log(isNaN('123')); // False first convert the value in number and then evaluate.
