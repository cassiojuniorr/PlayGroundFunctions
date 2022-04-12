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
function highestCount(numbers) {
  // seu código aqui
  let max = numbers[0];
  let rep = 0;
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > max){
      max = numbers[i];
    }
  }
  for (let cont = 0; cont < numbers.length; cont++){
    if (max == numbers[cont]){
      rep += 1;
    }
  }
  return rep;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let d1 = Math.abs(mouse - cat1);
  let d2 = Math.abs(mouse - cat2);

  if (d1 < d2) {
    return 'cat1';
  } else if (d1 > d2) {
    return 'cat2';
  } else if (d1 == d2) {
    return 'os gatos trombam e o rato foge';
  }
}
  

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let resp = [];
  for (let index = 0; index < numbers.length; index++){
    if (numbers[index] % 3 != 0 && numbers[index] % 5 != 0){
      resp.push("bug!");
    } else if (numbers[index] % 3 == 0 && numbers[index] % 5 != 0){
      resp.push("fizz");
    } else if (numbers[index] % 5 == 0 && numbers[index] % 3 != 0){
      resp.push("buzz");
    } else if (numbers[index] % 3 == 0 && numbers[index] % 5 == 0){
      resp.push("fizzBuzz");
    }
  }
  return resp;
}

// Desafio 9
function encode(pa1) {
  // seu código aqui
  let cha = '';
  for (let index = 0; index < pa1.length; index++){
    if (pa1[index] == 'a'){
      cha += 1;
    } else if (pa1[index] == 'e'){
      cha += 2;
    } else if (pa1[index] == 'i'){
      cha += 3;
    } else if (pa1[index] == 'o'){
      cha += 4;
    } else if (pa1[index] == 'u'){
      cha += 5;
    } else {
      cha += pa1[index];
    }
  }
  return cha;
}

function decode(pa2) {
  // seu código aqui
  let ach = '';
  for (let cont = 0; cont < pa2.length; cont++){
    if (pa2[cont] == 1){
      ach += 'a';
    } else if (pa2[cont] == 2){
      ach += 'e';
    } else if (pa2[cont] == 3){
      ach += 'i';
    } else if (pa2[cont] == 4){
      ach += 'o';
    } else if (pa2[cont] == 5){
      ach += 'u';
    } else {
      ach += pa2[cont];
    }
  }
  return ach;
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
