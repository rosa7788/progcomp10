let matriz = []
for (let i = 0; i < 4; i++){
    matriz[i] = [] //vetor de vetores
for (let j = 0; j < 7; j++){
    matriz[i][j] = parseInt(Math.random()*100)
}
}
console.log (matriz)

//somar por vendedor
let soma = 0
for (let i = 0; i < 4; i++){
    soma = 0 //novo vendedor
for (let j = 0; j < 7; j++){ //percorre os dias da semana
    soma = soma + matriz[i][j]
    
}
console.log (`Vendedor: ${i} Vendeu: ${soma}`) 
}
//soma por dia
let somaPorDia = 0
for (let j = 0; j < 7; j++){  //para cada dia
    somaPorDia = 0
for (let i = 0; i < 4; i++){ //para cada vendedor
    somaPorDia = somaPorDia + matriz[i][j]
}
console.log (`Total de vendas: ${j} é: ${somaPorDia}`)
}
//calcular a maior posição
let maior = matriz[0][0]
let iMaior = 0
let jMaior = 0
for (let i = 0; i < 4; i++){
for (let j = 0; j , 7;){
    if (matriz[i][j] > maior){
        maior = matriz[i][j]
        iMaior = i
        jMaior = j
    }
}
}
console.log (`A maior venda foi: ${maior} na posição [${iMaior}] [${jMaior}]`)

//media das vendas
let somaMedia = 0
for (let i = 0; i < 4; i++){
for (let j = 0; j < 7; j++){
    somaMedia += matriz [i][j]
}
}
console.log (`A média das vendas: ${somaMedia / (matriz.length * matriz[0].length)}`)

