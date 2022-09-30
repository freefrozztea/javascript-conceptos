let count = 0;

let interval = setInterval(function() {

  count += 1;

  if(count === 10){
    clearInterval(interval);
  }

  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  console.log(time);

}, 2000);

// Como se puede ver, el programa ejcutará la función cada tiempo del intervalo. 
// Para que la ejecución termine colocamos el clearInterval