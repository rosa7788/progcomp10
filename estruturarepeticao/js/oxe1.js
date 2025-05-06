function pesquisaSatisfacao (){
    let soma = 0;
    let nota; 
    let participantes = 10;
    let satisfeitos = 0;
    let meioTermo = 0;
    let insatisfeitos = 0;
    let conta = 1;

    while (conta<= participantes){
        nota = Number(prompt(`Qual a nota de participação: ${conta}`));
        conta++;
        soma += nota;
        if (nota >= 8){
            satisfeitos++;
        } else if (nota < 8 && nota > 5){
            meioTermo++;
        } else{
            insatisfeitos++;
        }  
    }

    let media = soma/participantes
    alert(`A média das notas é: ${media}`);
    alert(`Participantes satisfeitos: ${satisfeitos}`);
    alert(`Participantes insatisfeitos: ${insatisfeitos}`);
    alert(`Participantes de meio termo: ${meioTermo}`);


}


