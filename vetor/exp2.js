function exp1 (){
    let vet = [], pares = [], impares = [] //declara vetor
    for (let i=0; i<10;i++){
        vet.push(Number(prompt(`Informe o ${i+1}° número`)))
    }
    for (let i=0; i<10;i++){
        if (i % 2 ==0){
            pares [i] = vet [i] + 10
        } 
        else {
            impares [i] = vet [i] * 5
        }
    }
    alert(`Pares: ${pares}`)
    alert(`Pares: ${impares}`)
}