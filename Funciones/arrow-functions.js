// Las arrow functions o funciones flecha es una de las nuevas features que trajo ES6

let age = 30;

let intoBar = age < 18 ? () => console.log("No") : () => console.log("Si");

check();

/* ------------------------------------------- */

// Antes de ES6
let num = function (a, b) {
  return a * b;
};

// Usando arrow functions
let num1 = (a, b) => a * b;
