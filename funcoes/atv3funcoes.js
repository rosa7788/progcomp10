let vendas = [
    { produto: "Notebook", categoria: "Informática", valor: 3500, quantidade: 2 },
    { produto: "Mouse", categoria: "Informática", valor: 80, quantidade: 5 },
    { produto: "Camiseta", categoria: "Moda", valor: 50, quantidade: 10 },
    { produto: "Tênis", categoria: "Moda", valor: 250, quantidade: 4 },
    { produto: "Livro", categoria: "Educação", valor: 40, quantidade: 7 },
    { produto: "Tablet", categoria: "Informática", valor: 1500, quantidade: 1 }
];

// Objeto para acumular o total de vendas por categoria
let totaisPorCategoria = {};

// a) Calcular o total de vendas por categoria
vendas.forEach(function(item) {
    let totalItem = item.valor * item.quantidade; // valor total do produto
    if (totaisPorCategoria[item.categoria]) {
        totaisPorCategoria[item.categoria] += totalItem;
    } else {
        totaisPorCategoria[item.categoria] = totalItem;
    }
});

// Exibir o total por categoria
console.log("Total de vendas por categoria:");
for (let categoria in totaisPorCategoria) {
    console.log(`${categoria}: R$ ${totaisPorCategoria[categoria].toFixed(2)}`);
}

// b) Identificar a categoria com maior valor de vendas
let categoriaCampea = "";
let maiorValor = 0;

for (let categoria in totaisPorCategoria) {
    if (totaisPorCategoria[categoria] > maiorValor) {
        maiorValor = totaisPorCategoria[categoria];
        categoriaCampea = categoria;
    }
}

// Exibir a categoria campeã
console.log("\nCategoria campeã de vendas:");
console.log(`${categoriaCampea} - Total: R$ ${maiorValor.toFixed(2)}`);
