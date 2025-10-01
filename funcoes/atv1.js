function mostrarDobro(x){
    console.log(`O dobro do número:${x*2}`)
}

function calcularQuadrado(x){
  return x * x

}
function main (){
    let a = Number(prompt("Informe o número:"))
    mostrarDobro(a)
    console.log(`Quadrado ${calcularQuadrado(a)}`)
}
main()
