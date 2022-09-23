// Cuando queremos pasar un cantidad indefinida de parámetros podemos usar
// el parámetro rest

function suma(...args) {
  let suma = 0;

  for(let numero of args){
    suma = suma + numero;
  }

  return suma;
}

let result1 = suma(1, 2, 4, 6, 9);
let result2 = suma(1, 2, 3, 4, 9, 8, 4, 5, 6, 7);

console.log(result1);
console.log(result2);