let matriz = []


for (let i = 0; i < 5; i++){
    matriz [i] = []
for (let j = 0; j < 5; j++){
    matriz [i][j] = Number(prompt(`Escreva os valores entre 0 e 500:`))
    if (matriz >= 0 && matriz <= 500){
        Number(prompt(`Escreva: ${i}${j}`))
    }
   
     
    
    console.log (matriz)
    
}
}

//diagonal
let somaDiagonalPrincipal = 0
let media = 0

for (let i = 0; i < 5; i++){
    somaDiagonalPrincipal = 0
for (let j = 0; j < 5; j++){
    if (i === j){
        somaDiagonalPrincipal += matriz [i][j]
    }
}  
}
let somaDiagonalSecundaria = 0
for (let j = 0; j < 5; j++){
    somaDiagonalSecundaria
for (let i = 0; i < 5; i++){
    if ( j > i){
        somaDiagonalSecundaria
    }
}
}
console.log (somaDiagonalPrincipal/ 5)
console.log (somaDiagonalSecundaria/ 5)

