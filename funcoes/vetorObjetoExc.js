function listarNomes(funcionarios){
    for (let i = 0; i < funcionarios.length; i++){
        console.log (funcionarios[i].nome)
    }
}

function cadastroIncial (funcionarios){
    funcionarios.push ({nome: "Edu", cargo: "Analista", salario: "2.500" })
    funcionarios.push ({nome: "Alda", cargo: "Contadora", salario: "3.500" })
    funcionarios.push ({nome: "Rita", cargo: "Gerente", salario: "5.500" })

}

function cadastroNovo (funcionarios){
    funcionarios.push ({
        nome: prompt(`Informe nome do novo funcionario:`),
        cargo: Number(pormpt(`Informe o cargo do novo funcionario:`)),
        salario: prompt(`Informe o salario do novo funcionario:`)
    })
    
}

function removeFuncionario (funcionarios, nome){
    for (let i = 0; i < funcionarios.length; i++){
        if (funcionarios[i].nome == nome){ 
            funcionarios.splice (i, 1)
            alert (`Funcionário removido`)
            return 
        }
    }
    alert ("Funcionário não encontrado")
}

function aumentoSalario (funcionarios){
    for (let i = 0; i < funcionarios.length; i++){
        funcionarios[i].salario += funcionarios[i].salario * 0.10
    }
    alert ("Salários aumentados")
}

function salarioNome (funcionarios, nome){
    for (let i = 0; i < funcionarios.length; i ++){
        if (funcionarios[i].nome == nome){
        console.log (`Salário de ${nome}: R$ ${funcionarios[i].salario}`)
        return
    }
    }
    alert ("Funcionário não encontrado")
    
}

function atualizarCargo (funcionarios){
    nomeCargo = prompt (`Digite o nome para atualizar:`)
}





function main (){
    let vetor = []
    cadastroInicial (vetor)
    let opcao
    do {
       opcao = Number(prompt(`1. Cadastrar novo funcionário. 
        2. Listar todos os nomes. 
        3. Aumentar o salário de todos em 10%. 
        4. Buscar salário por nome. 
        5. Atualizar o cargo do funcionário.
         6. Remover funcionário por nome. 
         7. Exibir média salaria da empresa. 
         8. Encerrar o programa`)) 
    switch (opcao) {
        case 1: cadastroNovo (vetor); break;
        case 2: listarNomes (vetor); break;
        case 3: aumentoSalario (vetor); break;
        case 4: let nome = prompt(`Informe o nome para ver o salario:`)
            salarioNome (vetor); break;
        case 5: 
        case 6: removeFuncionario (vetor); break;
        case 7:
        case 8:
    }  
    }
}
main ()
