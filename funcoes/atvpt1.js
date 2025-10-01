function leitura (vet){
    vet.push("Roberto", "Carlos", "Tati", "Yrlon", "Artur")
}
function maiusculo (vet){
    for (let i = 0; i < vet.length; i++){
        vet[i] = vet[i].toUpperCase()
    }
}
function anonimo (vet){
    for (let i = 0; i < vet.length; i++){
        if (vet[i][0] == 'A'){
            vet[i] = "ANONIMO"
        }
    }
}
function mostra (vet){
    console.log(vet)
}

function main (){
    let nomes = []
    leitura(nomes)
    maiusculo(nomes)
    anonimo(nomes)
    mostra(nomes)

}
main()