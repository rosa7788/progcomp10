function exe6 (){
     let vet = [], i = 0, nProcurado = 0, posicoes = [], quant, verdade = 0, falso = 0


    for(i = 0; i < 12; i++){

    do{
        vet[i] = Number(prompt(`Insira o ${i + 1} numero :`))
        }
    
    while(vet[i] <= 0 || isNaN(vet[i]))
    }
    
    do{
    nProcurado = Number(prompt(`Inira o numero a ser buscado :`))
    }
    while( nProcurado <= 0 || isNaN(nProcurado))

    for(i = 0; i <12; i++){
        if(vet[i] === nProcurado){
         verdade++
        }
    }
    if(verdade >= 1 ){
    console.log(` O número buscado existe no vetor !!`)
    }
    else{ console.log(`O numero procurado nao existe no vetor :`) 

    }

    for( i = 0; i < 12; i++){
        
    if( vet[i] === nProcurado){
        posicoes.push(i);
        quant++;
    }
  }


 console.log(`O número ${ nProcurado} aparece ${posicoes.length} vezes, nas posições: ${posicoes.join (", ")}`)

}



