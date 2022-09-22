// let es una palabra reservada que usamos para declarar un variable 
// con alcance de bloque(block-scoped)

let num = 100;

// una variable let no puede ser redeclarada
// Hacer esto nos tiraría un error:
// let num = 0;
// SyntaxError: Identifier 'num' has already been declared
// Esto quiere decir que la variable num ya existe y no puede ser redeclarada

// Las variables adentro de un bloque de {} no puede ser accedida por fuera del bloque
{
    let numero = 100;
}

// Hacer esto nos tiraría un error:
// console.log(numero);
// ReferenceError: numero is not defined
// Esto quiere decir que para el contexto exterior al bloque la variable numero no está definida