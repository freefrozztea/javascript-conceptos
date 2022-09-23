// Para crear una herencia de clase, usamos la keyword extends
// Una clase creada con herencia de clase hereda todos los métodos de la clase padre
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hola, me llamo ${this.name}`);
  }
}

// heredando de la clase padre
class Player extends Person{

  constructor(name, number) {
    super(name);
    this.number = number;
  }

  printNumber() {
    console.log(`Juega con la ${this.number}`); 
  }
}
// La palabra super es usada para acceder y llamar funciones del padre de un objeto
// Acá la usamos para llamar al método constructor del objeto padre
// Cuando se usa en un constructor, se debe usar antes que la palabra this sea usada
// También puede usarse para llamar otras funciones del objeto padre de esta forma: super.nombreMetodo

let mejorJugador = new Player('Messi', 30);
mejorJugador.greet();
mejorJugador.printNumber();