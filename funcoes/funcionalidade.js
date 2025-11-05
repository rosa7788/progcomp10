const notas = [10, 9, 8, 7, 6, 5, 6, 7, 8, 9];

let somaNotas = 0;
let aprovados = 0;

console.log("Todas as notas:");
notas.forEach(function(nota, indice) {
    somaNotas += nota;
    console.log(`Nota ${indice + 1}: ${nota}`);

    if (nota >= 7) {
        aprovados++;
    }
});

console.log(`Soma total das notas: ${somaNotas}`);
console.log (`Média total das notas: ${(somaNotas / notas.length).toFixed(2)}`);
console.log (`Quantidade de alunos aprovados (nota ≥ 7): ${aprovados}`);

console.log("Notas nas posições pares:");
notas.forEach(function(nota, indice) {
    if (indice % 2 === 0) {
        console.log(`Posição ${indice}: ${nota}`);
    }
});