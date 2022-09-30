// Named Import
import { name } from "./export";

// Default Import
import anyName from "./export";

// Import List
import { funcion, id, nombre, tipo } from "./export";

// Import All
 import * from "./export";

// Rename Import
import { 
  ejemplo1 as nuevoEjemplo1,
  nuevoEjemplo2
} from "./export";


console.log(name, anyName);
console.log(funcion, id, nombre, tipo);
console.log(nuevoEjemplo1, nuevoEjemplo2);

