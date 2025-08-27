//criar vetores e adicionar os valores
let regioes = []
let dias = []


for (let i = 0; i < 5; i++){
    regioes.push(prompt(`Informe o nome da região: ${i + 1}`))
}
for (let i = 0; i < 5; i++){
    dias.push(Number(prompt(`Informe o dia: ${i + 1}`)))
}

//cria a matriz e adciona os níveis de poluição
let poluicao = []

for (let i = 0; i < 5; i++){
    poluicao[i] = [] //cria vetor dentro do vetor
for (let j = 0; j < 5; j++){
    do {
        poluicao[i][j] = prompt (`Informe poluição da região: ${regioes[i]} no dia ${dias[j]}`)
    }
    while (poluicao[i][j] < 0 || poluicao [i][j] > 500)
} 
}

//exibir todos os valores da diagonal principal e calcular a média

let somaDiagonal = 0
for (let i = 0; i < poluicao.length; i++){
    console.log (`Elemento da diagonal principal ${poluicao[i][i]}`)
    somaDiagonal += poluicao[i][i]
}
console.log (`A média da soma diagonal é: ${somaDiagonal/poluicao.length}`)
//exibir todos os valores da diagonal secundária e calcular a média

let somaDiagonalsecundaria = 0
for (let i = 0; i < 5; i++){
    console.log (`Elemento da diagonal secundária: ${poluicao[i][4 - i]}`)
    somaDiagonal += poluicao[i][4 - i]
}
console.log (`A média da diagonal secundária é: ${somaDiagonal/poluicao.length}`)



