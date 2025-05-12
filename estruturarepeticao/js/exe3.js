function exe3 (){
    let conta = 1, idade, f1=0, f2=0, f3=0, f4=0, f5=0;
    while (conta <=8){
        idade = Number(prompt(`Informe idade da pessoa ${conta}`))
        if (idade>= 0 && idade <= 15){
            f1++;
        }
        else if (idade >= 16 && idade <= 30){
            f2++;
        }
        else if (idade >= 31 && idade <= 45){
            f3++;
        }
        else if (idade >= 45 && idade <=60){
            f4++;
        }
        else if (idade >= 61 && idade <= 130){
            f5++;
        }
        else {
            alert(`Inválido`)
            continue
        }
        conta++;
    }
    alert(`F1 ${f1}\n F2 ${f2}\n F3 ${f3}\n F4 ${f4}\n F5 ${f5}\n %F1 ${f1/8*100}\n $F5 ${f5/8*100}`)
}