function carregarCidades(lista){
    lista.push("São Paulo", "Campinas", "Santos", "Sorocaba", "Caraguatatuba")
}
function padronizarNomes(lista){
     for (let i = 0; i < lista.length; i++){
        lista[i] = lista[i].toUpperCase()
    }
}
function marcarInterior(lista){
    for (let i = 0; i < lista.length; i++){
        if (lista[i][0] == 'C'){
            lista[i] = `INTERIOR - ${lista[i]}`
        }
}
}
function exibirCidades(lista){
    console.log(lista)
}
function main (){
    let lista = []
    carregarCidades(lista)
    padronizarNomes(lista)
    marcarInterior(lista)
    exibirCidades(lista)

}
main()