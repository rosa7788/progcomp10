function exe1 (){
    let vet = []
    let pares = []
    let impares = []
    for (let i=0; i<6;i++){
        vet.push(Number(prompt(`Informe o ${i+1}o. número`)))
}
//fazer os calculos
    
    for (let i=0;i<6;i++){
        if (vet[i] % 2 == 0){
            pares.push(vet[i])
        }
        else {
            impares.push(vet[i])
        }
    }

    alert(`Temos ${pares.lenght} elementos pares ${pares}`)
    alert(`Temos ${impares.lenght} elementos pares ${impares}`)
}


