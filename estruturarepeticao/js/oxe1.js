function pesquisaSatisfacao (){
    let soma = 0;
    let nota; //sera informado pelo usuario
    let participantes = 10; 
    let satisfeitos = 0; //incial ninguem
    let insatisfeitos = 0; //inicial ninguem
    let conta = 1; //varia de 1 a 10

    while (conta<= participantes){
        nota = Number(prompt(`Qual a nota de participação: ${conta}`));
        if (nota >= 8 && nota <= 10){
            satisfeitos++; //satisfeitos + 1
        } 
        else if (nota >= 0 && nota < 5){
            insatisfeitos++;
        }
        else if (nota < 0 || nota > 10) {
            alert(`nota inválida`);
            continue; //volta para o inicio, sem incrementar conta
        }
            soma += nota; //soma = soma + nota
            conta++; //conta = conta + 1
         
    }
    

    let media = soma/participantes
    alert(`A média das notas é: ${media}`);
    alert(`Participantes satisfeitos: ${satisfeitos}`);
    alert(`Participantes insatisfeitos: ${insatisfeitos}`);

}




