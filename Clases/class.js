// Las clases de Javascript son templates o plantillas para objetos de Javascript
// Usamos la keyword o palabra reservada class para crear una clase

// Sintaxis
class ClassName {

  constructor() {

  }

}

class Player {
  constructor(name, number) {
    this.name = name;
    this.number = number;
  }
}

const player = new Player("Messi", 10);
console.log(`${player.name} juega con la camiseta número ${player.number} en la Selección`);