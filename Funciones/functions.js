// La sintaxis de las funciones es la siguiente:
/*
function nombre(param1, param2, ..., paramN){
    instrucciones
    ...
    ...
}
Donde nombre es el nombre que le daremos a la función. Si lo omitimos, la función será anónima
Donde param1 hasta paramN son los nombres de los argumentos pasados a la función. 
Puede no tener argumentos y tener hasta 255 argumentos.
Donde instrucciones: son las instrucciones o la lógica de la función. Puede retornar algo o no
*/

function mostrarNombre(nombre) {
  console.log(`El se llama ${nombre}`);
}
mostrarNombre("Lionel Messi");
