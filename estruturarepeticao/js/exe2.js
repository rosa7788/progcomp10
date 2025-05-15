function exe2(){
    const despesa = 200
    let preco = 5.0
    let quantidade = 120
    let lucro
    let aux = ""
    let maiorLucro = 0
    let quantidadeMaior = 0
    let precoMaior = 0

    while (preco >= 1.0){
        if (lucro > maiorLucro){
            maiorLucro = lucro
            precoMaior = preco
            quantidadeMaior = quantidade
        }
        lucro = (preco * quantidade) - despesa
        preco = preco - 0.50
        quantidade = quantidade + 26
        aux = aux + "\n" + (`Preço: $ ${preco} + Quantidade: ${quantidade} - Despesa: $ ${despesa}  + Lucro: $ ${lucro}`)

    } 
    alert (aux)

}