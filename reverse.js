// FIRST WAY
let reverse = (str) => {
  var reverseString = '';

  for (var i = str.length -1; i >=0 ; i-- ) {
    reverseString += str[i];
  }

  return reverseString;
}

reverse('hola '); // " aloh"


// SECOND WAY
let secondWayReverse = (str) => {
  let splitString = str.split(""); //  ["h", "e", "l", "l", "o"]
  let reverseArray = splitString.reverse(); // ["o", "l", "l", "e", "h"]
  let joinArray = reverseArray.join(""); //// "olleh"

  return joinArray;
}

secondWayReverse('hola '); // " aloh"

// string.split("")  Divide un STRING en un array de subcadenas y regresa el NUEVO ARRAY.
// array.reverse() Invierte los elementos de un array
// array.join()  Une los elementos de un array en una cadena y retorna la cadena.
