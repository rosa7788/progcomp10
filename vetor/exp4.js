function exe4(){
    let i = 0, vet = [], mediaAcima = [], soma = 0, media = 0

    for( i = 0; i < 8; i++){

    do{
      
        vet[i] = Number(prompt(`Insira o ${i + 1} numero :`))}
      
    while(vet[i] <=0 || isNaN(vet[i])){ 

        soma += vet[i]
    }
        media = soma/8

    for(i = 0; i < 8; i++){
        
    if(vet[i] > media){
            mediaAcima.push(vet[i])
        }
            
     }
    }

     console.log(` A média calculada é : ${ media}  `)
     console.log(` A quantidade de valores acima da média é ${mediaAcima.length } `)
     console.log(` Os valores acima da média são: ${mediaAcima}`)

}
