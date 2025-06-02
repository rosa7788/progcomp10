function exe8 (){
let idades = [60, 25, 52, 40, 33, 20];
let pesos = [55, 70, 59, 65, 50, 60];
let alturas = [1.60, 1.45, 1.80, 1.49, 1.70, 1.75];
let olhos = ['A', 'V', 'A', 'P', 'C', 'A']; // A = azul, V = verde, etc.
let cabelos = ['C', 'L', 'R', 'P', 'L', 'R']; // C = castanho, L = louro, R = ruivo

let idadePeso = 0;
let somaIdade = 0;
let contaBaixa = 0;
let olhosAzuis = 0;
let ruivasSemAzul = 0;

for (let i = 0; i < 6; i++) {
  if (idades[i] > 50 && pesos[i] < 60) {
    idadePeso++;
  }

  if (alturas[i] < 1.50) {
    somaIdade += idades[i];
    contaBaixa++;
  }

  if (olhos[i] === 'A') {
    olhosAzuis++;
  }

  if (cabelos[i] === 'R' && olhos[i] !== 'A') {
    ruivasSemAzul++;
  }
}

let mediaIdade = contaBaixa > 0 ? somaIdade / contaBaixa : 0;
let porcentagemAzul = (olhosAzuis / 6) * 100;

console.log("Qtd. com idade > 50 e peso < 60 kg: " + idadePeso);
console.log("Média das idades com altura < 1.50 m: " + mediaIdade.toFixed(2));
console.log("Porcentagem com olhos azuis: " + porcentagemAzul.toFixed(2) + "%");
console.log("Quantidade de ruivos sem olhos azuis: " + ruivasSemAzul);

}
