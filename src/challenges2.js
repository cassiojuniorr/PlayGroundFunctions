// Desafio 11
let teste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
function generatePhoneNumber(array) {
  // seu código aqui 
  let tel1 = []; 
  let tel2 = [];
  let tel3 = [];
  let resp = '';
  let rept = 0;
  let re = '';
  if (array.length != 11){
    return "Array com tamanho incorreto.";
  }
  for (let i = 0; i < array.length; i++){
    re = array[i];
    for (let cont = 0; cont < array.length; cont++){
      if (re == array[cont]){
        rept += 1;
      }
    }
  }

  for (let index = 0; index < array.length; index++){
    if(array[index] < 0 || array[index] > 9 || rept >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    } else {
      tel1.push('(' + array[0] + array[1] + ')');

      tel2.push(' ' + array[2] + array[3] + array[4] + array[5] + array[6]);
      
      tel3.push("-" + array[7] + array[8] + array[9] + array[10]);

      resp = tel1 + tel2 + tel3;
      return resp;
    }
  }
}
console.log(generatePhoneNumber(teste));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
