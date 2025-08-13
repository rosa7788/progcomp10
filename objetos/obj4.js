let cadastro = [];

for (let i = 0; i < 7;i++){
    let nomeProjeto = String(prompt(`Informe o nome do projeto ${i+1}:`));
    let empresa = String(prompt(`Informe a empresa ${i+1}:`));
    let duracaoMeses = Number(prompt(`Informe a duração de meses${i+1}:`).toLowerCase());
    let orcamento = Number(prompt(`Informe o orçamento ${i+1}:`));

    let projetos = {
        nomeProjeto: nomeProjeto,
        empresa: empresa,
        duracaoMeses: duracaoMeses,
        orcamento: orcamento
    };
    cadastro.push(projetos);
}
let maior = cadastro[0]
let soma = 0
let total = 0
let Inovatech = 0
for (let i=0;i<cadastro.length;i++){
    if (cadastro[i].duracaoMeses > 12 && cadastro[i].orcamento > 1000000){
        console.log(`Possui a duração mais de 12 meses e o orçamento mais de 1000000 ${cadastro[i].nomeProjeto} `)
    }
    if (cadastro[i].orcamento > maior.orcamento){
        maior = cadastro[i]
    }
    soma = soma + cadastro[i].duracaoMeses
    if (cadastro[i].empresa === "inovatech"){
        Inovatech++
    }
    if (cadastro[i].duracaoMeses < 6){
        total += cadastro[i].orcamento
}
}

console.log(`O projeto com maior orçamento:${maior.orcamento}`)
console.log(`A média de duração dos projetos:${soma/7}`)
console.log(`Quantos projetos foram pela empresa InovaTech: ${Inovatech}`)
console.log(`Total de gastos com projetos de menos de 6 meses:: ${total}`)