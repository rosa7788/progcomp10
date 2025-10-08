function listarNomes(alunos){
    for (let i = 0; i < alunos.length; i++){
        console.log (alunos[i].nome)
    }
}
function aumentarIdade(alunos){
    for (let aluno of alunos){
        aluno.idade += 1
    }
}
function cadastroInicial (alunos){
    alunos.push({nome: "Ana", idade: "20", curso: "Sistemas da informação"})
    alunos.push({nome: "Carlos", idade: "22", curso: "Ciência da Computação"})
    alunos.push({nome: "Beatriz", idade: "19", curso: "Engenharia de Software"})
}
function cadastroNovo (alunos){
    alunos.push ({
        nome: prompt(`Informe nome do seu novo aluno:`),
        idade: Number(pormpt(`Informe a idade do novo aluno:`)),
        curso: prompt(`Informe o curso do novo aluno:`)
    })
}
function removeAluno (alunos, nome){
    for (let i = 0; i < alunos.length; i++){
        if (alunos[i].nome == nome){ //encontrei aqui
            alunos.splice (i, 1) // removed do vetor
            return //sai da funcao
        }
    }
}
// não encontrou
alert (`Aluno não encontrado`)
   
function main(){
    let vetor = []
    cadastroInicial(vetor) //cadastro inical
    let opcao
    do {
        opcao = Number(prompt(`Digite 1. Cria aluno. Digite 2. Lista nome; Digite 3. Atualiza idade. Digite 4. Remove aluno. Digite 5. Sair`))
        switch (opcao){
            case 1: cadastroNovo (vetor); break;
            case 2: listarNomes (vetor); break;
            case 3: aumentarIdade (vetor); break;
            case 4: let nomeRemove = prompt(`Informe nome para remover`)
                    removeAluno (vetor, nomeRemove)
            case 5: alert (`Programa encerrado`); break;
            default: alert (`Opção inválida`); break;
        }
    }
    while (opcao != 5);
    console.log(vetor)
}
main()