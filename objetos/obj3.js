let cadastro = [];

for (let i = 0; i < 6;i++){
    let nome = prompt(`Informe o nome do funcionário ${i+1}:`);
    let cargo = prompt(`Informe o cargo ${i+1}:`);
    let salario = Number(prompt(`Informe o salário${i+1}:`));
    let tempoServico = Number(prompt(`Informe quantos anos eles esteve na empresa ${i+1}:`));

    let funcionario = {
        nome: nome,
        cargo: cargo,
        salario: salario,
        tempoServico: tempoServico
    };
    cadastro.push(funcionario);
}

let maior = cadastro[0]
let soma = 0
let qtd = 0
for (let i=0;i<6;i++){
    if (cadastro[i].salario > 5000 && cadastro[i].tempoServico > 5){
        console.log(cadastro[i])
    }
    if (cadastro[i].salario > maior.salario){
        maior = cadastro[i]
    }
    soma = soma + cadastro[i].salario
    if (cadastro[i].cargo === `gerente`){
        qtd++
    }
}

console.log(`O funcionário com maior salário é:${maior.nome}`)
console.log(`A média salarial da empresa é:${soma/cadastro.length}`)
console.log(`Funcionários gerentes:${qtd}`)