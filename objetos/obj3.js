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
        salario: salario
    };
    cadastro.push(funcionario);
}

let maior = cadastro[0]