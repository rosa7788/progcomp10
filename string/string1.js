let palavra = prompt("Informe uma palavra")
//tira os espeaços antes e depois
let limpa = palavra.trim()
//cria um vetor da palavra limpa
let vetor = limpa.split ("")
//inverte palavra do tipo vetor
let invertida = vetor.reverse()
//converte vetor em string
let invertidaString = invertida.join("")

if (invertida === limpa){ //compra duas strings
    alert (`São palídromas`)
}


