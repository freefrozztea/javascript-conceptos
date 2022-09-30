// Retorna verdadero o falso si el valor es un entero o no respectivamente
console.log(Number.isInteger(10));
// Retorna veradero o falso dependiendo de si un numero es un entero seguro
// Los enteros seguros consisten en todos los enteros desde -(2⁵³ -1) hasta (2⁵³ -1) inclusive
console.log(Number.isSafeInteger(32));
// Nos devuelve verdadero si el número es finito, sino devuelve falso
console.log(Number.isFinite(10/0));
// Devuelve true si el valor es un NaN(Not is a Number), sino devuelve false
console.log(Number.isNaN(10));
