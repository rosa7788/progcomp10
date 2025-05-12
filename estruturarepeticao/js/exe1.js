function exe1 () {
    let a, b, c, d;
    let grupo = 1
    while (grupo <= 5){
    let conta = 1
    a = Number(prompt(`Informe o valor do A`))
    b = Number(prompt(`Informe o valor do B`))
    c = Number(prompt(`Informe o valor do C`))
    d = Number(prompt(`Informe o valor do D`))
    dig = (`${a}, ${b}, ${c}, ${d}`);

    while (conta <= 3){
        if (a > b){
            aux = a; a= b; b = aux
        }
        if (b > c){
            aux = b; b= c; c = aux
        }
        if (c > d){
            aux = c; c = d; d = aux
        }
        conta++;
    }
    alert(`Ordem digitada ${dig}`)
    alert(`Ordem crescente ${a} ${b} ${c} ${d}`)
    alert(`Ordem decrescente ${d} ${c} ${b} ${a}`)
    grupo ++;
}
    

}