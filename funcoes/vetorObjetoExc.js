function listarNomes(funcionarios) {
    for (let i = 0; i < funcionarios.length; i++) {
        console.log(funcionarios[i].nome);
    }
}

function cadastroInicial(funcionarios) {
    funcionarios.push({ nome: "Edu", cargo: "Analista", salario: 2500 });
    funcionarios.push({ nome: "Alda", cargo: "Contadora", salario: 3500 });
    funcionarios.push({ nome: "Rita", cargo: "Gerente", salario: 5500 });
}

function cadastroNovo(funcionarios) {
    funcionarios.push({
        nome: prompt("Informe nome do novo funcionário:"),
        cargo: prompt("Informe o cargo do novo funcionário:"),
        salario: Number(prompt("Informe o salário do novo funcionário:"))
    });
}

function removeFuncionario(funcionarios, nome) {
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].nome == nome) {
            funcionarios.splice(i, 1);
            alert("Funcionário removido");
            return;
        }
    }
    alert("Funcionário não encontrado");
}

function aumentoSalario(funcionarios) {
    for (let i = 0; i < funcionarios.length; i++) {
        funcionarios[i].salario += funcionarios[i].salario * 0.10;
    }
    alert("Salários aumentados");
}

function salarioNome(funcionarios, nome) {
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].nome == nome) {
            console.log(`Salário de ${nome}: R$ ${funcionarios[i].salario.toFixed(2)}`);
            return;
        }
    }
    alert("Funcionário não encontrado");
}

function atualizarCargo(funcionarios) {
    let nome = prompt("Informe o nome do funcionário:");
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].nome == nome) {
            let novoCargo = prompt("Informe o novo cargo:");
            funcionarios[i].cargo = novoCargo;
            alert("Cargo atualizado com sucesso!");
            return;
        }
    }
    alert("Funcionário não encontrado");
}

function mediaSalarial(funcionarios) {
    let soma = 0;
    for (let func of funcionarios) {
        soma += func.salario;
    }
    let media = soma / funcionarios.length;
    alert(`A média salarial é ${media.toFixed(2)}`);
    return media;
}

function promoveFuncionario(funcionarios) {
    let media = mediaSalarial(funcionarios);
    let promovidos = [];

    for (let func of funcionarios) {
        if (func.salario < media) {
            func.cargo = "Analista Júnior";
            func.salario *= 1.15;
            promovidos.push(func.nome);
        }
    }

    if (promovidos.length > 0) {
        alert(`Promoções aplicadas para: ${promovidos.join(", ")}`);
    } else {
        alert("Nenhum funcionário abaixo da média salarial.");
    }
}

function maiorSalario(funcionarios) {
    if (funcionarios.length === 0) {
        alert("Nenhum funcionário cadastrado.");
        return;
    }
    let maior = funcionarios[0];
    for (let func of funcionarios) {
        if (func.salario > maior.salario) {
            maior = func;
        }
    }
    alert(`Maior salário: ${maior.nome} (${maior.cargo}) R$ ${maior.salario.toFixed(2)}`);
}

function main() {
    let vetor = [];
    cadastroInicial(vetor);
    let opcao;
    do {
        opcao = Number(prompt(`1. Cadastrar novo funcionário
2. Listar todos os nomes
3. Aumentar o salário de todos em 10%
4. Buscar salário por nome
5. Atualizar o cargo do funcionário
6. Remover funcionário por nome
7. Exibir média salarial da empresa
8. Encerrar o programa
9. Promover abaixo da média
10. Maior salário`));

        switch (opcao) {
            case 1: cadastroNovo(vetor); break;
            case 2: listarNomes(vetor); break;
            case 3: aumentoSalario(vetor); break;
            case 4:
                let nomeSal = prompt("Informe o nome para ver o salário:");
                salarioNome(vetor, nomeSal);
                break;
            case 5: atualizarCargo(vetor); break;
            case 6:
                let nomeRem = prompt("Informe o nome do funcionário para remover:");
                removeFuncionario(vetor, nomeRem);
                break;
            case 7: mediaSalarial(vetor); break;
            case 8: alert("Programa encerrado."); break;
            case 9: promoveFuncionario(vetor); break;
            case 10: maiorSalario(vetor); break;
            default: alert("Opção inválida");
        }
    } while (opcao !== 8);

    console.log(vetor);
}

main();
