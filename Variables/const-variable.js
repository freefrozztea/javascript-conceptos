// const es una palabra reservada que usamos para declarar un variable 
// con alcance de bloque(block-scoped) que va a ser constante
// Es decir, no podemos cambiar el valor de una variable constante una vez que esta 
// fue inicializada.
// No podemos declarar una constante sin inicializarla

// Hacer esto nos tiraría un error:
// const num;
// SyntaxError: Missing initializer in const declaration
// Esto significa que falta inicializar a la constante cuando se la declara

const num = 50;
// Hacer esto nos tiraría un error:
// num = 100;
// TypeError: Assignment to constant variable.
// Esto quiere decir que no se puede asignar un nuevo valor a una constante

// Arrays Constantes
// Podemos cambiar los elementos de un array constante
const week = ["Lunes", "Martes", "Miércoles", "Jueves"];
// Se muestran las siguientes dos formas de agregar elementos
// Luego explicaremos a fondo estas formas
week[4] = "Viernes";
week.push("Sábado");
// El método log nos mostrará por consola lo que se pasa como parámetro, 
// en este caso la variable week
console.log(week);
// Esto imprime [ 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ]

// Objetos Constantes
// Podemos cambiar las propiedades de un objeto constante
const person = { name:"Messi", number: 30, country: "Argentina" };
person.job = "Football player";
person.number = 10;
console.log(person);
// Esto imprime:
/*
{
  name: 'Messi',
  number: 10,
  country: 'Argentina',
  job: 'Football player'
}
*/