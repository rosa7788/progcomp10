function exe7(){
    let idade, peso, altura, qtdIdade50mais = 0, qtdIdade10e20 = 0, somaAltura = 0, qtdPesomenor40 = 0
    for (let conta=1; conta <=5;conta++){
        do {
            idade = Number(prompt(`Informe a idade`))
        }
        while (idade < 0)
        do {
            peso = Number(prompt(`Informe a peso`))
        }
        while (peso < 0)
        do {
            altura = Number(prompt(`Informe a altura`))
        }
        while (altura < 0)
            //qtd idade 50 mais
        if (idade > 50){
            qtdIdade50mais++
        } //media das alturas das pessoas idade entre 10 e 20
        if (idade >= 10 && idade <= 20){
            somaAltura = somaAltura + altura
            qtdIdade10e20++
        }
        if (peso < 40){
            qtdPesomenor40++
        }
    }
    alert (`Item 1. ${qtdIdade50mais}`)
    alert (`Item 2. ${somaAltura/qtdIdade10e20}`)
    alert (`Item 3. ${(qtdPesomenor40/5) * 100}`)
}