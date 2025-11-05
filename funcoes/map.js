//map
let precosUSD = [10, 25.50, 8, 100, 35.25]

let real = precosUSD.map((precos) => {
    return precos * 5
})

console.log(real)

//filter

let idades = [12, 17, 25, 15, 34, 60, 8]

let maiores = idades.filter ((num) =>{
    return num >= 18
})
console.log(maiores)

//reduce

let vendas = [150, 300, 50, 450, 100]

let soma = vendas.reduce ((acumulador, total) =>{
    return acumulador + total
}, 0)

console.log("A soma das vendas do dia é:" + soma)

