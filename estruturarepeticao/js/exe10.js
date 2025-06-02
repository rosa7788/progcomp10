function exe10 (){
    
let numeros = [2, 3, 5, 8, 11, 14, 17, 20, 23, 30];
let somaPares = 0, somaPrimos = 0;

for (let i = 0; i < 10; i++) {
  let n = numeros[i];

  
  if (n % 2 === 0) {
    somaPares += n;
  }

  
  let ePrimo = true;
  if (n < 2) {
    ePrimo = false;
  } 
  else {
    for (let j = 2; j < n; j++) {
  if (n % j === 0) {
    ePrimo = false;
        break;
  }
  }

  if (ePrimo) {
    somaPrimos += n;
  }
}

console.log("Soma dos pares: " + somaPares);
console.log("Soma dos primos:" + somaPrimos);
}
}
