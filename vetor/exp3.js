function exp2 (){
    let vet = [], gostouMuito = 0, gostou = 0, naoGostou = 0
    

    for (let i=0; i < 10; i++ ){
        
    vet.push(Number(prompt(`Insira um numero de 1,2,3 ${i}`)))

       if (vet[10] == 1){
        gostouMuito++
       }
       else if (vet[10] == 2){
        gostou++
       }
       else {
        naoGostou++
       }


    }
    alert (`Quantidade que gostou muito: ${gostouMuito}`)
    alert (`Quantidade que gostou: ${gostou}`)
    alert (`Quantidade que nao gostou: ${naoGostou}`)
    alert (`% De quem nao gostou ${naoGostou/vet.lenght*100}`)

}