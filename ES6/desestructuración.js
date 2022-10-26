// Before ES6

const athlete = {
  name: 'Messi',
  sport: 'football',
  age: 35
}

let name = athlete.name;
let age = athlete.age;
let sport = athlete.sport;

console.log(name);
console.log(sport);
console.log(age);

// Desde ES6 
// Before ES6

const personaje = {
  nameF: 'Tony Stark',
  type: 'heroe',
  company: 'Marvel'
}

let { nameF, company, type } = personaje;

console.log(nameF);
console.log(type);
console.log(company);

// Desestructurando arrays
const players = ['Messi', 'Neymar', 'Maradona'];

const [player1, player2, player3] = players;

console.log(player1);
console.log(player2);
console.log(player3);

const heroes = [ 'Iron Man', 'Spider Man', 'Batman' ];

const [ hero1, hero2 ] = heroes;

console.log(hero1);
console.log(hero2);

const fruits = [ 'banana', 'orange', 'apple' ];

const [ fruit1, fruit2, fruit3, fruit4 ] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
console.log(fruit4); // Esto nos da undefined(esto porque no existe un cuarto elemento en el array)

const foods = [ 'pizza', 'empanadas', 'ceviche' ];

const [ food1, food2, food3, food4 = "Asado" ] = foods;

console.log(food1);
console.log(food2);
console.log(food3);
console.log(food4);

//Podemos ignorar elementos de un array

const saiyajin = [ 'Goku', 'Vegeta', 'Gohan'];

const [ familiaGoku1, , familiaGoku2 ] = saiyajin;

console.log(familiaGoku1);
console.log(familiaGoku2);

// Desestructurando objetos

const student = {
  nameS: 'Felipe',
}

const { nameS, career="Software"} = student;

// A diferencia de los arrays, en los objetos no importa el orden al desestructurar

const ironman = {
  nameI: 'Tony Stark',
  typeI: 'hero',
  companyI: 'Marvel'
}

const { nameI, typeI, compañia } = ironman;

console.log(nameI);
console.log(typeI);
console.log(compañia); // Esto nos dará undefined
// con esto nos damos cuenta que en los objetos debemos desestructurar con los nombres de variables que sean
// a alguna de las claves del objeto

const lenguajes = [ 'Javascript' ];

let [lenguaje1 = "Java", lenguaje2 = "Python" ] = lenguajes;

console.log(lenguaje1); // Imprime Javascript porque toma el valor desestructurado ya que si existe
console.log(lenguaje2); // Imprime Python 

// Podemos hacer swapping(intercambio) de variables

let num1 = 10;
let num2 = 30;

[ num1, num2 ] = [ num2, num1 ];

console.log(num1); // Imprime 30
console.log(num2); // Imprime 10

// Podemos asignar varios valores a una variable

const countrys = [ 'Italy', 'Mexico', 'Argentina', 'Brasil', 'Peru' ];

const [ country1, country2, ...countrysSudamerica ] = countrys;

console.log(country1);
console.log(country2);
console.log(countrysSudamerica);
// Usamos el operador spread al final, porque sino no vamos a tener los resultados esperados
// ya que el spread operator toma todos los elementos que no fueron desestructurados 
// hasta que este operador es usado 


// Podemos desestructurar arrays anidados

const cities = [ 'Buenos Aires', ['Madrid', 'Paris', 'Londres'] ];

const [ city1, [ city2, city3, city4 ] ] = cities;

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);

const lion = {
  habitat: 'selva',
  tipo: 'felino',
  salvaje: true,
  continentesLeon: [ 'Africa', 'Asia', 'Europa' ],
  extinct: false
}

const { habitat, tipo, salvaje, ...dondeExiste } = lion;

console.log(habitat);
console.log(tipo);
console.log(salvaje);
console.log(dondeExiste);
