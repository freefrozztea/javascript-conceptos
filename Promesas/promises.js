// En Javascript una promesa es un buen camino para manejar operaciones asíncronas.
// Esto es usado para averiguar si la operación asíncrona se completó con éxito o no

// Una promesa puede tener 3 estados:
// - Pendiente
// - Cumplido
// - Rechazado

// Para crear una promesa podemos usar el constructor Promise()
// El constructor toma una función como argumento. La función acepta dos funciones como argumentos. 
// Estas son resolve() y reject()

// Si la promesa retorna satisfactoriamente, la función resolve() es llamada. En cambio si ocurre un error
// la función reject() es llamada

function dividir(dividendo, divisor) {
  return new Promise((resolve, reject) => {
    if (divisor == 0) {
      reject('no se puede dividir por cero')
    } else {
      resolve(dividendo / divisor)
    }
  })
}

// Podemos agregar operaciones una vez que la promesa fue resuelta. Podemos usar los métodos 
// then(), catch() y finally()

let division = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    if (divisor == 0) {
      reject('no se puede dividir por cero')
    } else {
      resolve(dividendo / divisor)
    }
  })
}

let countValue = new Promise(function(resolve, reject) {
  resolve("Promise resolved");
})

division(3, 0)
  .then(function successValue(result) {
    console.log(result);
  })
  .catch(error => {
    // throw new Error(error)
    console.log("Error:", error);
  });