function exe5 (){
     let i = 0, vet = [], maiores = 0, menores = 0, iguais = 0

    for( i = 0; i < 10; i++){

    do{
        vet[i] = Number(prompt(` Insira o ${i +1}valor :`))}

    while(vet[i] <= 0 || isNaN(vet[i]))}

    for( i = 0; i < 10; i++){

    if( vet[i+1] > vet[0]){
                maiores++
    }
    else if( vet[i+1] < vet[0]){
                menores++
    }
    else if( vet[i+1] == vet[0]){
                iguais++
    }
    }
        console.log(` Os numeros maiores que o primeiro : ${maiores}  `)
        console.log(` Os numeros menores que o primeiro : ${menores} `)
        console.log(` Os numeros iguais ao primeiro: ${iguais}`)
}