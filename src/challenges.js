// Desafio 1
function compareTrue(n1, n2) {
  // seu código aqui
  if (n1 == true && n2 == true){
    return true;
  }else {
    return false;
  }  
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}


// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let resp = '';
  resp = frase.split(" ");
  return resp;
}

// Desafio 4
function concatName(array) {
  // seu código aqui  
  let i = array.length - 1;
  let resp = array[i];
  resp += ", " + array[0];
  return resp;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result = '';
  let v = wins * 3;
  result = v + ties;
  return result;
}

// Desafio 6
function highestCount() {
  // seu código aqui
  
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
