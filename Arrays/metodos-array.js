// Filter
const numbers = [10, -23, 22, -4, 9];

let positives = numbers.filter(function (number) {
  return number > 0;
});

console.log(positives);

// Reduce
const ingresosEgresos = [10, 20, 40, -50];

const dineroTotal = ingresosEgresos.reduce(function(total, dinero){
		return total + dinero;
}, 0);

console.log(dineroTotal);
