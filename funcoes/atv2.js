function main(){
    let a = 10
    let vetor = [10, 20, 30]
    //passagem de parâmetro por refêrencia
    alternarVetor(vetor)
    console.log(vetor)
}
function alternarVetor (v) {
    v[0] = 100 //altera variavel vetor do main()

}
function alternarNumero (p){
    let p = 100
}
main()