
    let matriz = []
    for (let i = 0; i < 3; i++){
        matriz[i] = []
    for (let j = 0; j < 3; j++){
        matriz[i][j] = parseInt(Math.random()*10)
    }
}
    //soma dos elementos
    let soma = 0
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            soma = soma + matriz[i][j]
        }
        console.log (`A soma dos números é: ${soma}`)
    }
    let qtde = 0
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            if (matriz[i][j] % 2 == 0){
                qtde++
            }
        }
    }
    console.log (`A quantidades d pares é: ${qtde}`)
    //matriz secundario
    for (let i=0;i<matriz.length;i++){
        console.log(matriz[i][matriz.length - 1 - i])
    }
    
