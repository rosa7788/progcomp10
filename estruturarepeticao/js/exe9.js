function exe9 (){
let idades = [30, 20, 15, 45, 28, 33, 50, 13, 39, 10];
let pesos = [95, 65, 85, 92, 70, 60, 120, 50, 82, 40];
let alturas = [1.45, 1.90, 1.95, 1.49, 1.91, 1.80, 1.48, 1.93, 1.55, 1.92];

let somaIdade = 0, pesoAltura = 0, entre10e30 = 0, mais190 = 0;

for (let i = 0; i < 10; i++) {
  somaIdade += idades[i];

  if (pesos[i] > 90 && alturas[i] < 1.5) {
    pesoAltura++;
  }

  if (alturas[i] > 1.90) {
    mais190++;
    if (idades[i] >= 10 && idades[i] <= 30) {
      entre10e30++;
    }
  }
}

let mediaIdade = somaIdade / 10;
let porcentagem = mais190 > 0 ? (entre10e30 / mais190) * 100 : 0;

console.log("Média das idades: " + mediaIdade.toFixed(2));
console.log("Quntidade com peso > 90kg e altura < 1.5m: " + pesoAltura);
console.log("Porcentagem entre 10 e 30 anos com mais de 1.90m: " + porcentagem.toFixed(2) +"%");
}
